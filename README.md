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
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.3`
* __Run:__ Sun Mar 09 2025 17:38:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 47380.8    | 20.61        | 8.45          |
| bare                     | v20.18.3 | ✗      | 46700.6    | 20.90        | 8.33          |
| 0http                    | 4.2.0    | ✓      | 46623.2    | 20.96        | 8.31          |
| polka                    | 0.5.2    | ✓      | 46602.4    | 20.95        | 8.31          |
| fastify                  | 5.2.1    | ✓      | 46320.8    | 21.09        | 8.31          |
| connect                  | 3.7.0    | ✗      | 46232.0    | 21.12        | 8.24          |
| server-base              | 7.1.32   | ✗      | 45681.6    | 21.39        | 8.15          |
| rayo                     | 1.4.6    | ✓      | 45649.6    | 21.40        | 8.14          |
| server-base-router       | 7.1.32   | ✓      | 45348.8    | 21.56        | 8.09          |
| micro                    | 10.0.1   | ✗      | 45329.6    | 21.55        | 8.08          |
| h3-router                | 1.15.1   | ✓      | 44336.0    | 22.06        | 7.91          |
| h3                       | 1.15.1   | ✗      | 44054.4    | 22.19        | 7.86          |
| connect-router           | 1.3.8    | ✓      | 42799.2    | 22.86        | 7.63          |
| micro-route              | 2.5.0    | ✓      | 42662.4    | 22.93        | 7.61          |
| adonisjs                 | 7.5.0    | ✓      | 42330.4    | 23.12        | 7.55          |
| restana                  | v5.0.0   | ✓      | 41641.6    | 23.51        | 7.43          |
| hono                     | 4.7.4    | ✓      | 40199.2    | 24.38        | 6.59          |
| koa                      | 2.16.0   | ✗      | 37402.4    | 26.23        | 6.67          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35735.2    | 27.48        | 6.37          |
| take-five                | 2.0.0    | ✓      | 35674.6    | 27.52        | 12.83         |
| restify                  | 11.1.0   | ✓      | 34665.8    | 28.35        | 6.25          |
| koa-router               | 13.1.0   | ✓      | 33371.8    | 29.47        | 5.95          |
| hapi                     | 21.4.0   | ✓      | 32431.0    | 30.33        | 5.78          |
| microrouter              | 3.1.3    | ✓      | 30411.2    | 32.37        | 5.42          |
| fastify-big-json         | 5.2.1    | ✓      | 12006.4    | 82.72        | 138.14        |
| express                  | 5.0.1    | ✓      | 10145.4    | 97.98        | 1.81          |
| express-with-middlewares | 5.0.1    | ✓      | 9018.0     | 110.26       | 3.35          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
