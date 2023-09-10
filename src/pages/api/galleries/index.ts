import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { galleryValidationSchema } from 'validationSchema/galleries';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getGalleries();
    case 'POST':
      return createGallery();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getGalleries() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.gallery
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'gallery'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createGallery() {
    await galleryValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.color_palette?.length > 0) {
      const create_color_palette = body.color_palette;
      body.color_palette = {
        create: create_color_palette,
      };
    } else {
      delete body.color_palette;
    }
    if (body?.design?.length > 0) {
      const create_design = body.design;
      body.design = {
        create: create_design,
      };
    } else {
      delete body.design;
    }
    if (body?.motif?.length > 0) {
      const create_motif = body.motif;
      body.motif = {
        create: create_motif,
      };
    } else {
      delete body.motif;
    }
    const data = await prisma.gallery.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
