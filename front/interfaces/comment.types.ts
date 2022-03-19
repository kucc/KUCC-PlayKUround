import { BaseModelType } from './general.types';

export interface CommentType extends BaseModelType {
  content: string;
  writer: string;
  source: string;
}
