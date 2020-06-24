const { httpListener, Rendering } = require('@hatsy/hatsy');
const { dispatchByPattern, Routing } = require('@hatsy/router');
const { createServer } = require('http');

const server = createServer(httpListener(
  Routing.and(Rendering).for(
    dispatchByPattern({
      on: '**',
      to({ renderJson }) {
        renderJson({ hello: 'world' });
      },
    }),
  ),
));

server.listen(3000);
