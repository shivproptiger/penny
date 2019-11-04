## Lead Credits Service

### Docker setup for development
  - Install Docker [Instructions](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
  - Install Docker Compose [Instructions](https://docs.docker.com/compose/install/#install-compose)
  - Create `.env` file based on `.env.example`
  - Run the following command to start your dev server
  ```
  docker-compose up -d --build
  ```
  Here `-d` flag stands for daemon mode which moves the container processes to background, remove it to run on foreground and
  `--build` flag instructs docker-compose to build the images required, remove it to use the already built images
