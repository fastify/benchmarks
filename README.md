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

#### Scenarios

* `get` (default): `GET /` responding with `{ hello: 'world' }`. Servers live in [`benchmarks/`](./benchmarks).
* `post`: `POST /` with a `{"hello":"world"}` JSON body, parsed and echoed back. Servers live in [`benchmarks/post/`](./benchmarks/post).

Pass the scenario as the fifth argument when benchmarking non-interactively, and with `-s` when comparing:

```
node ./benchmark bench y 100 10 40 post
node ./benchmark compare -t -s post
```

# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.22.3`
* __Run:__ Sat Nov 14 2026 21:09:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 5.2.0    | ✓      | 85252.8    | 11.21        | 15.20         |
| restana                  | 6.1.0    | ✓      | 83182.4    | 11.49        | 14.83         |
| node-http                | v24.22.3 | ✗      | 81011.2    | 11.98        | 14.45         |
| polka                    | 0.5.2    | ✓      | 80230.4    | 12.08        | 14.31         |
| connect                  | 3.7.0    | ✗      | 79144.0    | 12.17        | 14.11         |
| fastify                  | 5.12.8   | ✓      | 78696.0    | 12.18        | 14.11         |
| connect-router           | 2.2.0    | ✓      | 74883.2    | 12.80        | 13.35         |
| hono                     | 4.13.17  | ✓      | 74163.2    | 12.99        | 12.17         |
| micro                    | 10.0.1   | ✗      | 72540.8    | 13.30        | 12.94         |
| srvx                     | 1.0.8    | ✗      | 71611.6    | 13.41        | 11.61         |
| h3                       | 2.0.8    | ✓      | 69174.8    | 13.97        | 12.14         |
| elysia                   | 1.4.31   | ✓      | 68231.2    | 14.23        | 11.19         |
| adonisjs                 | 9.3.1    | ✓      | 67820.4    | 14.23        | 12.10         |
| koa                      | 3.3.0    | ✗      | 57570.4    | 16.87        | 10.27         |
| restify                  | 12.1.0   | ✓      | 54070.4    | 18.04        | 9.75          |
| express                  | 5.3.0    | ✓      | 53784.8    | 18.13        | 9.59          |
| koa-router               | 15.7.1   | ✓      | 52548.8    | 18.52        | 9.37          |
| hapi                     | 21.4.13  | ✓      | 48864.8    | 19.96        | 8.72          |
| microrouter              | 3.1.3    | ✓      | 48449.6    | 20.11        | 8.64          |
| express-with-middlewares | 5.3.0    | ✓      | 45005.6    | 21.71        | 16.74         |
| fastify-big-json         | 5.12.8   | ✓      | 19882.0    | 49.76        | 228.75        |
| trpc-router              | 11.25.0  | ✓      | 15073.6    | 65.80        | 3.44          |
| whatwg-node-server       | 0.13.2   | ✗      | N/A        | N/A          | N/A           |

# POST Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.22.3`
* __Run:__ Sat Nov 14 2026 21:09:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 -m POST -H content-type=application/json -b '{"hello":"world"}' localhost:3000` (two rounds; one to warm-up, one to measure)

|           | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--       | --:      | --:    | :-:        | --:          | --:           |
| node-http | v24.22.3 | ✗      | 55476.8    | 17.53        | 9.89          |
| fastify   | 5.12.8   | ✓      | 47248.0    | 20.64        | 8.47          |
| hono      | 4.13.17  | ✓      | 39976.0    | 24.50        | 6.56          |
| h3        | 2.0.8    | ✓      | 39675.2    | 24.74        | 6.96          |
| express   | 5.3.0    | ✓      | 27924.4    | 35.30        | 4.98          |
| koa       | 3.3.0    | ✗      | 26721.2    | 36.91        | 4.77          |
| restify   | 12.1.0   | ✓      | 26605.6    | 37.08        | 4.80          |
| hapi      | 21.4.13  | ✓      | 20005.6    | 49.47        | 3.57          |
