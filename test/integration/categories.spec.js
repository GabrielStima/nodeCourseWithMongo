const request = require("supertest");
const app = require("../../src/app");

let id;

describe("Categories", () => {
  it("should be able to create a new Category", async () => {
    const response = await request(app)
      .post("/categorias")
      .set("x-access-token", "")
      .send({
        name: "Gabriel",
        slug: "Stimamiglio",
      });
    id = response.body.id;
    expect(response.status).toBe(200);
    expect(Number.isInteger(response.body.id)).toBeTruthy();
  });
  it('must be able to return status 400, attribute "conteudo" without content', async () => {
    const response = await request(app).post("/cad").send({
      titulo: "Gabriel",
      conteudo: "",
    });
    expect(response.status).toBe(400);
  });
  it('must be able to return 400 status, "conteudo" attribute does not exist', async () => {
    const response = await request(app).post("/cad").send({
      titulo: "Gabriel",
    });
    expect(response.status).toBe(400);
  });
  it("should return a array", async () => {
    const response = await request(app).get("/list");
    expect(Array.isArray(response.body)).toBeTruthy();
  });
  it("must be able to return 200 status", async () => {
    const response = await request(app).delete(`/delete/${id}`);
    expect(response.status).toBe(200);
  });
});
