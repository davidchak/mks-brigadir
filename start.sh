#!/bin/sh

set -e
# Build client static
cd ./client && npm run build &&
set +e


set -e
# Build and start containers 
cd ../ && docker-compose up -d --build 
set +e
