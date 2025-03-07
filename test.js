const { Pool } = require('pg');
const express = require('express');

const app = express();
app.use(express.json());

const port = 5000;

const pool = new Pool({
  host: '202.151.177.35',
  user: 'postgres',
  database: 'postgres',
  password: 'arka',
  port: 5432, // ใส่ port ของ PostgreSQL ปกติคือ 5432
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL successfully"))
  .catch(err => console.error("Connection error:", err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
