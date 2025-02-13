/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_HYk6Pxe4ZCBT@ep-morning-unit-a8p0dwan-pooler.eastus2.azure.neon.tech/neondb?sslmode=require'
  }
};

