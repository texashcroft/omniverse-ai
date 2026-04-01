# Omniverse AI

## Activepieces Integration Troubleshooting

If you're having issues with the Activepieces canvas not showing up, please follow these steps:

1. Ensure Docker is running and the Activepieces container is up:
   \`\`\`bash
   docker ps
   \`\`\`
   You should see a container with the image \`activepieces/activepieces:latest\`

2. Check if you can access the Activepieces UI directly in your browser:
   Open \`http://localhost:8080\` in your browser. If you can't access it, there might be an issue with your Docker setup or port forwarding.

3. Verify your environment variables:
   - Make sure you have a \`.env.local\` file in your project root with the following content:
     \`\`\`
     NEXT_PUBLIC_ACTIVEPIECES_URL=http://localhost:8080
     \`\`\`
   - If you're using a different URL or port, adjust accordingly.

4. Clear your browser cache and restart your Next.js development server:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Check the browser console for any error messages when trying to open the Activepieces canvas.

6. If you're still having issues, try running Activepieces on a different port and update your \`.env.local\` file accordingly:
   \`\`\`bash
   docker run -d \
     -v activepieces_data:/app/data \
     -p 8081:80 \
     -e AP_API_KEY=your-api-key \
     activepieces/activepieces:latest
   \`\`\`
   Then update your \`.env.local\`:
   \`\`\`
   NEXT_PUBLIC_ACTIVEPIECES_URL=http://localhost:8081
   \`\`\`

If you're still experiencing issues after following these steps, please check the Activepieces documentation or reach out to their support for further assistance.

