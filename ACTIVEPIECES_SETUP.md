# Setting up Activepieces Integration

1. First, install Activepieces using Docker:
\`\`\`bash
docker run -d \
  -v activepieces_data:/app/data \
  -p 8080:80 \
  -e AP_API_KEY=your-api-key \
  activepieces/activepieces:latest
\`\`\`

2. Configure environment variables:
- Add \`ACTIVEPIECES_API_KEY\` to your environment variables
- Add \`ACTIVEPIECES_URL\` (default: http://localhost:8080) to your environment variables

3. The Activepieces canvas will be available at `/workflow` when clicking "Create Workflow" or "Edit Workflow"

Note: In production, make sure to:
- Deploy Activepieces on a secure server
- Use HTTPS for the Activepieces URL
- Set proper CORS headers
- Implement proper authentication

