import request from "supertest";
import app from "../app";
import Restaurant from "../models/Restaurant";

const sampleRestaurantWithOrder = {
  name: "Restaurante 8",
  products: [
    { name: "Pizza", price: 16 },
    { name: "Hamburguesa", price: 14 },
  ],
  orders: [
    {
      products: [
        { name: "Pizza", price: 16, quantity: 1 },
      ],
      total: 16,
    },
  ],
};

const sampleRestaurantWithoutOrder = {
  name: "Restaurante sin órdenes",
  products: [
    { name: "Sopa", price: 12 },
  ],
  orders: [],
};

describe("DELETE /api/restaurants/:restaurantId/orders/:orderId", () => {
  it("should delete an order successfully", async () => {
    const createdRestaurant = await Restaurant.create(sampleRestaurantWithOrder);

    const orderId = createdRestaurant.orders[0]._id;

    const response = await request(app)
      .delete(`/api/restaurants/${createdRestaurant._id}/orders/${orderId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message", "Order deleted successfully");

    const updatedRestaurant = await Restaurant.findById(createdRestaurant._id);
    expect(updatedRestaurant?.orders).toHaveLength(0);
  });

  it("should return an error if the restaurant does not exist", async () => {
    const nonExistentRestaurantId = "60f5d40f8e2b3b3d3479f16d";
    const orderId = "60f5d40f8e2b3b3d3479f16d";

    const response = await request(app)
      .delete(`/api/restaurants/${nonExistentRestaurantId}/orders/${orderId}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message", "Restaurant not found.");
  });

  it("should return an error if the order does not exist", async () => {
    const createdRestaurant = await Restaurant.create(sampleRestaurantWithoutOrder);

    const nonExistentOrderId = "60f5d40f8e2b3b3d3479f16d";

    const response = await request(app)
      .delete(`/api/restaurants/${createdRestaurant._id}/orders/${nonExistentOrderId}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message", "Order not found.");
  });
});
