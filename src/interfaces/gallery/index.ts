import { ColorPaletteInterface } from 'interfaces/color-palette';
import { DesignInterface } from 'interfaces/design';
import { MotifInterface } from 'interfaces/motif';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GalleryInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  color_palette?: ColorPaletteInterface[];
  design?: DesignInterface[];
  motif?: MotifInterface[];
  user?: UserInterface;
  _count?: {
    color_palette?: number;
    design?: number;
    motif?: number;
  };
}

export interface GalleryGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
