#!/usr/bin/env bash

echo "Building services using docker-compose"

docker-compose build

echo "Start the application and run all automated scripts"

docker-compose up
