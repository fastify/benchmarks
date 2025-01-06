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
* __Run:__ Mon Jan 06 2025 01:52:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 47397.6    | 20.59        | 8.45          |
| fastify                  | 5.2.0    | ✓      | 46913.6    | 20.82        | 8.41          |
| rayo                     | 1.4.6    | ✓      | 45776.0    | 21.34        | 8.16          |
| polka                    | 0.5.2    | ✓      | 45503.2    | 21.46        | 8.11          |
| server-base-router       | 7.1.32   | ✓      | 45435.2    | 21.49        | 8.10          |
| server-base              | 7.1.32   | ✗      | 45228.8    | 21.61        | 8.06          |
| connect                  | 3.7.0    | ✗      | 44484.0    | 22.00        | 7.93          |
| micro                    | 10.0.1   | ✗      | 43910.4    | 22.27        | 7.83          |
| polkadot                 | 1.0.0    | ✗      | 43876.0    | 22.30        | 7.82          |
| connect-router           | 1.3.8    | ✓      | 42790.4    | 22.87        | 7.63          |
| 0http                    | 3.5.3    | ✓      | 42768.8    | 22.88        | 7.63          |
| micro-route              | 2.5.0    | ✓      | 41304.0    | 23.73        | 7.37          |
| adonisjs                 | 7.4.0    | ✓      | 40662.4    | 24.09        | 7.25          |
| h3-router                | 1.13.0   | ✓      | 40476.8    | 24.20        | 7.22          |
| h3                       | 1.13.0   | ✗      | 40375.2    | 24.26        | 7.20          |
| hono                     | 4.6.16   | ✓      | 39924.0    | 24.53        | 6.55          |
| restana                  | 4.9.9    | ✓      | 37569.6    | 26.12        | 6.70          |
| koa                      | 2.15.3   | ✗      | 37087.8    | 26.47        | 6.61          |
| take-five                | 2.0.0    | ✓      | 35186.2    | 27.92        | 12.65         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35082.2    | 28.01        | 6.26          |
| restify                  | 11.1.0   | ✓      | 34533.6    | 28.45        | 6.22          |
| koa-router               | 13.1.0   | ✓      | 33019.2    | 29.77        | 5.89          |
| hapi                     | 21.3.12  | ✓      | 32161.4    | 30.60        | 5.74          |
| microrouter              | 3.1.3    | ✓      | 29710.0    | 33.15        | 5.30          |
| fastify-big-json         | 5.2.0    | ✓      | 11551.4    | 86.00        | 132.90        |
| express                  | 5.0.1    | ✓      | 9992.2     | 99.48        | 1.78          |
| express-with-middlewares | 5.0.1    | ✓      | 9399.4     | 105.80       | 3.50          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
