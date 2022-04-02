import { BaseModelType } from './general.types';

export interface ImageType extends BaseModelType {
  path: {
    data: number[];
    type: string;
  };
  source: string;
}
