# MongoDB Replication

[Documentation](https://www.mongodb.com/docs/manual/replication/)

## Replica sets

A _replica set_ in MongoDB is a group of `mongod` processes that maintain the same data set.
Replica sets provide redundancy and **high availability**.

A replica set contains several data bearing nodes (one Primary and multiple Secondary) and optionally one Arbiter node.

## Data synchronization model

Replicas pull updates from other replicas instead of receiving them pushed from a primary server.
This approach enhances control over data transmission and allows for more flexible network configurations, improving performance and fault tolerance.

Studies:

- [Fault-Tolerant Replication with Pull-Based Consensus in MongoDB](https://www.usenix.org/conference/nsdi21/presentation/zhou) ([video](https://www.youtube.com/watch?v=04ZI8HpFnCA)) - May 2021
- [MongoDB 4.2.6 analysis by Jepsen](https://jepsen.io/analyses/mongodb-4.2.6) - May 2020
- [PGDay Russia 2017 - MongoDB and Raft](https://henrikingo.github.io/presentations/PGDay%20Russia%202017%20-%20MongoDB%20and%20Raft/index.html#/title) - Jul 2017
- [Raft - The Understandable Distributed Protocol](https://www.infoq.com/presentations/raft/) - Dec 2013

## Read and write semantics

[mongodb.com/docs/manual/applications/replication](https://www.mongodb.com/docs/manual/applications/replication/)

### Write concern

[mongodb.com/docs/manual/core/replica-set-write-concern](https://www.mongodb.com/docs/manual/core/replica-set-write-concern/),
[mongodb.com/docs/manual/reference/write-concern](https://www.mongodb.com/docs/manual/reference/write-concern/)

### Read concern

[mongodb.com/docs/manual/reference/read-concern](https://www.mongodb.com/docs/manual/reference/read-concern/)

### Read preference

[mongodb.com/docs/manual/core/read-preference](https://www.mongodb.com/docs/manual/core/read-preference/)

### Causal consistency

[Documentation](https://www.mongodb.com/docs/manual/core/read-isolation-consistency-recency/#causal-consistency)
