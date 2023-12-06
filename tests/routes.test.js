const request = require("supertest");
const app = require('../app');
const { Pool } = require('pg');


// test routes
// GET game image details
describe("Test Routes", () => {

  let pgPool;

  beforeAll(() => {
    pgPool = new Pool({
      connectionString: process.env.TEST_DATABASE_URL
    });
  });

  afterAll(async () => {
    await pgPool.end();
  });

  // simulate DB connection*

  // start game
  test("start game", async () => {
    const response = await request(app).post("/gamestart");
    expect(response.status).toBe(200);
    
  });

  // end game
  test("end game", async () => {
    const response = await request(app).post("/gameend");
    expect(response.status).toBe(200);
    
  });

  // get image details
  test("GET image details", async () => {
    const response = await request(app).post("/gameimage");
    expect(response.status).toBe(200);
    
  });

  // get leaderboard
  test("GET leaderboard for an image", async () => {
    const response = await request(app).post("/getleaderboard");

    expect(response.status).toBe(200);
  });

  
  // update leaderboard
  test("POST to leaderboard", async () => {
    const response = await request(app).post("/leaderboard");

    expect(response.status).toBe(200);
  });

});




