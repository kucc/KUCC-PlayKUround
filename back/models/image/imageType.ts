import { Model, Optional } from 'sequelize/types';

export interface ImageAttributes {
  id?: number;
  path: string;
  source: string;
}

interface ImageCreationAttributes extends Optional<ImageAttributes, 'id'> {}

export interface ImageInterface
  extends Model<ImageAttributes, ImageCreationAttributes>,
    ImageAttributes {}

export interface MulterFile {
  key: string; // Available using `S3`.
  path: string; // Available using `DiskStorage`.
  mimetype: string;
  fieldname: string;
  originalname: string;
  size: number;
}
