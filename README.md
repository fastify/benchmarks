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
* __Run:__ Wed Dec 11 2024 16:09:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 47389.4    | 20.63        | 8.45          |
| fastify                  | 5.1.0    | ✓      | 47038.4    | 20.74        | 8.43          |
| connect                  | 3.7.0    | ✗      | 46404.8    | 21.05        | 8.28          |
| polkadot                 | 1.0.0    | ✗      | 46385.6    | 21.07        | 8.27          |
| rayo                     | 1.4.6    | ✓      | 46089.6    | 21.18        | 8.22          |
| polka                    | 0.5.2    | ✓      | 45636.8    | 21.40        | 8.14          |
| server-base              | 7.1.32   | ✗      | 45285.6    | 21.59        | 8.08          |
| 0http                    | 3.5.3    | ✓      | 45222.4    | 21.62        | 8.07          |
| server-base-router       | 7.1.32   | ✓      | 45137.6    | 21.67        | 8.05          |
| micro                    | 10.0.1   | ✗      | 45068.8    | 21.69        | 8.04          |
| connect-router           | 1.3.8    | ✓      | 43100.0    | 22.70        | 7.69          |
| h3                       | 1.13.0   | ✗      | 42316.8    | 23.13        | 7.55          |
| micro-route              | 2.5.0    | ✓      | 42111.2    | 23.24        | 7.51          |
| adonisjs                 | 7.3.0    | ✓      | 41692.8    | 23.49        | 7.44          |
| h3-router                | 1.13.0   | ✓      | 41596.0    | 23.54        | 7.42          |
| hono                     | 4.6.13   | ✓      | 40294.4    | 24.31        | 7.19          |
| restana                  | 4.9.9    | ✓      | 39824.0    | 24.61        | 7.10          |
| koa                      | 2.15.3   | ✗      | 37027.0    | 26.51        | 6.60          |
| take-five                | 2.0.0    | ✓      | 35362.6    | 27.78        | 12.71         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35235.4    | 27.87        | 6.28          |
| restify                  | 11.1.0   | ✓      | 34730.2    | 28.29        | 6.26          |
| koa-router               | 13.1.0   | ✓      | 34135.4    | 28.79        | 6.09          |
| hapi                     | 21.3.12  | ✓      | 32465.4    | 30.28        | 5.79          |
| microrouter              | 3.1.3    | ✓      | 30832.4    | 31.93        | 5.50          |
| fastify-big-json         | 5.1.0    | ✓      | 12025.0    | 82.59        | 138.35        |
| express                  | 5.0.1    | ✓      | 9998.6     | 99.43        | 1.78          |
| express-with-middlewares | 5.0.1    | ✓      | 9357.1     | 106.24       | 3.48          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
