import request from "supertest";
import app from "../app";
import Restaurant from "../models/Restaurant";

const sampleRestaurant = {
  name: "Restaurante 6",
  products: [
    { name: "Pizza", price: 16 },
    { name: "Hamburguesa", price: 14 },
    { name: "Pasta", price: 18 },
    { name: "Ensalada", price: 12 },
    { name: "Tacos", price: 13 },
    { name: "Sushi", price: 21 },
    { name: "Curry", price: 20 },
    { name: "Pollo Asado", price: 19 },
    { name: "Burrito", price: 15 },
    { name: "Fajitas", price: 17 },
    { name: "Wrap", price: 14 },
    { name: "Quesadilla", price: 13 },
    { name: "Sopa", price: 12 },
    { name: "Enchiladas", price: 16 },
    { name: "Paella", price: 22 },
  ],
};

describe("GET /api/restaurants/:restaurantId/products", () => {

  it("should return an empty array when the restaurant has no products", async () => {
    const createdRestaurant = await Restaurant.create({ name: "Restaurante sin productos", products: [] });

    const response = await request(app).get(`/api/restaurants/${createdRestaurant._id}/products`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("should return the products of the restaurant", async () => {
    const createdRestaurant = await Restaurant.create(sampleRestaurant);

    const response = await request(app).get(`/api/restaurants/${createdRestaurant._id}/products`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(15);  
    expect(response.body[0]).toHaveProperty("name", "Pizza");
    expect(response.body[0]).toHaveProperty("price", 16);
  });

  it("should return an error when the restaurant does not exist", async () => {
    const nonExistentId = "60f5d40f8e2b3b3d3479f16d"; // assuming this id does not exist
    const response = await request(app).get(`/api/restaurants/${nonExistentId}/products`);
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message", "Restaurant not found.");
  });

  it("should return an error for invalid restaurantId", async () => {
    const response = await request(app).get("/api/restaurants/invalidId/products");
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "Invalid restaurant ID");
  });
});
