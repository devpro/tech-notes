# Step 2

Now that MongoDB is installed locally, let's see how to use it from the command line.

First, we need to create the data directory

`mkdir data`

That's all we need to start MongoDB!

`mongod --dbpath=data`

Look at the output, once done, do "Ctrl + C" to close the process.

Let's review what has been created in data directory:

`ll data`

Now, we want to run the process in the backgroung so we can interact with it.

`mongod --fork --dbpath=data --logpath=server.log`

You can look at the log file

`tail -n 100 server.log`
