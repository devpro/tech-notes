# MongoDB Storage Engines

The storage engine that is used can be seen with the command `db.serverStatus()`.
It is a `mongod` option: `--storageEngine`.

## MMAPv1

In March 2015, there were two choices: MMAPv1 (original) and WiredTiger (new).

Comparison made by Percona in Jan 2019: [MMAPV1 Vs WiredTiger by Percona](https://www.percona.com/blog/mongodb-engines-mmapv1-vs-wiredtiger/)

## WiredTiger

Following the acquisition of the company by MongoDB, WireTiger was introduced in in MongoDB 3.0.
It is the first pluggable storage engine.

Features:

- Document level locking
- Compression:
  - Snappy (default) - fast
  - Zlib - more compression
  - None
- Lacks some pitfalls of MMAPv1
- Performance gains

Background:

- Built separately from MongoDB
- Used by other's DB
- Open source

Internals:

- Stores data in btrees
- Writes are initially separate, incorporated later
- Two caches:
  - WT caches - 1/2 of RAM (default)
  - FS cache
- Checkpoint: every minute or more
- No need for a journal
