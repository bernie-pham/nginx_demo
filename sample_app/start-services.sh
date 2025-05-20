#!/bin/sh
set -e

# Start Node.js service
echo "Starting headers service..."
node /app/headers-service.js &

# Start Nginx
echo "Starting nginx..."
exec nginx -g "daemon off;"