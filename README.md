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
* __Run:__ Mon Apr 07 2025 01:57:21 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.0 | ✗      | 46856.0    | 20.82        | 8.36          |
| fastify                  | 5.2.2    | ✓      | 46211.2    | 21.12        | 8.29          |
| polkadot                 | 1.0.0    | ✗      | 45945.6    | 21.27        | 8.19          |
| polka                    | 0.5.2    | ✓      | 45696.0    | 21.39        | 8.15          |
| connect                  | 3.7.0    | ✗      | 45545.6    | 21.47        | 8.12          |
| rayo                     | 1.4.6    | ✓      | 45505.6    | 21.48        | 8.11          |
| server-base              | 7.1.32   | ✗      | 45286.4    | 21.60        | 8.08          |
| h3                       | 1.15.1   | ✗      | 44772.8    | 21.84        | 7.98          |
| h3-router                | 1.15.1   | ✓      | 44515.2    | 21.96        | 7.94          |
| micro                    | 10.0.1   | ✗      | 44504.8    | 21.97        | 7.94          |
| 0http                    | 4.2.0    | ✓      | 44310.4    | 22.07        | 7.90          |
| server-base-router       | 7.1.32   | ✓      | 44095.2    | 22.17        | 7.86          |
| connect-router           | 1.3.8    | ✓      | 43032.8    | 22.74        | 7.67          |
| adonisjs                 | 7.6.0    | ✓      | 42002.4    | 23.31        | 7.49          |
| micro-route              | 2.5.0    | ✓      | 41662.4    | 23.49        | 7.43          |
| restana                  | v5.0.0   | ✓      | 40777.6    | 24.02        | 7.27          |
| hono                     | 4.7.5    | ✓      | 38655.2    | 25.37        | 6.34          |
| koa                      | 2.16.1   | ✗      | 37571.2    | 26.11        | 6.70          |
| restify                  | 11.1.0   | ✓      | 35519.4    | 27.66        | 6.40          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34445.0    | 28.54        | 6.14          |
| take-five                | 2.0.0    | ✓      | 34100.2    | 28.82        | 12.26         |
| koa-router               | 13.1.0   | ✓      | 33143.6    | 29.67        | 5.91          |
| hapi                     | 21.4.0   | ✓      | 31718.2    | 31.02        | 5.66          |
| microrouter              | 3.1.3    | ✓      | 30056.0    | 32.76        | 5.36          |
| fastify-big-json         | 5.2.2    | ✓      | 11798.0    | 84.19        | 135.76        |
| express                  | 5.1.0    | ✓      | 10157.8    | 97.85        | 1.81          |
| express-with-middlewares | 5.1.0    | ✓      | 9104.0     | 109.21       | 3.39          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
