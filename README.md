# bmnh-specimen-label-tool

> A web application for generating and updating specimen collection labels

## Prerequisites

* Docker <https://docs.docker.com/install/>
* Docker Compose <https://docs.docker.com/compose/install/>

## Setup

``` bash
# start containers
docker-compose up -d
```

## Updating
```bash
# 1. this pulls the latest code from git
make update
# 2. this brings down any running docker containers tied to the project
make down
# 3. this rebuilds the docker images and brings back up docker containers tied to the project
make rebuild
```