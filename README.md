# NodeJS , Express , TypeScript , Prisma.JS , CRUD Rest API

## How to run project

Clone this repo :

```sh
git clone https://github.com/masoudei/nodejs-typescript-express-prisma-api.git
```

Install node modules :

```sh
npm install
```

Build typescript code :

```sh
npm run build
```

Run project for development :

```sh
npm run dev
```

## Postgress Container

You need a postgres database server running to connect to (local docker):

```sh
docker run --name a-postgres-db -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres
```

## Prisma

```sh
npx prisma init
```

Initialize and generate database schema in postgres :

```sh
npx prisma db push
```
