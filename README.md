<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg"
      width="650"
      height="auto"
    />
  </a>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/actions/workflows/ci.yml/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
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
* __Node:__ `v20.18.0`
* __Run:__ Mon Nov 25 2024 01:54:14 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.0 | ✗      | 48153.6    | 20.32        | 8.59          |
| connect                  | 3.7.0    | ✗      | 47204.8    | 20.67        | 8.42          |
| fastify                  | 5.1.0    | ✓      | 47047.2    | 20.75        | 8.43          |
| polka                    | 0.5.2    | ✓      | 46537.6    | 20.98        | 8.30          |
| server-base-router       | 7.1.32   | ✓      | 46131.2    | 21.17        | 8.23          |
| micro                    | 10.0.1   | ✗      | 46100.8    | 21.19        | 8.22          |
| rayo                     | 1.4.6    | ✓      | 45265.6    | 21.59        | 8.07          |
| server-base              | 7.1.32   | ✗      | 44880.0    | 21.78        | 8.00          |
| polkadot                 | 1.0.0    | ✗      | 44768.8    | 21.85        | 7.98          |
| 0http                    | 3.5.3    | ✓      | 44004.8    | 22.23        | 7.85          |
| connect-router           | 1.3.8    | ✓      | 43320.8    | 22.58        | 7.73          |
| micro-route              | 2.5.0    | ✓      | 42980.8    | 22.77        | 7.66          |
| adonisjs                 | 7.2.5    | ✓      | 42116.0    | 23.24        | 7.51          |
| h3-router                | 1.13.0   | ✓      | 41784.0    | 23.43        | 7.45          |
| h3                       | 1.13.0   | ✗      | 41556.8    | 23.57        | 7.41          |
| hono                     | 4.6.11   | ✓      | 40621.6    | 24.10        | 7.24          |
| restana                  | 4.9.9    | ✓      | 39132.0    | 25.06        | 6.98          |
| koa                      | 2.15.3   | ✗      | 37344.8    | 26.28        | 6.66          |
| take-five                | 2.0.0    | ✓      | 35909.4    | 27.32        | 12.91         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35736.6    | 27.49        | 6.37          |
| restify                  | 11.1.0   | ✓      | 34616.0    | 28.38        | 6.24          |
| koa-router               | 13.1.0   | ✓      | 34131.0    | 28.77        | 6.09          |
| hapi                     | 21.3.12  | ✓      | 31763.2    | 30.98        | 5.66          |
| microrouter              | 3.1.3    | ✓      | 30180.4    | 32.62        | 5.38          |
| fastify-big-json         | 5.1.0    | ✓      | 12102.0    | 82.06        | 139.24        |
| express                  | 5.0.1    | ✓      | 10175.2    | 97.69        | 1.81          |
| express-with-middlewares | 5.0.1    | ✓      | 9319.4     | 106.72       | 3.47          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
