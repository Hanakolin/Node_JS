const databaseConfig={
    dbName:'process.env.DB',
    username:'process.env.USERNAME',
    password:'process.env.PASSWORD',
    host:'process,env.HOST',
    port:3306,
    dialect:'mysql',
}

module.expoxt= databaseConfig;