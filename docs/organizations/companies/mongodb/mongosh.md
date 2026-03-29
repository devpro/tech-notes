# MongoDB Shell (mongosh)

Introduced in June 2020 ([blog post](https://www.mongodb.com/company/blog/product-release-announcement/introducing-the-new-shell)), available as a standalone package, `mongosh` provides a fully functional JavaScript/Node.js environment for interacting with MongoDB deployments.

🌐 [mongodb.com/products/tools/shell](https://www.mongodb.com/products/tools/shell), [code](https://github.com/mongodb-js/mongosh) [docs](https://www.mongodb.com/docs/mongodb-shell/)

## Getting started

```bash
mongosh <connection_string>
```

Migrating from Legacy mongo Shell: [Compatibility Changes with Legacy mongo Shell](https://www.mongodb.com/docs/mongodb-shell/reference/compatibility/)

## Commands

Command                               | Action
--------------------------------------|------------------------------------
`db`                                  | Display the database currently used
`use <database>`                      | Switch database
`db.myCollection.insertOne({ x: 1 })` | Create an entry in a collection
`db.myCollection.find()`              | Find all entries in a collection
