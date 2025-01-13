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
* __Run:__ Mon Jan 13 2025 01:53:18 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 47420.0    | 20.58        | 8.46          |
| 0http                    | 4.0.0    | ✓      | 46117.6    | 21.19        | 8.22          |
| fastify                  | 5.2.1    | ✓      | 45984.8    | 21.23        | 8.24          |
| server-base              | 7.1.32   | ✗      | 45684.8    | 21.41        | 8.15          |
| connect                  | 3.7.0    | ✗      | 45491.2    | 21.50        | 8.11          |
| polka                    | 0.5.2    | ✓      | 45457.6    | 21.51        | 8.11          |
| rayo                     | 1.4.6    | ✓      | 45204.0    | 21.64        | 8.06          |
| server-base-router       | 7.1.32   | ✓      | 44508.0    | 21.99        | 7.94          |
| polkadot                 | 1.0.0    | ✗      | 44252.0    | 22.10        | 7.89          |
| h3                       | 1.13.1   | ✗      | 44087.2    | 22.19        | 7.86          |
| micro                    | 10.0.1   | ✗      | 43727.2    | 22.37        | 7.80          |
| h3-router                | 1.13.1   | ✓      | 43564.8    | 22.46        | 7.77          |
| connect-router           | 1.3.8    | ✓      | 43352.0    | 22.55        | 7.73          |
| micro-route              | 2.5.0    | ✓      | 41799.2    | 23.45        | 7.45          |
| adonisjs                 | 7.4.0    | ✓      | 41797.6    | 23.42        | 7.45          |
| restana                  | v5.0.0   | ✓      | 40408.8    | 24.25        | 7.21          |
| hono                     | 4.6.16   | ✓      | 39505.6    | 24.81        | 6.48          |
| koa                      | 2.15.3   | ✗      | 36888.0    | 26.61        | 6.58          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35157.0    | 27.94        | 6.27          |
| take-five                | 2.0.0    | ✓      | 34837.4    | 28.20        | 12.53         |
| restify                  | 11.1.0   | ✓      | 34787.0    | 28.24        | 6.27          |
| koa-router               | 13.1.0   | ✓      | 33293.4    | 29.53        | 5.94          |
| hapi                     | 21.3.12  | ✓      | 32362.8    | 30.40        | 5.77          |
| microrouter              | 3.1.3    | ✓      | 29162.0    | 33.78        | 5.20          |
| fastify-big-json         | 5.2.1    | ✓      | 11812.0    | 84.10        | 135.90        |
| express                  | 5.0.1    | ✓      | 10425.0    | 95.31        | 1.86          |
| express-with-middlewares | 5.0.1    | ✓      | 9021.9     | 110.23       | 3.36          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
