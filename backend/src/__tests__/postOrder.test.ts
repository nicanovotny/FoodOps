import request from "supertest";
import app from "../app";
import Restaurant from "../models/Restaurant";

const sampleRestaurant = {
  name: "Restaurante 7",
  products: [
    { name: "Pizza", price: 16 },
    { name: "Hamburguesa", price: 14 },
    { name: "Pasta", price: 18 },
  ],
  orders: [],
};

describe("POST /api/restaurants/:restaurantId", () => {

  it("should create an order successfully", async () => {
    const createdRestaurant = await Restaurant.create(sampleRestaurant);
    const orderData = {
      products: [
        { name: "Pizza", price: 16, quantity: 2 },
        { name: "Hamburguesa", price: 14, quantity: 1 },
      ],
    };

    const response = await request(app)
      .post(`/api/restaurants/${createdRestaurant._id}`)
      .send(orderData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("message", "Order created successfully");

    const updatedRestaurant = await Restaurant.findById(createdRestaurant._id);
    expect(updatedRestaurant?.orders).toHaveLength(1);
    expect(updatedRestaurant?.orders[0].total).toBe(46); // (16*2) + (14*1)
  });

  it("should return an error when the restaurant does not exist", async () => {
    const nonExistentId = "60f5d40f8e2b3b3d3479f16d"; // assuming this id does not exist
    const orderData = {
      products: [
        { name: "Pizza", price: 16, quantity: 2 },
        { name: "Hamburguesa", price: 14, quantity: 1 },
      ],
    };

    const response = await request(app)
      .post(`/api/restaurants/${nonExistentId}`)
      .send(orderData);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message", "Restaurant not found.");
  });

  it("should return an error when products array is empty", async () => {
    const createdRestaurant = await Restaurant.create(sampleRestaurant);
    const orderData = { products: [] };

    const response = await request(app)
      .post(`/api/restaurants/${createdRestaurant._id}`)
      .send(orderData);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "Products are required");
  });

});
