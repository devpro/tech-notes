# MongoDB 4.2

## New features

### Key highlights

- **Distributed Transactions** extending MongoDB’s multi-document ACID guarantees from replica sets to sharded clusters, enabling you to serve an ever broader range of use cases.
  - [Video](https://www.youtube.com/watch?v=iuj4Hh5EQvo&list=PL4RCxklHWZ9vG8ikkcCS94nxo0Td-Mm2s&index=3&t=7s)
- **On-Demand Materialized Views** using the new $merge operator. Caching the output of a large aggregation in a collection is a common pattern, and the new $merge operator lets you update those results efficiently instead of completely recalculating them.
- **Wildcard Indexes** make it easy and natural to model highly heterogeneous collections like product catalogs, without sacrificing great index support. You simply define a filter that automatically indexes all matching fields, sub-documents, and arrays in a collection.
  - [Video](https://www.youtube.com/watch?v=mUWZPdHopYs&list=PL4RCxklHWZ9vG8ikkcCS94nxo0Td-Mm2s&index=3)
- **MongoDB Query Language enhancements** such as more expressive updates, new math operators, and expanded regex support. update and findAndModify commands can now reference existing fields, and incorporate aggregation pipelines for even more expressivity.
- **Retryable Reads and Writes**, reducing the complexity of writing code that handles transient cluster failures.
