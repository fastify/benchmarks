<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg"
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
* __Node:__ `v24.18.0`
* __Run:__ Wed Jul 01 2026 03:23:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 5.1.0    | ✓      | 55596.8    | 17.50        | 9.92          |
| h3                       | 1.15.11  | ✗      | 51836.8    | 18.79        | 9.24          |
| h3-router                | 1.15.11  | ✓      | 51324.0    | 18.96        | 9.15          |
| restana                  | v6.0.0   | ✓      | 49912.0    | 19.55        | 12.57         |
| node-http                | v24.18.0 | ✗      | 49100.8    | 19.94        | 8.76          |
| connect                  | 3.7.0    | ✗      | 48713.6    | 20.07        | 8.69          |
| micro                    | 10.0.1   | ✗      | 48298.4    | 20.18        | 8.61          |
| fastify                  | 5.9.0    | ✓      | 47559.2    | 20.51        | 8.53          |
| polka                    | 0.5.2    | ✓      | 47521.6    | 20.52        | 8.47          |
| connect-router           | 2.2.0    | ✓      | 44444.0    | 21.97        | 7.93          |
| hono                     | 4.12.27  | ✓      | 41608.0    | 23.52        | 6.83          |
| whatwg-node-server       | 0.11.0   | ✗      | 40932.8    | 23.88        | 7.30          |
| koa                      | 3.2.1    | ✗      | 36782.2    | 26.63        | 6.56          |
| hapi                     | 21.4.9   | ✓      | 35450.6    | 27.74        | 6.32          |
| koa-router               | 15.6.0   | ✓      | 34554.8    | 28.42        | 6.16          |
| adonisjs                 | 7.8.1    | ✓      | 34199.0    | 28.73        | 6.10          |
| express                  | 5.2.1    | ✓      | 28512.0    | 34.56        | 5.08          |
| srvx                     | 0.11.18  | ✗      | 27800.4    | 35.44        | 5.41          |
| microrouter              | 3.1.3    | ✓      | 26331.6    | 37.47        | 4.70          |
| express-with-middlewares | 5.2.1    | ✓      | 23574.8    | 41.89        | 8.77          |
| fastify-big-json         | 5.9.0    | ✓      | 14004.8    | 70.84        | 161.12        |
| trpc-router              | 11.18.0  | ✓      | 10523.8    | 94.43        | 2.40          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
