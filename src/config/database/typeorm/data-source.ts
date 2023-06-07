import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "dvdrental2",
    synchronize: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
    entities: ["src/modules/**/entities/*.entity.ts"],
});

export default dataSource;
