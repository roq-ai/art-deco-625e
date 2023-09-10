import { GalleryInterface } from 'interfaces/gallery';
import { GetQueryInterface } from 'interfaces';

export interface MotifInterface {
  id?: string;
  name: string;
  description?: string;
  gallery_id: string;
  created_at?: any;
  updated_at?: any;

  gallery?: GalleryInterface;
  _count?: {};
}

export interface MotifGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  gallery_id?: string;
}
