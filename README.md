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
* __Node:__ `v20.18.2`
* __Run:__ Mon Feb 17 2025 01:51:40 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.2.1    | ✓      | 47432.0    | 20.58        | 8.50          |
| bare                     | v20.18.2 | ✗      | 46564.2    | 20.97        | 8.30          |
| connect                  | 3.7.0    | ✗      | 46090.4    | 21.19        | 8.22          |
| server-base-router       | 7.1.32   | ✓      | 45756.0    | 21.35        | 8.16          |
| polkadot                 | 1.0.0    | ✗      | 45740.0    | 21.36        | 8.16          |
| rayo                     | 1.4.6    | ✓      | 45321.6    | 21.56        | 8.08          |
| polka                    | 0.5.2    | ✓      | 45173.6    | 21.63        | 8.06          |
| server-base              | 7.1.32   | ✗      | 45090.4    | 21.67        | 8.04          |
| micro                    | 10.0.1   | ✗      | 44446.4    | 21.99        | 7.93          |
| 0http                    | 4.1.0    | ✓      | 43715.2    | 22.38        | 7.80          |
| h3                       | 1.15.0   | ✗      | 43456.8    | 22.52        | 7.75          |
| connect-router           | 1.3.8    | ✓      | 42489.6    | 23.03        | 7.58          |
| micro-route              | 2.5.0    | ✓      | 42152.0    | 23.21        | 7.52          |
| adonisjs                 | 7.4.0    | ✓      | 41676.0    | 23.49        | 7.43          |
| h3-router                | 1.15.0   | ✓      | 41228.0    | 23.75        | 7.35          |
| hono                     | 4.7.1    | ✓      | 40668.8    | 24.09        | 6.67          |
| restana                  | v5.0.0   | ✓      | 38612.8    | 25.40        | 6.89          |
| koa                      | 2.15.4   | ✗      | 36477.4    | 26.91        | 6.51          |
| take-five                | 2.0.0    | ✓      | 34898.2    | 28.15        | 12.55         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34879.2    | 28.17        | 6.22          |
| restify                  | 11.1.0   | ✓      | 34722.2    | 28.29        | 6.26          |
| koa-router               | 13.1.0   | ✓      | 33264.2    | 29.56        | 5.93          |
| hapi                     | 21.3.12  | ✓      | 31434.4    | 31.31        | 5.61          |
| microrouter              | 3.1.3    | ✓      | 29986.8    | 32.84        | 5.35          |
| fastify-big-json         | 5.2.1    | ✓      | 12018.2    | 82.64        | 138.28        |
| express                  | 5.0.1    | ✓      | 10291.6    | 96.58        | 1.84          |
| express-with-middlewares | 5.0.1    | ✓      | 9106.5     | 109.19       | 3.39          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
