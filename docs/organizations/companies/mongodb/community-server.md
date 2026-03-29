# MongoDB Community Server

## Binary

Open [Try MongoDB Community Edition](https://www.mongodb.com/try/download/community), select the "Platform", then click "Download" or "Copy link".

Extract and install (add the binary folder to the PATH on Windows for example).

Create the data path:

```bash
md /path/to/data
```

Start the server:

```bash
mongod --dbpath=/path/to/data --port 27017
```

## Container

Start a new container from the [DockerHub image](https://hub.docker.com/_/mongo/):

```bash
docker run -d -p 27017:27017 --name mongodb8_2 mongo:8.2
```
