import express from 'express';
import session from 'express-session';
import { Model, Optional } from 'sequelize/types';

export interface UserAttributes {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: number;
  token: string;
  tokenExp: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  sourceId?: string;
  postList?: string[];
  courseList?: string[];
  scrabList?: string[];
  likeList?: string[];
  rateList?: string[];
  historyList?: string[];
}

interface UserCreationAttributes
  extends Optional<
    UserAttributes,
    | 'id'
    | 'role'
    | 'token'
    | 'tokenExp'
    | 'sourceId'
    | 'postList'
    | 'courseList'
    | 'scrabList'
    | 'likeList'
    | 'rateList'
    | 'historyList'
  > {}

export interface UserInterface
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}

// Passport에 필요한 Request의 속성을 직접 정의.
declare global {
  namespace Express {
    interface Request {
      // express-passport의 user 정보 update
      user: UserAttributes;
      // express-passport의 login, logout을 직접 추가
      login(user: UserAttributes, done: (err: any) => void): void;
      logout(): void;
      // express-session의 Data를 직접 추가
      session: session.Session & Partial<session.SessionData>;
      sessionID: string;
    }
  }
}

declare global {
  namespace Express {
    interface Session {
      // express-session의 user 정보 update
      _user?: UserAttributes;
    }
  }
}
