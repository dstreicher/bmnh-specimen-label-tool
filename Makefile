# up => starts the docker container services
up:
	sudo docker-compose up -d
.PHONY: up

# rebuild => rebuilds the images and starts the docker container services
rebuild:
	sudo docker-compose up -d --build
.PHONY: rebuild

# down => stops the docker container services
down:
	sudo docker-compose down
.PHONY: down
