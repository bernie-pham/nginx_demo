FROM nginx:alpine

# Install Node.js and supervisor
RUN apk add --no-cache nodejs npm supervisor

# Create directory structure
RUN mkdir -p /app

# Copy files
COPY headers-service.js /app/
COPY index.html /usr/share/nginx/html/index.html
COPY nginx.conf /etc/nginx/nginx.conf
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY start-services.sh /app/

# Make the start script executable
RUN chmod +x /app/start-services.sh

# Install Node.js dependencies
RUN cd /app && npm init -y && npm install

EXPOSE 80

# Use supervisord to manage both Nginx and Node processes
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]