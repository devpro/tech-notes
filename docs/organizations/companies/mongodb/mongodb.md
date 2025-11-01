# MongoDB

> MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.

[mongodb.com](https://www.mongodb.com/), [Github](https://github.com/mongodb), [docs](https://www.mongodb.com/docs/)

## Learn

### Official resources

* [Resources](https://www.mongodb.com/resources): presentations, webinars, white papers
* [MongoDB University](https://learn.mongodb.com/)
* [Engineering Blog](https://www.mongodb.com/company/blog/channel/engineering-blog)
* [SlideShare](https://www.slideshare.net/MongoDB)

### Key features

* Flexible schema
* Performance
* High Availability
  * Primary / Secondaries architecture
* BSON storage (Binary JSON)
  * [GeoJSON Objects](https://docs.mongodb.com/manual/reference/geojson/) support of [GeoJson format](http://geojson.org/) for encoding a variety of geographic data structures
* ACID transactions
  * [The cost of MongoDB ACID transactions in theory and practice](http://henrikingo.github.io/presentations/Highload%202018%20-%20The%20cost%20of%20MongoDB%20ACID%20transactions%20in%20theory%20and%20practice/index.html#/markdown)
* Sharding
  * [Database Sharding: Concepts and Examples](https://www.mongodb.com/features/database-sharding-explained)

#### Replication

[Manual](https://docs.mongodb.com/manual/replication/)

A _replica set_ is a group of `mongod` processes that maintain the same data set. Replica sets provide redundancy and high availability.

A node of the replica set can be: Primary, Secondary, Arbitrer.

##### Read preference

[Manual](https://docs.mongodb.com/manual/core/read-preference/)

##### Write concern

[Manual](https://docs.mongodb.com/manual/reference/write-concern/)

##### Read concern

[Manual](https://docs.mongodb.com/manual/reference/read-concern/)

#### Indexing

[Manual](https://docs.mongodb.com/manual/indexes/) [Query Plans](https://docs.mongodb.com/manual/core/query-plans/) [Limits](https://docs.mongodb.com/manual/reference/limits/#indexes) [Analyze Query Performance](https://docs.mongodb.com/manual/tutorial/analyze-query-plan/)

MongoDB indexes use a [B-tree](https://en.wikipedia.org/wiki/B-tree) data structure.

Indexes gets have better read time but have an impact on write time.

Index Types:

* Single Field
* Compound Index
* Multikey Index
* Geospatial Index
* Text Indexes
* Hashed Indexes

Index Properties:

* Unique Indexes
* Partial Indexes
* Sparse Indexes
* TTL Indexes (Time To Live)

See also [Performance Best Practices: Indexing](https://www.mongodb.com/blog/post/performance-best-practices-indexing) - February 12, 2020

#### Performance

[Manual](https://docs.mongodb.com/manual/administration/analyzing-mongodb-performance/)

#### Storage engine

The storage engine that is used can be seen with the command `db.serverStatus()`. It is a `mongod` option: `--storageEngine`.

In March 2015, there were two choices: MMAPv1 (original) and WiredTiger (new).

**Wired Tiger** is new in MongoDB 3.0. It is the first pluggable storage engine.

Features:

* Document level locking
* Compression
  * Snappy (default) - fast
  * Zlib - more compression
  * None
* Lacks some pitfalls of MMAPv1
* Performance gains

Background:

* Built separately from MongoDB
* Used by other's DB
* Open source

Internals:

* Stores data in btrees
* Writes are initially separate, incorporated later
* Two caches
  * WT caches - 1/2 of RAM (default)
  * FS cache
* Checkpoint: every minute or more
* No need for a journal

#### Transactions

* [Presentation](https://www.mongodb.com/transactions)
* [Documentation](https://docs.mongodb.com/manual/core/transactions/)

#### High availability

* [MongoDB and Jepsen](https://www.mongodb.com/jepsen)
  * [jepsen.io](http://jepsen.io/)
  * [jepsen-io/jepsen](https://github.com/jepsen-io/jepsen)
  * [wikipedia Raft](https://en.wikipedia.org/wiki/Raft_(computer_science))
  * [Raft - The Understandable Distributed Protocol](https://www.infoq.com/presentations/raft/)

* [The Six Principles For Resilient Evolvability](https://speakerdeck.com/pdone/the-six-principles-for-resilient-evolvability) - November, 2020

#### Data types

[Quick Start: BSON Data Types - ObjectId](https://www.mongodb.com/blog/post/quick-start-bson-data-types--objectid)

### Products

* [Atlas](atlas.md)
* [Compass](compass.md)
* [Ops Manager](opsmanager.md)

### Getting further

* [Events](events.md)
* [News](news.md)
* [Partners](partners.md)

### Recipes

* Store large data: [GridFS](https://docs.mongodb.com/manual/core/gridfs/)
  * [mongofiles](https://docs.mongodb.com/manual/reference/program/mongofiles)
  * [Building MongoDB Applications with Binary Files Using GridFS](https://www.mongodb.com/blog/post/building-mongodb-applications-binary-files-using-gridfs-part-1)

## Releases

Version                | Date
-----------------------|------------
[`4.2`](mongodb-42.md) | August 2019
[`4.4`](mongodb-44.md) | June 2020
[`5.0`](mongodb-50.md) | July 2021

## First steps

### MongoDB Shell

Go to the [download center](https://www.mongodb.com/download-center), select "Server", then "MongoDB Community Server" edition, chose the target platform and version and let the download complete.

#### MongoDB Shell on Windows

* You'll download a file like `mongodb-win32-x86_64-2008plus-ssl-4.0.4.zip`
* Unzip the content of the archive in a program folder (for example `D:\Programs` folder)
* Rename the folder with something explicit like `mongodb-community-4.0.4`
* You can either update your PATH globally on your machine or do it when you need it (or through a bat file)

  ```batch
  SET PATH=%PATH%;D:\Programs\mongodb-community-4.0.4\bin
  ```

#### First commands

* The following command must return a valid output

  ```batch
  mongo --version
  ```

  > MongoDB shell version v4.0.4  
  > git version: f288a3bdf201007f3693c58e140056adf8b04839  
  > allocator: tcmalloc  
  > modules: none  
  > build environment:  
  > distmod: 2008plus-ssl  
  > distarch: x86_64  
  > target_arch: x86_64  

### Local Server

* If you followed the steps to have the Mongo Shell, you'll be able to launch easily a MongoDB server locally (`mongod`).

  ```bash
  # make sure the data path exists
  md /path/to/data
  # start a basic MongoDB instance (default port 27017)
  mongod --dbpath=/path/to/data
  ```

* You can then connect with the MongoDB Shell:

  ```bash
  mongo
  ```

### Docker

* Check the images already downloaded locally

  ```bash
  docker images
  ```

* Get the image for a specific version of MongoDB

  ```bash
  docker image pull mongo:4.0.4
  ```

* Start the container

  ```bash
  docker run -d -p 27017:27017 --name mongodb404 mongo:4.0.4
  ```

## Server

### Start with Docker

```bash
docker run --name mongodb -d -p 27017:27017 mongo:4.4.6
```

### Start from the command line

```bash
mongod --dbpath "C:\my\path" --port 27017
```

## Client

### Command line

```bash
# start a mongo shell and be on mycollection
mongo --port 27017 mycollection

# restore from dump folder into mydbname database
mongorestore -d mydbname dump

# monitor basic usage statistics for each collection
mongotop

# monitor basic MongoDB server statistics
mongostat
```

→ [docs.mongodb.com/program/mongo](https://docs.mongodb.com/manual/reference/program/mongo)

### MongoDB Shell (mongosh)

Introduced in June 2020, avalable as a standalone package, it provides a fully functional JavaScript/Node.js environment for interacting with MongoDB deployments. It can be used to test queries and operations directly with one database.

→ [Documentation](https://docs.mongodb.com/mongodb-shell/), [Download](https://www.mongodb.com/try/download/shell), [GitHub](https://github.com/mongodb-js/mongosh), [Introduction](https://www.mongodb.com/blog/post/introducing-the-new-shell)

```bash
mongosh <connection_string>
```

### Sample data

#### Zip code

* Download the zip file export from [docs.mongodb.com/manual/tutorial/aggregation-zip-code-data-set](https://docs.mongodb.com/manual/tutorial/aggregation-zip-code-data-set/).

* Import the data into your MongoDB server

  ```bash
  # to be run in the folder containing the json file
  mongoimport --db demoZip --collection zips --file zips.json
  # it should generate the following output
  # 2018-11-19T14:48:53.296+0100    connected to: localhost
  # 2018-11-19T14:48:53.705+0100    imported 29353 documents
  ```

* You can also import the data to your Atlas cluster

  ```bash
  mongoimport --uri "mongodb+srv://user:password@mycluster.mongodb.net/demoZip" --collection zips --file zips.json
  ```

#### dbKoda samples

* dbKoda holds a collection of sample data: [github.com/SouthbankSoftware/dbkoda-data](https://github.com/SouthbankSoftware/dbkoda-data).
