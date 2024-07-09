import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // If using `react-bootstrap-icons` as an alias for easier import
      "react-bootstrap-icons": "react-bootstrap-icons/dist/icons",
    },
  },
});
