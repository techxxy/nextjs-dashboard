import { Pool } from 'pg';

const getDatabasePool = () => {
  const port = process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT, 10) : undefined;

  const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: port,
    ssl: false,
  });

  return pool;
};

export default getDatabasePool;