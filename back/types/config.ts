import { Dialect, Options } from "sequelize/types";

export interface detailConfigType {
  username : string,
  // password에 대한 type 수정
  password : string | undefined,
  database : string,
  host : string,
  // dialect는 Dialect 형.
  dialect : Dialect,
  logging? : boolean
}

export interface configType{
  development : detailConfigType,
  test : detailConfigType,
  production : detailConfigType,
  // config[env] 등 변수명으로 할당해야 하므로, string-key를 사용
  [key: string]: detailConfigType
}