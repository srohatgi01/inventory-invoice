const sqlite = require('sqlite3').verbose();


const config = new sqlite.Database('./database.sqlite', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected/Created the database.');
});


function createTables() {
    config.run('CREATE TABLE IF NOT EXISTS sample(name TEXT)', (err) => { err ? console.log(err) : console.log("Sample Table Created.") })
    config.run('CREATE TABLE IF NOT EXISTS clients(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, phoneNumber TEXT, emailAddress TEXT)', (err) => { err ? console.log(err) : console.log("Clients Table Created.") })
}

function createNewClient(name, number, email) {
    config.run(`INSERT INTO clients(name, phoneNumber, emailAddress) VALUES('${name}', '${number}', '${email}')`, function(err) {
        (err) ? console.log(err.message): console.log(`A row has been inserted with rowid ${this.lastID}`)
    });
}

module.exports = { createTables, createNewClient }