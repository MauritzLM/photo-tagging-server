const request = require("supertest");
const app = require('../app');

// test routes
// GET game image details
describe("Test Routes", () => {

    // simulate DB connection*

    // GET image details
    test("GET image details", async () => {
      const response = await request(app).get("/gameimage");
      expect(response.status).toBe(200);
      expect(response["content-type"]).toBe("application/json");
    });

   // GET leaderboard*
   test("GET leaderboard", async () => {
    const response = await request(app).get("/leaderboard");

    expect(response.status).toBe(200);
   })
    
   // update leaderboard*
  
});

  


  