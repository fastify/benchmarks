const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server({
  connections: {
    compression: false
  }
});
server.connection({
  host: 'localhost',
  port: 3000
});

// Add the route
server.route({
  method: 'GET',
  path: '/',
  config: {
    cache: false,
    response: {
      ranges: false
    }
  },
  handler(request, reply) {
    return reply({ hello: 'world' });
  }
});

// Start the server
server.start((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
