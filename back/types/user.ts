import { Model, Optional } from "sequelize/types";

export interface UserAttributes {
  name: string;
  email: string;
  password: string;
  lastname: string;
  role: number;
  image: string;
  token: string;
  tokenExp: number;
  id? : number;
}

interface UserCreationAttributes extends Optional<UserAttributes, "role"> { }

export interface UserInterface extends Model<UserAttributes, UserCreationAttributes>,
UserAttributes {}

declare global {
  namespace Express {
    interface Request {
      user : UserAttributes,
      login(user: UserAttributes, done: (err: any) => void): void;
      logout(): void;
    }
  }
}