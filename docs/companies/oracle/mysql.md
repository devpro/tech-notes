# MySQL

Check the version:

```bash
mysql --version
```

Download tools from [mysql.com/downloads](https://www.mysql.com/downloads/)

See and update MySQL rights (run the `mysql` command):

```mysql
select user, host, password from mysql.user;
use mysql;
update user set password=PASSWORD("password")  where user='root' and host='%';
```
