docker stop f3router
docker rm f3router
docker build -t f3router .
docker run -d --name f3router -p 20128:20128 --env-file .env -v f3router-data:/app/data f3router