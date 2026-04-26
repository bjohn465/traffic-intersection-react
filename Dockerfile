# syntax=docker/dockerfile:1

# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

ARG NODE_VERSION=24.15.0
FROM node:${NODE_VERSION}-trixie-slim as base
WORKDIR /usr/src/app
EXPOSE 5173

FROM base as dev
USER node
COPY . .
CMD ["bash"]
