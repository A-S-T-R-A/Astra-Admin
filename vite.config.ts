import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify("https://developed-by.me:3000/api/v1"),
        __PROJECT__: JSON.stringify("frontend"),
    },
})
