PROD_DOCKER_COMPOSE := "docker/prod.docker-compose.yml"

run:
	docker compose -f $(PROD_DOCKER_COMPOSE) up --build -d

up:
	docker compose -f $(PROD_DOCKER_COMPOSE) up -d

down:
	docker compose -f $(PROD_DOCKER_COMPOSE) down

logs:
	docker logs -f frontend

shell:
	docker exec -it frontend sh
