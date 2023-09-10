import { DesignInterface } from 'interfaces/design';
import { GetQueryInterface } from 'interfaces';

export interface VersionInterface {
  id?: string;
  version_number: number;
  design_id: string;
  created_at?: any;
  updated_at?: any;

  design?: DesignInterface;
  _count?: {};
}

export interface VersionGetQueryInterface extends GetQueryInterface {
  id?: string;
  design_id?: string;
}
