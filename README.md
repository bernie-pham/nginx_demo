Direct Docker commands:

```bash
# Build the image
docker build -t red-headers-website .

# Run the container
docker run -p 8080:80 red-headers-website
```
Docker Compose:

Create a `docker-compose.yml` file:

```yaml
version: '3'

services:
  red-headers-website:
    build: .
    ports:
      - "8080:80"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/health"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 10s
```
Then run:

```bash
docker-compose up -d
```