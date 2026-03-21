# MongoDB Command-Line Utilities

[mongodb.com/docs/database-tools](https://www.mongodb.com/docs/database-tools/)

## Getting started

- [Installation](https://www.mongodb.com/docs/database-tools/installation/)
- [Authentication](https://www.mongodb.com/docs/database-tools/authentication/)

## Binary import and export

### mongodump

`mongodump` creates a binary export of the contents of a mongod database.

### mongorestore

`mongorestore` restores data from a mongodump database dump into a mongod or mongos.

```bash
mongorestore -d mydbname dump
```

### bsondump

`bsondump` converts BSON dump files into JSON.

## Data import and export

### mongoimport

`mongoimport` imports content from an Extended JSON, CSV, or TSV export file.

Examples:

```bash
mongoimport --uri "mongodb+srv://user:password@mycluster.mongodb.net/demoZip" --collection zips --file zips.json
```

### mongoexport

`mongoexport` produces a JSON or CSV export of data stored in a mongod instance.

## Diagnostic

### mongostat

`mongostat` provides a quick overview of the status of a currently running mongod or mongos instance.

```bash
mongostat
```

### mongotop

`mongotop` provides an overview of the time a mongod instance spends reading and writing data.

```bash
mongotop
```

## GridFS

### mongofiles

`mongofiles` supports manipulating files stored in your MongoDB instance in GridFS objects.

[mongodb.com/docs/database-tools/mongofiles](https://www.mongodb.com/docs/database-tools/mongofiles/)
