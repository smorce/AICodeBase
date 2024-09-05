import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
  appInfo: {
    name: "Todo App",
    version: "0.1.0"
  }
});
// WARNING: この行は古いコードなので削除が必要