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
* __Run:__ Mon Dec 16 2024 01:58:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.2.0    | ✓      | 46354.4    | 21.08        | 8.31          |
| bare                     | v20.18.1 | ✗      | 46121.6    | 21.18        | 8.22          |
| polka                    | 0.5.2    | ✓      | 45559.2    | 21.45        | 8.12          |
| polkadot                 | 1.0.0    | ✗      | 45456.8    | 21.50        | 8.11          |
| 0http                    | 3.5.3    | ✓      | 45412.8    | 21.52        | 8.10          |
| rayo                     | 1.4.6    | ✓      | 45240.8    | 21.63        | 8.07          |
| connect                  | 3.7.0    | ✗      | 44987.2    | 21.74        | 8.02          |
| server-base              | 7.1.32   | ✗      | 44852.0    | 21.80        | 8.00          |
| micro                    | 10.0.1   | ✗      | 44596.0    | 21.91        | 7.95          |
| server-base-router       | 7.1.32   | ✓      | 44365.6    | 22.06        | 7.91          |
| connect-router           | 1.3.8    | ✓      | 42956.0    | 22.78        | 7.66          |
| micro-route              | 2.5.0    | ✓      | 41736.0    | 23.48        | 7.44          |
| h3                       | 1.13.0   | ✗      | 41231.2    | 23.75        | 7.35          |
| h3-router                | 1.13.0   | ✓      | 41207.2    | 23.77        | 7.35          |
| adonisjs                 | 7.4.0    | ✓      | 40487.2    | 24.19        | 7.22          |
| hono                     | 4.6.14   | ✓      | 39647.2    | 24.72        | 6.50          |
| restana                  | 4.9.9    | ✓      | 39209.0    | 25.01        | 6.99          |
| koa                      | 2.15.3   | ✗      | 36060.6    | 27.22        | 6.43          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34443.0    | 28.53        | 6.14          |
| restify                  | 11.1.0   | ✓      | 34152.6    | 28.78        | 6.16          |
| take-five                | 2.0.0    | ✓      | 33881.0    | 29.02        | 12.18         |
| koa-router               | 13.1.0   | ✓      | 32934.0    | 29.84        | 5.87          |
| hapi                     | 21.3.12  | ✓      | 31408.4    | 31.34        | 5.60          |
| microrouter              | 3.1.3    | ✓      | 30370.0    | 32.41        | 5.42          |
| fastify-big-json         | 5.2.0    | ✓      | 11814.6    | 84.08        | 135.93        |
| express                  | 5.0.1    | ✓      | 10112.6    | 98.29        | 1.80          |
| express-with-middlewares | 5.0.1    | ✓      | 9195.8     | 108.13       | 3.42          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
