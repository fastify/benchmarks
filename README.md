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
* __Run:__ Mon Dec 23 2024 01:51:00 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 47683.2    | 20.48        | 8.50          |
| fastify                  | 5.2.0    | ✓      | 47181.6    | 20.69        | 8.46          |
| 0http                    | 3.5.3    | ✓      | 46138.4    | 21.19        | 8.23          |
| polka                    | 0.5.2    | ✓      | 46038.4    | 21.21        | 8.21          |
| server-base-router       | 7.1.32   | ✓      | 45859.2    | 21.28        | 8.18          |
| rayo                     | 1.4.6    | ✓      | 45735.2    | 21.35        | 8.16          |
| connect                  | 3.7.0    | ✗      | 45688.0    | 21.36        | 8.15          |
| server-base              | 7.1.32   | ✗      | 45428.8    | 21.49        | 8.10          |
| polkadot                 | 1.0.0    | ✗      | 45302.4    | 21.59        | 8.08          |
| micro                    | 10.0.1   | ✗      | 45072.0    | 21.67        | 8.04          |
| connect-router           | 1.3.8    | ✓      | 42796.8    | 22.86        | 7.63          |
| micro-route              | 2.5.0    | ✓      | 42590.4    | 22.97        | 7.60          |
| h3                       | 1.13.0   | ✗      | 42128.0    | 23.24        | 7.51          |
| adonisjs                 | 7.4.0    | ✓      | 42109.6    | 23.24        | 7.51          |
| h3-router                | 1.13.0   | ✓      | 41000.0    | 23.89        | 7.31          |
| hono                     | 4.6.14   | ✓      | 40312.0    | 24.30        | 6.61          |
| restana                  | 4.9.9    | ✓      | 38364.2    | 25.56        | 6.84          |
| koa                      | 2.15.3   | ✗      | 36981.6    | 26.53        | 6.60          |
| take-five                | 2.0.0    | ✓      | 35654.2    | 27.57        | 12.82         |
| restify                  | 11.1.0   | ✓      | 34848.4    | 28.20        | 6.28          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34642.8    | 28.35        | 6.18          |
| koa-router               | 13.1.0   | ✓      | 33285.2    | 29.54        | 5.94          |
| hapi                     | 21.3.12  | ✓      | 31995.0    | 30.74        | 5.71          |
| microrouter              | 3.1.3    | ✓      | 30842.8    | 31.92        | 5.50          |
| fastify-big-json         | 5.2.0    | ✓      | 11976.2    | 82.95        | 137.79        |
| express                  | 5.0.1    | ✓      | 10208.0    | 97.39        | 1.82          |
| express-with-middlewares | 5.0.1    | ✓      | 9208.9     | 107.98       | 3.42          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
