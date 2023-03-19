import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";
import path from "path";

const entitiesPath: string = path.join(__dirname, "./entities/**/*.{ts,js}");
const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "migration" || process.env.NODE_ENV === "dev"
    ? {
        type: "postgres",
        host: "localhost",
        port: 5050,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: [entitiesPath],
        migrations: [migrationPath],
      }
    : {
        type: "postgres",
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: [entitiesPath],
        migrations: [migrationPath],
      }
);

export default AppDataSource;

// import "dotenv/config";
// import path from "path";
// import "reflect-metadata";
// import { DataSource, DataSourceOptions } from "typeorm";

// const dataSourceConfig = (): DataSourceOptions => {
//   const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
//   const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");

//   const dbUrl: string | undefined = process.env.POSTGRES_URL;

//   if (!dbUrl) throw new Error("Missing env var: 'POSTGRES_URL'");

//   const nodeEnv: string | undefined = process.env.NODE_ENV;

//   if (nodeEnv === "test") {
//     return {
//       type: "sqlite",
//       database: ":memory:",
//       synchronize: true,
//       entities: [entitiesPath],
//     };
//   }

//   return {
//     type: "postgres",
//     url: dbUrl,
//     synchronize: false,
//     logging: true,
//     entities: [entitiesPath],
//     migrations: [migrationPath],
//   };
// };

// export const AppDataSource = new DataSource(dataSourceConfig());
