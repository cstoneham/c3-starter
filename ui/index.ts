import { serve } from "bun";
import { readFileSync } from "fs";
import { join } from "path";

// Simple UI server
const server = serve({
  port: 3001,
  fetch(req) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Rainmaker UI</title>
          <style>
            body {
              font-family: system-ui, sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem;
            }
            .health-status {
              padding: 1rem;
              margin: 1rem 0;
              border-radius: 0.5rem;
            }
            .success { background-color: #d4edda; color: #155724; }
            .error { background-color: #f8d7da; color: #721c24; }
          </style>
        </head>
        <body>
          <h1>Rainmaker UI</h1>
          <p>This is a simple UI for the Rainmaker monorepo.</p>
          
          <div>
            <h2>API Status</h2>
            <div id="health-status" class="health-status">Checking API status...</div>
          </div>
          
          <script>
            async function checkApiHealth() {
              const statusEl = document.getElementById('health-status');
              try {
                const response = await fetch('http://localhost:3000/api/health');
                if (response.ok) {
                  const data = await response.json();
                  statusEl.textContent = 'API Status: ' + data.status;
                  statusEl.className = 'health-status success';
                } else {
                  statusEl.textContent = 'API Error: ' + response.statusText;
                  statusEl.className = 'health-status error';
                }
              } catch (err) {
                statusEl.textContent = 'API Connection Error: ' + err.message;
                statusEl.className = 'health-status error';
              }
            }
            
            // Check health on page load
            checkApiHealth();
          </script>
        </body>
      </html>
    `;

    return new Response(html, {
      headers: { "Content-Type": "text/html" }
    });
  }
});

console.log(`UI server listening on http://localhost:${server.port}`);