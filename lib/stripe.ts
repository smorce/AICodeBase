import Stripe from "stripe";

// リントエラーが出ているけど、最新版を指定しておく
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
  appInfo: {
    name: "Todo App",
    version: "0.1.0"
  }
});