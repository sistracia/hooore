#!/bin/bash

docker compose -f docker-compose.dev.yml up -d

while [ ! "`docker inspect -f {{.State.Health.Status}} hooore_postgres`" = "healthy" ];
do
    echo waiting
    sleep 1;
done

PGPASSWORD=supersecurepassword psql -U postgres -h localhost -p 5432 -d postgres < seed.sql