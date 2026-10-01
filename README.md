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
* __Node:__ `v24.21.0`
* __Run:__ Thu Oct 01 2026 04:08:15 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:         | --:    | :-:        | --:          | --:           |
| 0http                    | 5.1.1       | ✓      | 57864.8    | 16.76        | 10.32         |
| restana                  | 6.1.0       | ✓      | 53761.6    | 18.09        | 9.59          |
| fastify                  | 5.12.5      | ✓      | 50372.8    | 19.33        | 9.03          |
| node-http                | v24.21.0    | ✗      | 50085.6    | 19.43        | 8.93          |
| micro                    | 10.0.1      | ✗      | 48633.6    | 20.04        | 8.67          |
| polka                    | 0.5.2       | ✓      | 48078.4    | 20.34        | 8.57          |
| adonisjs                 | 9.3.1       | ✓      | 47935.2    | 20.35        | 8.55          |
| connect                  | 3.7.0       | ✗      | 47097.6    | 20.72        | 8.40          |
| hono                     | 4.13.9      | ✓      | 45101.6    | 21.67        | 7.40          |
| connect-router           | 2.2.0       | ✓      | 44486.4    | 22.00        | 7.93          |
| srvx                     | 0.12.8      | ✗      | 43733.6    | 22.35        | 7.09          |
| h3                       | 2.0.1-rc.29 | ✓      | 39767.2    | 24.67        | 6.98          |
| elysia                   | 1.4.30      | ✓      | 39285.6    | 24.93        | 6.44          |
| koa                      | 3.2.1       | ✗      | 38916.8    | 25.20        | 6.94          |
| whatwg-node-server       | 0.11.0      | ✗      | 36351.0    | 26.99        | 6.48          |
| koa-router               | 15.7.0      | ✓      | 35452.6    | 27.70        | 6.32          |
| restify                  | 12.0.0      | ✓      | 32423.8    | 30.34        | 5.84          |
| hapi                     | 21.4.10     | ✓      | 31977.8    | 30.79        | 5.70          |
| express                  | 5.2.1       | ✓      | 27474.4    | 35.89        | 4.90          |
| microrouter              | 3.1.3       | ✓      | 26219.6    | 37.63        | 4.68          |
| express-with-middlewares | 5.2.1       | ✓      | 23313.2    | 42.38        | 8.67          |
| fastify-big-json         | 5.12.5      | ✓      | 14031.2    | 70.71        | 161.43        |
| trpc-router              | 11.19.0     | ✓      | 10518.2    | 94.48        | 2.40          |
