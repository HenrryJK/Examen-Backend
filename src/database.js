
import { Pool } from 'pg'

export const pool = new Pool(
{
host:'ec2-52-202-152-4.compute-1.amazonaws.com',
user:'ihklmbkvlphkbf',
password:'615c58614def4eeb8b6701d35d975d4915f4df2de72394e750830f78abef70df',
database:'dc620j5lj6lq1',
port:5432,
ssl: { rejectUnauthorized: false}

}
);