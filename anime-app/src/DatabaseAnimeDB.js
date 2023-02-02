const {Client} = require('pg')


const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432, 
    password: "postgres",
    database: "AnimeApp"
})

client.connect();

console.log("congrats you made it here!");

client.query(`Select * from anime_app.animedb_api`, (error, result)=>{

    if(!error) {
        console.log(result.rows);
    } else {
        console.log(error.message);
    }
    client.end;
})