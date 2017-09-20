const fastify = require('fastify')();

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
};

fastify.get('/', schema, (req, reply) => {
  reply
    .send({ hello: 'world' });
});

fastify.listen(3000);
