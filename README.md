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
* __Run:__ Mon Apr 14 2025 01:58:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.0 | ✗      | 47780.8    | 20.43        | 8.52          |
| fastify                  | 5.3.0    | ✓      | 46505.6    | 21.00        | 8.34          |
| polka                    | 0.5.2    | ✓      | 46404.0    | 21.04        | 8.28          |
| connect                  | 3.7.0    | ✗      | 46001.6    | 21.21        | 8.20          |
| rayo                     | 1.4.6    | ✓      | 45927.2    | 21.27        | 8.19          |
| 0http                    | 4.2.0    | ✓      | 44676.8    | 21.88        | 7.97          |
| server-base              | 7.1.32   | ✗      | 44648.8    | 21.90        | 7.96          |
| polkadot                 | 1.0.0    | ✗      | 44614.4    | 21.92        | 7.96          |
| micro                    | 10.0.1   | ✗      | 44461.6    | 21.99        | 7.93          |
| server-base-router       | 7.1.32   | ✓      | 43717.6    | 22.37        | 7.80          |
| connect-router           | 1.3.8    | ✓      | 43512.0    | 22.48        | 7.76          |
| micro-route              | 2.5.0    | ✓      | 42333.6    | 23.14        | 7.55          |
| h3                       | 1.15.1   | ✗      | 41853.6    | 23.40        | 7.46          |
| adonisjs                 | 7.6.0    | ✓      | 41499.2    | 23.60        | 7.40          |
| h3-router                | 1.15.1   | ✓      | 40995.2    | 23.89        | 7.31          |
| hono                     | 4.7.6    | ✓      | 39450.4    | 24.87        | 6.47          |
| restana                  | v5.0.0   | ✓      | 39314.4    | 24.94        | 7.01          |
| koa                      | 2.16.1   | ✗      | 35940.6    | 27.33        | 6.41          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34909.4    | 28.15        | 6.23          |
| take-five                | 2.0.0    | ✓      | 34513.4    | 28.47        | 12.41         |
| restify                  | 11.1.0   | ✓      | 34416.0    | 28.55        | 6.20          |
| koa-router               | 13.1.0   | ✓      | 32862.8    | 29.93        | 5.86          |
| hapi                     | 21.4.0   | ✓      | 31512.8    | 31.23        | 5.62          |
| microrouter              | 3.1.3    | ✓      | 29922.0    | 32.91        | 5.34          |
| fastify-big-json         | 5.3.0    | ✓      | 11752.2    | 84.51        | 135.21        |
| express                  | 5.1.0    | ✓      | 9918.8     | 100.21       | 1.77          |
| express-with-middlewares | 5.1.0    | ✓      | 8968.5     | 110.88       | 3.34          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
