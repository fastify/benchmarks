<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg"
      width="650"
      height="auto"
    />
  </a>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Package Manager
CI](https://github.com/fastify/fastify/workflows/package-manager-ci/badge.svg?branch=master)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web
SIte](https://github.com/fastify/fastify/workflows/website/badge.svg?branch=master)](https://github.com/fastify/fastify/actions/workflows/website.yml)
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
* This package shows how fast it is comparatively.
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
* __Run:__ Mon Dec 02 2024 01:56:45 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 47789.6    | 20.43        | 8.52          |
| fastify                  | 5.1.0    | ✓      | 46716.0    | 20.90        | 8.38          |
| rayo                     | 1.4.6    | ✓      | 46516.0    | 20.99        | 8.30          |
| server-base-router       | 7.1.32   | ✓      | 46280.0    | 21.11        | 8.25          |
| polka                    | 0.5.2    | ✓      | 46239.2    | 21.11        | 8.25          |
| connect                  | 3.7.0    | ✗      | 46157.6    | 21.15        | 8.23          |
| server-base              | 7.1.32   | ✗      | 45875.2    | 21.29        | 8.18          |
| micro                    | 10.0.1   | ✗      | 45723.2    | 21.37        | 8.15          |
| polkadot                 | 1.0.0    | ✗      | 45646.4    | 21.41        | 8.14          |
| 0http                    | 3.5.3    | ✓      | 44406.4    | 22.02        | 7.92          |
| connect-router           | 1.3.8    | ✓      | 43641.6    | 22.40        | 7.78          |
| adonisjs                 | 7.3.0    | ✓      | 42114.4    | 23.24        | 7.51          |
| h3                       | 1.13.0   | ✗      | 41976.8    | 23.33        | 7.49          |
| micro-route              | 2.5.0    | ✓      | 41761.6    | 23.45        | 7.45          |
| h3-router                | 1.13.0   | ✓      | 41257.6    | 23.74        | 7.36          |
| hono                     | 4.6.12   | ✓      | 40446.4    | 24.21        | 7.21          |
| restana                  | 4.9.9    | ✓      | 39980.0    | 24.52        | 7.13          |
| koa                      | 2.15.3   | ✗      | 37270.6    | 26.32        | 6.65          |
| restify                  | 11.1.0   | ✓      | 35218.0    | 27.89        | 6.35          |
| take-five                | 2.0.0    | ✓      | 34769.0    | 28.26        | 12.50         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34505.8    | 28.48        | 6.15          |
| koa-router               | 13.1.0   | ✓      | 34079.8    | 28.85        | 6.08          |
| hapi                     | 21.3.12  | ✓      | 31563.8    | 31.18        | 5.63          |
| microrouter              | 3.1.3    | ✓      | 30534.0    | 32.25        | 5.45          |
| fastify-big-json         | 5.1.0    | ✓      | 12139.0    | 81.81        | 139.66        |
| express                  | 5.0.1    | ✓      | 10164.0    | 97.79        | 1.81          |
| express-with-middlewares | 5.0.1    | ✓      | 9172.0     | 108.42       | 3.41          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
