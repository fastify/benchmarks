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
* __Run:__ Mon Mar 31 2025 15:14:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.2.2    | ✓      | 46172.8    | 21.16        | 8.28          |
| connect                  | 3.7.0    | ✗      | 45617.6    | 21.42        | 8.13          |
| rayo                     | 1.4.6    | ✓      | 45304.0    | 21.58        | 8.08          |
| bare                     | v20.19.0 | ✗      | 45265.0    | 21.59        | 8.07          |
| server-base              | 7.1.32   | ✗      | 44925.6    | 21.77        | 8.01          |
| polka                    | 0.5.2    | ✓      | 44879.2    | 21.79        | 8.00          |
| server-base-router       | 7.1.32   | ✓      | 43934.4    | 22.26        | 7.83          |
| micro                    | 10.0.1   | ✗      | 43610.4    | 22.43        | 7.78          |
| 0http                    | 4.2.0    | ✓      | 43382.4    | 22.56        | 7.74          |
| h3-router                | 1.15.1   | ✓      | 42983.2    | 22.77        | 7.67          |
| h3                       | 1.15.1   | ✗      | 42963.2    | 22.77        | 7.66          |
| connect-router           | 1.3.8    | ✓      | 42772.0    | 22.87        | 7.63          |
| polkadot                 | 1.0.0    | ✗      | 42484.0    | 23.03        | 7.58          |
| adonisjs                 | 7.6.0    | ✓      | 40604.0    | 24.12        | 7.24          |
| hono                     | 4.7.5    | ✓      | 39984.0    | 24.50        | 6.56          |
| micro-route              | 2.5.0    | ✓      | 39812.0    | 24.61        | 7.10          |
| restana                  | v5.0.0   | ✓      | 39392.8    | 24.88        | 7.03          |
| koa                      | 2.16.0   | ✗      | 36569.6    | 26.84        | 6.52          |
| restify                  | 11.1.0   | ✓      | 34999.8    | 28.07        | 6.31          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34067.4    | 28.85        | 6.08          |
| take-five                | 2.0.0    | ✓      | 33547.6    | 29.30        | 12.06         |
| koa-router               | 13.1.0   | ✓      | 31866.8    | 30.88        | 5.68          |
| hapi                     | 21.4.0   | ✓      | 31130.0    | 31.62        | 5.55          |
| microrouter              | 3.1.3    | ✓      | 29487.6    | 33.41        | 5.26          |
| fastify-big-json         | 5.2.2    | ✓      | 11658.8    | 85.22        | 134.14        |
| express                  | 5.1.0    | ✓      | 10082.8    | 98.58        | 1.80          |
| express-with-middlewares | 5.1.0    | ✓      | 9132.1     | 108.89       | 3.40          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
