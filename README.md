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
* __Node:__ `v24.22.0`
* __Run:__ Mon Oct 19 2026 13:23:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:         | --:    | :-:        | --:          | --:           |
| restana                  | 6.1.0       | ✓      | 96993.6    | 9.77         | 17.30         |
| 0http                    | 5.2.0       | ✓      | 96574.4    | 9.84         | 17.22         |
| connect                  | 3.7.0       | ✗      | 91704.0    | 10.37        | 16.35         |
| fastify                  | 5.12.7      | ✓      | 91539.2    | 10.40        | 16.41         |
| polka                    | 0.5.2       | ✓      | 90246.4    | 10.60        | 16.09         |
| node-http                | v24.22.0    | ✗      | 89334.4    | 10.72        | 15.93         |
| hono                     | 4.13.13     | ✓      | 88776.0    | 10.82        | 14.56         |
| connect-router           | 2.2.0       | ✓      | 87537.6    | 10.98        | 15.61         |
| srvx                     | 1.0.5       | ✗      | 87449.6    | 10.93        | 14.18         |
| micro                    | 10.0.1      | ✗      | 87236.8    | 10.98        | 15.56         |
| elysia                   | 1.4.30      | ✓      | 85731.2    | 11.17        | 14.06         |
| h3                       | 2.0.1-rc.32 | ✓      | 83566.4    | 11.48        | 14.66         |
| adonisjs                 | 9.3.1       | ✓      | 83457.6    | 11.46        | 14.88         |
| whatwg-node-server       | 0.13.0      | ✗      | 77604.8    | 12.38        | 13.84         |
| koa                      | 3.2.1       | ✗      | 75523.2    | 12.77        | 13.47         |
| koa-router               | 15.7.0      | ✓      | 72014.4    | 13.33        | 12.84         |
| express                  | 5.3.0       | ✓      | 68965.6    | 14.01        | 12.30         |
| restify                  | 12.0.0      | ✓      | 68917.2    | 14.00        | 12.42         |
| hapi                     | 21.4.10     | ✓      | 66615.6    | 14.51        | 11.88         |
| express-with-middlewares | 5.3.0       | ✓      | 58681.6    | 16.55        | 21.83         |
| microrouter              | 3.1.3       | ✓      | 57912.0    | 16.77        | 10.33         |
| fastify-big-json         | 5.12.7      | ✓      | 25688.0    | 38.42        | 295.55        |
| trpc-router              | 11.19.0     | ✓      | 20753.6    | 47.68        | 4.73          |

# POST Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.22.0`
* __Run:__ Mon Oct 19 2026 13:23:31 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 -m POST -H content-type=application/json -b '{"hello":"world"}' localhost:3000` (two rounds; one to warm-up, one to measure)

|           | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--       | --:         | --:    | :-:        | --:          | --:           |
| node-http | v24.22.0    | ✗      | 78409.6    | 12.27        | 13.98         |
| fastify   | 5.12.7      | ✓      | 72691.2    | 13.27        | 13.03         |
| hono      | 4.13.13     | ✓      | 62944.8    | 15.40        | 10.32         |
| h3        | 2.0.1-rc.32 | ✓      | 53712.0    | 18.12        | 9.42          |
| koa       | 3.2.1       | ✗      | 48265.6    | 20.22        | 8.61          |
| express   | 5.3.0       | ✓      | 46004.8    | 21.25        | 8.20          |
| restify   | 12.0.0      | ✓      | 35928.0    | 27.33        | 6.48          |
| hapi      | 21.4.10     | ✓      | 35685.2    | 27.52        | 6.36          |
