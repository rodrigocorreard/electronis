# Adonis5 with Electron18 tray application

This is a rest API application for AdonisJs with Electron and tray system, it comes pre-configured with.

1. Authentication
2. Lucid ORM
3. Migrations and seeds Mysql/MariaDB
4. Electron

## Setup

1. Manually clone the repo and then run `npm install`.
2. Copy .env.example and rename into .env, fill in the environment
3. Use localhost or 127.0.0.1 instead of 0.0.0.0

### Migrations

Run the following command to run startup migrations.

```js
node ace migration:run
```

### Development

Run the following command to start development/

```js
npm start
```

### Testing

Open your browser and goes to http://localhost:3333
