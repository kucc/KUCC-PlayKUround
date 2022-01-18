import { Dialect, Options } from "sequelize/types";

export interface detailConfigType {
  username : string,
  // password에 대한 type 수정
  password : string | undefined,
  database : string,
  host : string,
  dialect : Dialect,
  logging? : boolean
}

export interface configType{
  development : detailConfigType,
  test : detailConfigType,
  production : detailConfigType, 
  [key: string]: detailConfigType
}