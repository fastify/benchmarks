'use strict'
const fastify = require('fastify')()

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
}

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        process.exit(1)
    }
}
start()