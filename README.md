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
* __Run:__ Mon Jan 27 2025 01:49:06 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.2.1    | ✓      | 46908.0    | 20.82        | 8.41          |
| bare                     | v20.18.1 | ✗      | 46878.4    | 20.83        | 8.36          |
| polkadot                 | 1.0.0    | ✗      | 46420.0    | 21.05        | 8.28          |
| polka                    | 0.5.2    | ✓      | 46360.0    | 21.06        | 8.27          |
| connect                  | 3.7.0    | ✗      | 45918.4    | 21.25        | 8.19          |
| rayo                     | 1.4.6    | ✓      | 45832.8    | 21.30        | 8.17          |
| 0http                    | 4.1.0    | ✓      | 45500.8    | 21.48        | 8.11          |
| server-base              | 7.1.32   | ✗      | 45240.0    | 21.60        | 8.07          |
| server-base-router       | 7.1.32   | ✓      | 44954.4    | 21.78        | 8.02          |
| micro                    | 10.0.1   | ✗      | 43986.4    | 22.24        | 7.84          |
| h3-router                | 1.14.0   | ✓      | 43740.8    | 22.37        | 7.80          |
| h3                       | 1.14.0   | ✗      | 43380.8    | 22.55        | 7.74          |
| connect-router           | 1.3.8    | ✓      | 42936.8    | 22.77        | 7.66          |
| micro-route              | 2.5.0    | ✓      | 42004.0    | 23.34        | 7.49          |
| adonisjs                 | 7.4.0    | ✓      | 41248.8    | 23.74        | 7.36          |
| hono                     | 4.6.19   | ✓      | 39801.6    | 24.61        | 6.53          |
| restana                  | v5.0.0   | ✓      | 38883.2    | 25.22        | 6.93          |
| koa                      | 2.15.3   | ✗      | 37446.2    | 26.21        | 6.68          |
| take-five                | 2.0.0    | ✓      | 35348.2    | 27.78        | 12.71         |
| restify                  | 11.1.0   | ✓      | 35285.0    | 27.85        | 6.36          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35241.0    | 27.88        | 6.29          |
| koa-router               | 13.1.0   | ✓      | 34229.2    | 28.70        | 6.10          |
| hapi                     | 21.3.12  | ✓      | 31749.8    | 30.99        | 5.66          |
| microrouter              | 3.1.3    | ✓      | 31022.8    | 31.73        | 5.53          |
| fastify-big-json         | 5.2.1    | ✓      | 11927.2    | 83.28        | 137.24        |
| express                  | 5.0.1    | ✓      | 10662.8    | 93.23        | 1.90          |
| express-with-middlewares | 5.0.1    | ✓      | 9332.8     | 106.56       | 3.47          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
