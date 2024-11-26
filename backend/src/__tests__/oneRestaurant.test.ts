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

describe("GET /api/restaurants/:restaurantId/name", () => {
  
  it("should return an error when the restaurant does not exist", async () => {
    const response = await request(app).get("/api/restaurants/invalidId/name");
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty("message", "Error retrieving restaurant");
  });

  it("should return the name of the restaurant by restaurantId", async () => {
    const createdRestaurant = await Restaurant.create(sampleRestaurants[5]);
    
    const response = await request(app).get(`/api/restaurants/${createdRestaurant._id}/name`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ name: "Restaurante 6" });
  });
  
  it("should return an error when the restaurantId does not exist in the database", async () => {
    const nonExistentId = "60f5d40f8e2b3b3d3479f16d"; // assuming this id does not exist
    const response = await request(app).get(`/api/restaurants/${nonExistentId}/name`);
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty("message", "Error retrieving restaurant");
  });
});
