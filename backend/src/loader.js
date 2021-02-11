const server = require('./config/sever')
require('./config/database')
require('./config/routes')(server)