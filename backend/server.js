//server.js
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51POvxESAr5iSahqBSInjKQ8KatNb7bhwwvemVvx53ZjlKHw9KU1xUaXJrXkIiEniQwGl4eM7thvgUfabMGikL8Hz00z5JLSTlQ"
); // your secret key

const app = express();wher
app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { items } = req.body;

  const line_items = items.map((item) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: item.title,
        images: [item.image],
      },
      unit_amount: item.price * 100, // convert rupees to paise
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ id: session.id });
});

app.get("/", (req, res) => {
  res.send("Stripe backend is running.");
});

app.listen(5000, () =>
  console.log("Stripe backend running at http://localhost:5000")
);
