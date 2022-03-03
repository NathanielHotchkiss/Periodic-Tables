/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

 require('dotenv').config();
 const path = require("path");
 
 const {
   DATABASE_URL = "postgres://eqzrgqxs:ArekNEDaL_kvj4OapoeoIAFM6ZU62MMn@batyr.db.elephantsql.com/eqzrgqxs",
   DATABASE_URL_DEVELOPMENT = "postgres://pcrdxers:rNHeRd4eiXX2XuOj2fEKXRGOMgRQJbd2@batyr.db.elephantsql.com/pcrdxers",
   DATABASE_URL_TEST = "postgres://dbwwyksi:eMT90xPYWCa31J-0y3MwCN9pBOYZYU8B@batyr.db.elephantsql.com/dbwwyksi",
   DATABASE_URL_PREVIEW = "postgres://jfhdhtjs:Hj48WPYauFwMux_rhZJEpE_sEyOaGo0R@batyr.db.elephantsql.com/jfhdhtjs",
   DEBUG,
 } = process.env;
 
 module.exports = {
   development: {
     client: "postgresql",
     pool: { min: 1, max: 5 },
     connection: DATABASE_URL_DEVELOPMENT,
     migrations: {
       directory: path.join(__dirname, "src", "db", "migrations"),
     },
     seeds: {
       directory: path.join(__dirname, "src", "db", "seeds"),
     },
     debug: !!DEBUG,
   },
   test: {
     client: "postgresql",
     pool: { min: 1, max: 5 },
     connection: DATABASE_URL_TEST,
     migrations: {
       directory: path.join(__dirname, "src", "db", "migrations"),
     },
     seeds: {
       directory: path.join(__dirname, "src", "db", "seeds"),
     },
     debug: !!DEBUG,
   },
   preview: {
     client: "postgresql",
     pool: { min: 1, max: 5 },
     connection: DATABASE_URL_PREVIEW,
     migrations: {
       directory: path.join(__dirname, "src", "db", "migrations"),
     },
     seeds: {
       directory: path.join(__dirname, "src", "db", "seeds"),
     },
     debug: !!DEBUG,
   },
   production: {
     client: "postgresql",
     pool: { min: 1, max: 5 },
     connection: DATABASE_URL,
     migrations: {
       directory: path.join(__dirname, "src", "db", "migrations"),
     },
     seeds: {
       directory: path.join(__dirname, "src", "db", "seeds"),
     },
     debug: !!DEBUG,
   },
 };
 