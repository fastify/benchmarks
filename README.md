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
* __Run:__ Sun Nov 01 2026 23:10:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 5.2.0    | ✓      | 96659.2    | 9.91         | 17.24         |
| restana                  | 6.1.0    | ✓      | 92734.4    | 10.34        | 16.54         |
| polka                    | 0.5.2    | ✓      | 91195.2    | 10.50        | 16.26         |
| node-http                | v24.22.2 | ✗      | 90524.8    | 10.59        | 16.14         |
| connect                  | 3.7.0    | ✗      | 89977.6    | 10.60        | 16.05         |
| fastify                  | 5.12.7   | ✓      | 89732.8    | 10.63        | 16.09         |
| connect-router           | 2.2.0    | ✓      | 85739.2    | 11.16        | 15.29         |
| hono                     | 4.13.14  | ✓      | 84929.6    | 11.28        | 13.93         |
| micro                    | 10.0.1   | ✗      | 84707.2    | 11.31        | 15.11         |
| srvx                     | 1.0.7    | ✗      | 84556.8    | 11.29        | 13.71         |
| elysia                   | 1.4.30   | ✓      | 82528.0    | 11.60        | 13.54         |
| adonisjs                 | 9.3.1    | ✓      | 82273.6    | 11.68        | 14.67         |
| h3                       | 2.0.8    | ✓      | 80974.4    | 11.85        | 14.21         |
| whatwg-node-server       | 0.13.1   | ✗      | 75409.2    | 12.73        | 13.45         |
| koa                      | 3.2.1    | ✗      | 72593.6    | 13.27        | 12.95         |
| restify                  | 12.1.0   | ✓      | 69162.0    | 13.97        | 12.47         |
| koa-router               | 15.7.0   | ✓      | 67955.6    | 14.22        | 12.12         |
| express                  | 5.3.0    | ✓      | 67794.0    | 14.25        | 12.09         |
| hapi                     | 21.4.11  | ✓      | 65114.0    | 14.86        | 11.61         |
| microrouter              | 3.1.3    | ✓      | 61872.0    | 15.69        | 11.03         |
| express-with-middlewares | 5.3.0    | ✓      | 57160.0    | 16.99        | 21.26         |
| fastify-big-json         | 5.12.7   | ✓      | 26195.2    | 37.66        | 301.42        |
| trpc-router              | 11.19.0  | ✓      | 19806.8    | 49.97        | 4.51          |

# POST Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.22.2`
* __Run:__ Sun Nov 01 2026 23:10:11 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 -m POST -H content-type=application/json -b '{"hello":"world"}' localhost:3000` (two rounds; one to warm-up, one to measure)

|           | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--       | --:      | --:    | :-:        | --:          | --:           |
| node-http | v24.22.2 | ✗      | 72229.2    | 13.35        | 12.88         |
| fastify   | 5.12.7   | ✓      | 69080.0    | 13.98        | 12.39         |
| hono      | 4.13.14  | ✓      | 60345.2    | 16.08        | 9.90          |
| h3        | 2.0.8    | ✓      | 58771.2    | 16.52        | 10.31         |
| koa       | 3.2.1    | ✗      | 45784.8    | 21.35        | 8.16          |
| express   | 5.3.0    | ✓      | 44141.6    | 22.15        | 7.87          |
| restify   | 12.1.0   | ✓      | 43530.4    | 22.49        | 7.85          |
| hapi      | 21.4.11  | ✓      | 34408.6    | 28.55        | 6.14          |
