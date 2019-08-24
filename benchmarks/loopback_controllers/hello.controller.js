'use strict'

const HelloController = class HelloController {
    constructor(req) {
        this.req = req;
    }
    hello() {
        return { hello: 'world' };
    }
};

exports.HelloController = HelloController;
