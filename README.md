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
* __Node:__ `v20.19.0`
* __Run:__ Mon Mar 24 2025 01:56:05 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.0 | ✗      | 47893.6    | 20.39        | 8.54          |
| 0http                    | 4.2.0    | ✓      | 46811.2    | 20.87        | 8.35          |
| fastify                  | 5.2.1    | ✓      | 46303.2    | 21.09        | 8.30          |
| connect                  | 3.7.0    | ✗      | 45891.2    | 21.28        | 8.18          |
| polka                    | 0.5.2    | ✓      | 45428.8    | 21.52        | 8.10          |
| server-base-router       | 7.1.32   | ✓      | 45293.6    | 21.57        | 8.08          |
| server-base              | 7.1.32   | ✗      | 44983.2    | 21.74        | 8.02          |
| rayo                     | 1.4.6    | ✓      | 44164.0    | 22.15        | 7.88          |
| micro                    | 10.0.1   | ✗      | 43633.6    | 22.42        | 7.78          |
| polkadot                 | 1.0.0    | ✗      | 43386.4    | 22.56        | 7.74          |
| connect-router           | 1.3.8    | ✓      | 43320.8    | 22.58        | 7.73          |
| h3                       | 1.15.1   | ✗      | 42842.4    | 22.84        | 7.64          |
| micro-route              | 2.5.0    | ✓      | 42415.2    | 23.07        | 7.56          |
| adonisjs                 | 7.5.0    | ✓      | 42053.6    | 23.28        | 7.50          |
| hono                     | 4.7.5    | ✓      | 40933.6    | 23.91        | 6.71          |
| h3-router                | 1.15.1   | ✓      | 40916.0    | 23.94        | 7.30          |
| restana                  | v5.0.0   | ✓      | 37392.6    | 26.24        | 6.67          |
| koa                      | 2.16.0   | ✗      | 36922.6    | 26.59        | 6.58          |
| take-five                | 2.0.0    | ✓      | 35735.0    | 27.47        | 12.85         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34601.6    | 28.39        | 6.17          |
| restify                  | 11.1.0   | ✓      | 33977.4    | 28.93        | 6.12          |
| koa-router               | 13.1.0   | ✓      | 33313.2    | 29.51        | 5.94          |
| hapi                     | 21.4.0   | ✓      | 32294.2    | 30.46        | 5.76          |
| microrouter              | 3.1.3    | ✓      | 29519.6    | 33.37        | 5.26          |
| fastify-big-json         | 5.2.1    | ✓      | 11884.0    | 83.60        | 136.74        |
| express                  | 5.0.1    | ✓      | 10156.6    | 97.85        | 1.81          |
| express-with-middlewares | 5.0.1    | ✓      | 9077.6     | 109.53       | 3.38          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
