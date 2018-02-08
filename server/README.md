### Install node modules

`npm install`

### Install mysql for your OS

If you use Windows [download](https://dev.mysql.com/downloads/installer/) MySQL from official site. After installation create user with `<username>` and `<password>`.
You can leave `<password>` empty.
Create database and name it `<database-name>`.

**!** `<username>` `<password>` and `<database-name>` are placeholders!

### Install db-migrate package

To install **db-migrate** globally run this command:

`npm install -g db-migrate`

### Configure database.json

Now you have to connect your database to the application. In order to do that create new file **database.json** in the root of the server application.
You can copy **database-example.json** also.
After that you have to connect your database using this config:

```
{
	"defaultEnv": "dev",
	"dev": {
		"driver": "mysql",
		"user": "<username>",
		"password": "<password>",
		"database": "<database-name>",
		"multipleStatements": true
	}
}
```

And save it. If everything went alright run.

`db-migrate up`

After you run `db-migrate up` you'll have new tables in your database. Check it out.

[Datatypes](https://github.com/db-migrate/shared/blob/master/data_type.js)

### Run

To tun development server on your PC use:

`npm run dev`
