import request from "supertest";
import app from "../app";
import Restaurant from "../models/Restaurant"; 

const sampleRestaurants = [
  { name: "Restaurante 1", products: [], orders: [] },
  { name: "Restaurante 2", products: [], orders: [] },
  { name: "Restaurante 3", products: [], orders: [] },
  { name: "Restaurante 4", products: [], orders: [] },
  { name: "Restaurante 5", products: [], orders: [] },
  { name: "Restaurante 6", products: [], orders: [] },
  { name: "Restaurante 7", products: [], orders: [] },
  { name: "Restaurante 8", products: [], orders: [] },
  { name: "Restaurante 9", products: [], orders: [] },
  { name: "Restaurante 10", products: [], orders: [] },
  { name: "Restaurante 11", products: [], orders: [] },
];

describe("GET /api/restaurants/names", () => {

  it("should return an empty array when no restaurants exist", async () => {
    const response = await request(app).get("/api/restaurants/names");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]); 
  });

  it("should return the first 10 restaurants when no page or limit is provided", async () => {
    await Restaurant.insertMany(sampleRestaurants); 
    const response = await request(app).get("/api/restaurants/names");
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(10);
    expect(response.body[0]).toHaveProperty("name", "Restaurante 1");
    expect(response.body[9]).toHaveProperty("name", "Restaurante 10");
  });

  it("should return the first 5 restaurants when limit=5 and page=1", async () => {
    await Restaurant.insertMany(sampleRestaurants); 
    const response = await request(app).get("/api/restaurants/names?page=1&limit=5");
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(5);
    expect(response.body[0]).toHaveProperty("name", "Restaurante 1");
    expect(response.body[4]).toHaveProperty("name", "Restaurante 5");
  });

  it("should return restaurants 6 to 10 when limit=5 and page=2", async () => {
    await Restaurant.insertMany(sampleRestaurants); 
    const response = await request(app).get("/api/restaurants/names?page=2&limit=5");
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(5);
    expect(response.body[0]).toHaveProperty("name", "Restaurante 6");
    expect(response.body[4]).toHaveProperty("name", "Restaurante 10");
  });

  it("should return an error for invalid limit", async () => {
    await Restaurant.insertMany(sampleRestaurants); 
    const response = await request(app).get("/api/restaurants/names?limit=-1");
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty("message", "An error occurred");
  });
});
