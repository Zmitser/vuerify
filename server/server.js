const Hapi = require('hapi')
const corsHeaders = require('hapi-cors-headers')
const server = new Hapi.Server()

server.connection({
  port: 8000,
  routes: {
    cors: true
  }
})
server.ext('onPreResponse', corsHeaders)
server.register(require('bell'), function (err) {
  server.auth.strategy('facebook', 'bell', {
    provider: 'facebook',
    password: 'passwordcfdsfdsfdsfdsfsxzxzxzxzxzxzxzXxZxzxzxz',
    isSecure: false,
    clientId: '250230055492580',
    clientSecret: 'f877c8ef6427b2846db91ff8eafe2e5f'
  })

  server.route({
    method: 'GET',
    path: '/login',
    config: {
      auth: 'facebook',
      cors: {
        origin: ['*'],
        headers: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type', 'CORELATION_ID'],
        additionalHeaders: ['accept', 'authorization', 'content-type', 'if-none-match', 'origin'],
        credentials: true
      },
      handler: function (request, reply) {
        if (!request.auth.isAuthenticated) {
          return reply('Authentication failed due to: ' + request.auth.error.message)
        }
        return reply.redirect('/')
      }
    }
  })
  server.start()
})
