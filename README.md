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
CI](https://github.com/fastify/fastify/workflows/package-manager-ci/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web
SIte](https://github.com/fastify/fastify/workflows/website/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/website.yml)
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
* __Node:__ `v20.18.1`
* __Run:__ Mon Jan 20 2025 01:48:53 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 47121.8    | 20.73        | 8.40          |
| fastify                  | 5.2.1    | ✓      | 46243.2    | 21.12        | 8.29          |
| polka                    | 0.5.2    | ✓      | 45572.0    | 21.45        | 8.13          |
| rayo                     | 1.4.6    | ✓      | 45404.8    | 21.53        | 8.10          |
| connect                  | 3.7.0    | ✗      | 45337.6    | 21.57        | 8.09          |
| server-base-router       | 7.1.32   | ✓      | 45066.4    | 21.69        | 8.04          |
| polkadot                 | 1.0.0    | ✗      | 44980.8    | 21.74        | 8.02          |
| 0http                    | 4.0.0    | ✓      | 44627.2    | 21.91        | 7.96          |
| server-base              | 7.1.32   | ✗      | 44520.8    | 21.96        | 7.94          |
| micro                    | 10.0.1   | ✗      | 44171.2    | 22.14        | 7.88          |
| connect-router           | 1.3.8    | ✓      | 42840.8    | 22.85        | 7.64          |
| micro-route              | 2.5.0    | ✓      | 41688.0    | 23.49        | 7.43          |
| adonisjs                 | 7.4.0    | ✓      | 41569.6    | 23.56        | 7.41          |
| h3                       | 1.13.1   | ✗      | 41398.4    | 23.65        | 7.38          |
| hono                     | 4.6.17   | ✓      | 40537.6    | 24.15        | 6.65          |
| h3-router                | 1.13.1   | ✓      | 40528.8    | 24.17        | 7.23          |
| restana                  | v5.0.0   | ✓      | 39802.4    | 24.63        | 7.10          |
| koa                      | 2.15.3   | ✗      | 37801.4    | 25.95        | 6.74          |
| take-five                | 2.0.0    | ✓      | 35191.0    | 27.91        | 12.65         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34533.4    | 28.45        | 6.16          |
| restify                  | 11.1.0   | ✓      | 34443.6    | 28.53        | 6.21          |
| koa-router               | 13.1.0   | ✓      | 33534.6    | 29.32        | 5.98          |
| hapi                     | 21.3.12  | ✓      | 31288.2    | 31.45        | 5.58          |
| microrouter              | 3.1.3    | ✓      | 30258.8    | 32.54        | 5.40          |
| fastify-big-json         | 5.2.1    | ✓      | 11880.6    | 83.62        | 136.69        |
| express                  | 5.0.1    | ✓      | 10251.5    | 96.96        | 1.83          |
| express-with-middlewares | 5.0.1    | ✓      | 9222.4     | 107.82       | 3.43          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
