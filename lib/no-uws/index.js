'use strict'

// Put in place of uWebSockets.js by the override in package.json: fulmine.js runs here through node:http,
// so it never loads uWebSockets.js, and if it did the server would not start
throw new Error('uWebSockets.js is not installed in this benchmark, fulmine.js runs through node:http')
