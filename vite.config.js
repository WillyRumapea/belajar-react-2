import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      wishlist_app: "wishlist_app.html",
      shopping_cart: "shopping_cart.html",
      voting_app: "voting_app.html",
      product: "product.html",
      online: "online.html",
    },
  },
});
