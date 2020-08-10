require('dotenv/config');

const extension = process.env.NODE_ENV === 'development' ? '.ts' : '.js';
const folder = process.env.NODE_ENV === 'development' ? 'src' : 'dist';

module.exports = {
  name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_NAME,
  entities: [`./${folder}/entities/*${extension}`],
  migrations: [`./${folder}/database/migrations/*${extension}`],
  cli: {
    migrationsDir: `./${folder}/database/migrations`,
  },
};
