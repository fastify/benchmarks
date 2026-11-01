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
* __Node:__ `v24.22.2`
* __Run:__ Sun Nov 01 2026 04:31:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:         | --:    | :-:        | --:          | --:           |
| restana                  | 6.1.0       | ✓      | 93484.8    | 10.17        | 16.67         |
| connect                  | 3.7.0       | ✗      | 92668.8    | 10.29        | 16.53         |
| fastify                  | 5.12.7      | ✓      | 92340.8    | 10.35        | 16.56         |
| 0http                    | 5.2.0       | ✓      | 92326.4    | 10.34        | 16.47         |
| node-http                | v24.22.2    | ✗      | 90390.4    | 10.59        | 16.12         |
| hono                     | 4.13.13     | ✓      | 88576.0    | 10.80        | 14.53         |
| polka                    | 0.5.2       | ✓      | 87518.4    | 10.94        | 15.61         |
| srvx                     | 1.0.7       | ✗      | 86616.0    | 11.10        | 14.04         |
| h3                       | 2.0.1-rc.32 | ✓      | 85257.6    | 11.25        | 14.96         |
| adonisjs                 | 9.3.1       | ✓      | 84838.4    | 11.32        | 15.13         |
| elysia                   | 1.4.30      | ✓      | 84835.2    | 11.30        | 13.92         |
| micro                    | 10.0.1      | ✗      | 84489.6    | 11.33        | 15.07         |
| connect-router           | 2.2.0       | ✓      | 76030.4    | 12.63        | 13.56         |
| koa                      | 3.2.1       | ✗      | 73616.0    | 13.07        | 13.13         |
| restify                  | 12.1.0      | ✓      | 70711.6    | 13.64        | 12.74         |
| express                  | 5.3.0       | ✓      | 70300.8    | 13.71        | 12.54         |
| whatwg-node-server       | 0.13.1      | ✗      | 69353.6    | 13.92        | 12.37         |
| koa-router               | 15.7.0      | ✓      | 69148.8    | 13.96        | 12.33         |
| hapi                     | 21.4.11     | ✓      | 66674.4    | 14.50        | 11.89         |
| microrouter              | 3.1.3       | ✓      | 64130.4    | 15.07        | 11.44         |
| express-with-middlewares | 5.3.0       | ✓      | 60306.4    | 16.13        | 22.43         |
| fastify-big-json         | 5.12.7      | ✓      | 27514.4    | 35.83        | 316.59        |
| trpc-router              | 11.19.0     | ✓      | 20152.0    | 49.10        | 4.59          |

# POST Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.22.2`
* __Run:__ Sun Nov 01 2026 04:31:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 -m POST -H content-type=application/json -b '{"hello":"world"}' localhost:3000` (two rounds; one to warm-up, one to measure)

|           | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--       | --:         | --:    | :-:        | --:          | --:           |
| node-http | v24.22.2    | ✗      | 74420.8    | 12.95        | 13.27         |
| fastify   | 5.12.7      | ✓      | 63216.4    | 15.32        | 11.33         |
| hono      | 4.13.13     | ✓      | 56004.8    | 17.36        | 9.19          |
| h3        | 2.0.1-rc.32 | ✓      | 51154.4    | 19.03        | 8.98          |
| koa       | 3.2.1       | ✗      | 47126.4    | 20.71        | 8.40          |
| restify   | 12.1.0      | ✓      | 44917.6    | 21.76        | 8.10          |
| express   | 5.3.0       | ✓      | 41194.4    | 23.78        | 7.35          |
| hapi      | 21.4.11     | ✓      | 27513.2    | 35.85        | 4.91          |
