# Step 3

Now that we have a MongoDB server running locally, let's play with it!

:::tip Notice

We are on the local machine, on a local server so no authentication is needed but you couldn't access the server from another machine

:::

We can easily use the CLI to do actions in MongoDB

`mongo`

We are going to run some basic commands:

- List all databases (default ones)

`show dbs`

- Switch to a specific database (will be created automatically)

`use demo`

- Create a first entry

`db.examples.insert({'title': 'KataCoda rocks!', url: 'https://www.katacoda.com'})`

- List all collections (you'll see the one automatically created)

`show collections`

- Look at the data we just inserted (see the automated `_id` field)

`db.examples.find()`
