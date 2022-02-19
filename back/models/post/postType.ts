import { Model, Optional } from "sequelize/types";

export interface PostAttributes {
    id?: number;
    content: string;
}

interface PostCreationAttributes extends Optional<PostAttributes, "id"> { }

export interface PostInterface extends Model<PostAttributes, PostCreationAttributes>, PostAttributes { }

