const server = require('../config/server/server')
require('../config/mongo/database')
require('../config/route/routes')(server)