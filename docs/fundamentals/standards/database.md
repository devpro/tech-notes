# Databases

## Properties

### ACID

Property        | Requirement
----------------|------------
**A**tomicity   | The writes in a transaction are executed all at once and cannot be broken into smaller parts. If there are faults when executing the transaction, the writes in the transaction are rolled back. So atomicity means “all or nothing”.
**C**onsistency | Unlike “consistency” in CAP theorem, which means every read receives the most recent write or an error, here consistency means preserving database invariants. Any data written by a transaction must be valid according to all defined rules and maintain the database in a good state.
**I**solation   | When there are concurrent writes from two different transactions, the two transactions are isolated from each other.
**D**urability  | Data is persisted after a transaction is committed even in a system failure. In a distributed system, this means the data is replicated to some other nodes.

### CAP theorem

Characteristic          | Requirement
------------------------|------------
**C**onsistency         | Every read receives the most recent write or an error.
**A**vailability        | Every request received by a non-failing node in the system must result in a response.
**P**artition tolerance | The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.
