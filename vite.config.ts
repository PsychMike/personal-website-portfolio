import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// For TypeScript, you might also import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react()],
  // For TypeScript: plugins: [react(), tsconfigPaths()]
});
