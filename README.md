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
* __Run:__ Wed Jan 15 2025 16:50:41 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.2.1    | ✓      | 47268.8    | 20.64        | 8.48          |
| server-base-router       | 7.1.32   | ✓      | 47252.8    | 20.64        | 8.43          |
| bare                     | v20.18.1 | ✗      | 46932.2    | 20.79        | 8.37          |
| polkadot                 | 1.0.0    | ✗      | 46308.8    | 21.10        | 8.26          |
| polka                    | 0.5.2    | ✓      | 46115.2    | 21.16        | 8.22          |
| connect                  | 3.7.0    | ✗      | 45987.2    | 21.21        | 8.20          |
| server-base              | 7.1.32   | ✗      | 45523.2    | 21.50        | 8.12          |
| rayo                     | 1.4.6    | ✓      | 45191.2    | 21.64        | 8.06          |
| micro                    | 10.0.1   | ✗      | 44994.4    | 21.72        | 8.02          |
| 0http                    | 4.0.0    | ✓      | 44758.4    | 21.85        | 7.98          |
| h3                       | 1.13.1   | ✗      | 43832.0    | 22.32        | 7.82          |
| connect-router           | 1.3.8    | ✓      | 43333.6    | 22.57        | 7.73          |
| h3-router                | 1.13.1   | ✓      | 42594.4    | 22.97        | 7.60          |
| micro-route              | 2.5.0    | ✓      | 42280.8    | 23.14        | 7.54          |
| adonisjs                 | 7.4.0    | ✓      | 41235.2    | 23.76        | 7.35          |
| hono                     | 4.6.16   | ✓      | 40091.2    | 24.44        | 6.58          |
| restana                  | v5.0.0   | ✓      | 39220.8    | 24.99        | 6.99          |
| koa                      | 2.15.3   | ✗      | 37772.0    | 25.96        | 6.74          |
| restify                  | 11.1.0   | ✓      | 35217.4    | 27.89        | 6.35          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35061.8    | 28.03        | 6.25          |
| take-five                | 2.0.0    | ✓      | 34719.0    | 28.29        | 12.48         |
| koa-router               | 13.1.0   | ✓      | 33469.4    | 29.38        | 5.97          |
| hapi                     | 21.3.12  | ✓      | 31796.2    | 30.95        | 5.67          |
| microrouter              | 3.1.3    | ✓      | 30434.0    | 32.35        | 5.43          |
| fastify-big-json         | 5.2.1    | ✓      | 11709.4    | 84.82        | 134.72        |
| express                  | 5.0.1    | ✓      | 10493.8    | 94.71        | 1.87          |
| express-with-middlewares | 5.0.1    | ✓      | 9432.6     | 105.41       | 3.51          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
