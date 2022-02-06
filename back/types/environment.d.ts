// 환경 변수에 대한 type

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SEQUELIZE_PASSWORD: string;
      MYSQL_USER: string;
      MYSQL_ROOT_PASSWORD: string;
      MYSQL_DATABASE: string;
      MYSQL_HOST: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
