import { VersionInterface } from 'interfaces/version';
import { UserInterface } from 'interfaces/user';
import { GalleryInterface } from 'interfaces/gallery';
import { GetQueryInterface } from 'interfaces';

export interface DesignInterface {
  id?: string;
  name: string;
  description?: string;
  user_id: string;
  gallery_id: string;
  created_at?: any;
  updated_at?: any;
  version?: VersionInterface[];
  user?: UserInterface;
  gallery?: GalleryInterface;
  _count?: {
    version?: number;
  };
}

export interface DesignGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
  gallery_id?: string;
}
