<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://raw.githubusercontent.com/fastify/graphics/HEAD/fastify-landscape-outlined.svg"
      width="650"
      height="auto"
    />
  </a>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Package Manager
CI](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web
site](https://github.com/fastify/fastify/actions/workflows/website.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/website.yml)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/7585/badge)](https://bestpractices.coreinfrastructure.org/projects/7585)

</div>

<div align="center">

[![NPM
version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM
downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![Security Responsible
Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/fastify/fastify/blob/main/SECURITY.md)
[![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)
[![Contribute with Gitpod](https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod&color=blue)](https://gitpod.io/#https://github.com/fastify/fastify)
![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/fastify)

</div>

<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is compared to other JS frameworks: these benchmarks do not pretend to represent a real-world scenario, but they give a **good indication of the framework overhead**.
* The benchmarks are run automatically on GitHub actions, which means they run on virtual hardware that can suffer from the "noisy neighbor" effect; this means that the results can vary.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `bench`:  Benchmark one or more modules.
* `compare`: Get comparative data for your benchmarks.

> Create benchmark before comparing; `benchmark bench`

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.19.0`
* __Run:__ Mon Aug 24 2026 07:26:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:         | --:    | :-:        | --:          | --:           |
| 0http                    | 5.1.0       | ✓      | 54857.6    | 17.70        | 9.78          |
| srvx                     | 0.12.5      | ✗      | 48037.6    | 20.33        | 7.79          |
| restana                  | v6.0.1      | ✓      | 47711.2    | 20.48        | 12.01         |
| node-http                | v24.19.0    | ✗      | 47137.6    | 20.71        | 8.41          |
| fastify                  | 5.12.0      | ✓      | 46407.2    | 21.04        | 8.32          |
| connect                  | 3.7.0       | ✗      | 46378.4    | 21.02        | 8.27          |
| polka                    | 0.5.2       | ✓      | 45660.0    | 21.37        | 8.14          |
| micro                    | 10.0.1      | ✗      | 44564.0    | 21.95        | 7.95          |
| h3                       | 2.0.1-rc.26 | ✓      | 43687.2    | 22.37        | 7.67          |
| elysia                   | 1.4.29      | ✓      | 43500.8    | 22.46        | 7.14          |
| hono                     | 4.13.2      | ✓      | 43343.2    | 22.56        | 7.11          |
| adonisjs                 | 9.2.0       | ✓      | 43042.4    | 22.71        | 7.68          |
| connect-router           | 2.2.0       | ✓      | 42113.6    | 23.29        | 7.51          |
| whatwg-node-server       | 0.11.0      | ✗      | 39761.8    | 24.68        | 7.09          |
| koa                      | 3.2.1       | ✗      | 35640.2    | 27.62        | 6.36          |
| hapi                     | 21.4.10     | ✓      | 34342.0    | 28.58        | 6.12          |
| koa-router               | 15.7.0      | ✓      | 33188.4    | 29.63        | 5.92          |
| express                  | 5.2.1       | ✓      | 27120.0    | 36.36        | 4.84          |
| microrouter              | 3.1.3       | ✓      | 24434.8    | 40.42        | 4.36          |
| express-with-middlewares | 5.2.1       | ✓      | 22401.2    | 44.12        | 8.33          |
| fastify-big-json         | 5.12.0      | ✓      | 14054.8    | 70.62        | 161.70        |
| trpc-router              | 11.18.0     | ✓      | 10732.0    | 92.60        | 2.45          |
| restify                  | 11.1.0      | ✓      | N/A        | N/A          | N/A           |
