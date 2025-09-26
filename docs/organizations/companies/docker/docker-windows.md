# Docker on Windows

On Linux:

```bash
DB_DIR="$(pwd)/db"
mkdir -p "${DB_DIR}"
docker run -ti -p 80:80 -p 443:443 -p 3306:3306 --mount "type=bind,src=</chemin/vers/vos/sources>,dst=/var/www/localhost/htdocs/" --mount "type=bind,src=${DB_DIR},target=/var/lib/mysql" registry.gitlab.com/comalia/ops/gesica_docker/formation_sf
```

On Windows:

```batch
docker run -ti -p 80:80 -p 443:443 -p 3306:3306 --mount "type=bind,src=/d/Projects/bthomas/training/symfony-sensiolabs/src,dst=/var/www/localhost/htdocs/" -v "mysql_sf_data:/var/lib/mysql" registry.gitlab.com/comalia/ops/gesica_docker/formation_sf
```

Get machine IP:

```batch
docker ps
docker inspect -f "{{ .NetworkSettings.IPAddress }}" bd2c9fb84f6c
```

Create a file index.php et open [http://localhost/](http://localhost/) to check it's displayed

Run a command:

```bash
docker exec -it symfony_training bash
```

Start the container:

```batch
docker start -i symfony_training
```
