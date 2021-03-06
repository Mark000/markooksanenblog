// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://blog.markooksanen.com',
        fileStorage: false,
        forceAdminSSL: {redirect: false},
        mail: {
          transport: 'SMTP',
          options: {
              service: 'Mailgun',
              auth: {
                  user: 'postmaster@app31865704.mailgun.org', // mailgun username
                  pass: '284bc656c4751b1f7742e78397c38b37'  // mailgun password
              }
            }
          },
        database: {
            client: 'postgres',
            connection: {
              host: 'ec2-23-21-189-181.compute-1.amazonaws.com',
              user: 'xkbiqsqcgfuhkj',
              password: '8a0c25a653664d8e53a6dc6057d5212a258c0d3f888dca44085bbb0eae8946a9',
              database: 'd5smovg0kj38bu',
              port: '5432'
           },
      /* Not sure from where this info is and why this doesn't work, but updating now based on Heroku info
            connection: {
              host: 'ec2-54-243-245-159.compute-1.amazonaws.com',
              user: 'tbvjiqwilmjivr',
              password: 'RMNUQD-LuvRScu-7kAZml-derb',
              database: 'd80t6d3s6100s0',
              port: '5432'
           },*/
          debug: false
            },
          paths: {
      "contentPath": "./content"
    },
        server: {
          host: '0.0.0.0',
          port: process.env.PORT
        }
    },

    development: {
        url: 'http://localhost:2368',
        fileStorage: false,
        mail: {
          transport: 'SMTP',
          options: {
              service: 'Mailgun',
              auth: {
                  user: 'postmaster@app31865704.mailgun.org', // mailgun username
                  pass: '284bc656c4751b1f7742e78397c38b37'  // mailgun password
              }
            }
          },
        database: {
            client: 'postgres',
            connection: {
              host: 'localhost',
              user: 'root',
              password: '',
              database: 'ghost',
              port: '5432'
           },
          debug: false
            },
        server: {
          host: '127.0.0.1',
          port: 2368
        }
    },

    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

// Export config
module.exports = config;
