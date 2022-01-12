import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
export default () => {
  return {
    database: {
      type: 'mysql',
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      logging: true,
      sync: false,
      extra: {
        ssl_mode: 'REQUIRE',
        'ssl-mode': 'REQUIRE',
        sslmode: 'REQUIRE',
      },
      entities: ['dist/**/*.entity{.ts,.js}'],
      port: parseInt(process.env.DB_PORT),
      autoLoadEntities: true,
      keepConnectionAlive: true,
      namingStrategy: new SnakeNamingStrategy(),
    },
  };
};
