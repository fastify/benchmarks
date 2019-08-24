"use strict";

const boot_1 = require("@loopback/boot");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");

class TrylbApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(rest_1.RestApplication)) {
    constructor(options = {}) {
        super(options);

        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['loopback_controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
}



async function main(options = {}) {
    const app = new TrylbApplication(options);
    await app.boot();
    await app.start();
    return app;
}

const config = {
    rest: {
        port: 3000,
        host: process.env.HOST,
    },
};

main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
});
