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
* __Node:__ `v20.19.5`
* __Run:__ Sat Sep 13 2025 15:44:28 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.5 | ✗      | 47156.8    | 20.70        | 8.41          |
| fastify                  | 5.6.0    | ✓      | 46312.0    | 21.09        | 8.30          |
| connect                  | 3.7.0    | ✗      | 46080.8    | 21.19        | 8.22          |
| 0http                    | 4.3.0    | ✓      | 45536.8    | 21.47        | 8.12          |
| polka                    | 0.5.2    | ✓      | 45312.8    | 21.57        | 8.08          |
| micro                    | 10.0.1   | ✗      | 44480.0    | 21.98        | 7.93          |
| h3                       | 1.15.4   | ✗      | 43422.4    | 22.53        | 7.74          |
| h3-router                | 1.15.4   | ✓      | 42890.4    | 22.82        | 7.65          |
| restana                  | v5.1.0   | ✓      | 42547.2    | 23.00        | 7.59          |
| connect-router           | 2.2.0    | ✓      | 42209.6    | 23.19        | 7.53          |
| adonisjs                 | 7.7.0    | ✓      | 41406.4    | 23.65        | 7.38          |
| srvx                     | 0.8.7    | ✗      | 39776.0    | 24.64        | 7.74          |
| whatwg-node-server       | 0.10.12  | ✗      | 38601.6    | 25.40        | 6.88          |
| hono                     | 4.9.7    | ✓      | 37251.2    | 26.35        | 6.11          |
| restify                  | 11.1.0   | ✓      | 34096.2    | 28.82        | 6.15          |
| koa                      | 3.0.1    | ✗      | 33717.6    | 29.16        | 6.01          |
| koa-router               | 14.0.0   | ✓      | 31765.4    | 30.98        | 5.66          |
| hapi                     | 21.4.3   | ✓      | 31250.8    | 31.49        | 5.57          |
| microrouter              | 3.1.3    | ✓      | 29735.2    | 33.11        | 5.30          |
| fastify-big-json         | 5.6.0    | ✓      | 11910.0    | 83.39        | 137.04        |
| express                  | 5.1.0    | ✓      | 9995.1     | 99.45        | 1.78          |
| express-with-middlewares | 5.1.0    | ✓      | 8899.5     | 111.75       | 3.31          |
| trpc-router              | 11.5.1   | ✓      | 6252.0     | 159.15       | 1.38          |
