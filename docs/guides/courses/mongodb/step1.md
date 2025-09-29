# Step 1

In this first step, well review the environment and install MongoDB Community.

Look at the system you are one:

```bash
lsb_release -a
```

Then, we'll the follow the [official documentation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/).

Import the MongoDB public GPG Key:

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```

Create the apt source list file:

```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
```

Reload the local package database:

```bash
sudo apt-get update
```

Install the latest stable version:

```bash
sudo apt-get install -y mongodb-org
```

Display MongoDB client version:

```bash
mongo --version
```

Start MongoDB deamon service:

```bash
sudo systemctl start mongod
```

Check MongoDB deamon service status:

```bash
sudo systemctl status mongod
```

Start MongoDB deamon service:

```bash
sudo systemctl stop mongod
```

(you can check service status and see it's inactive, don't forget to do "Ctrl + C" to exit the window)
