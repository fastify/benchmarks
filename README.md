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
* __Run:__ Tue Jan 07 2025 18:17:33 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 47505.6    | 20.56        | 8.47          |
| fastify                  | 5.2.1    | ✓      | 47457.6    | 20.54        | 8.51          |
| connect                  | 3.7.0    | ✗      | 46638.4    | 20.92        | 8.32          |
| server-base              | 7.1.32   | ✗      | 46487.2    | 21.01        | 8.29          |
| polka                    | 0.5.2    | ✓      | 45995.2    | 21.21        | 8.20          |
| 0http                    | 3.5.3    | ✓      | 45887.2    | 21.30        | 8.18          |
| polkadot                 | 1.0.0    | ✗      | 45440.0    | 21.51        | 8.10          |
| micro                    | 10.0.1   | ✗      | 45371.2    | 21.54        | 8.09          |
| server-base-router       | 7.1.32   | ✓      | 45262.4    | 21.59        | 8.07          |
| rayo                     | 1.4.6    | ✓      | 45208.0    | 21.62        | 8.06          |
| connect-router           | 1.3.8    | ✓      | 43345.6    | 22.57        | 7.73          |
| micro-route              | 2.5.0    | ✓      | 42446.4    | 23.04        | 7.57          |
| adonisjs                 | 7.4.0    | ✓      | 42275.2    | 23.14        | 7.54          |
| h3                       | 1.13.0   | ✗      | 42138.4    | 23.23        | 7.52          |
| h3-router                | 1.13.0   | ✓      | 41460.8    | 23.62        | 7.39          |
| hono                     | 4.6.16   | ✓      | 41042.4    | 23.84        | 6.73          |
| koa                      | 2.15.3   | ✗      | 38153.8    | 25.69        | 6.80          |
| restana                  | 4.9.9    | ✓      | 37280.8    | 26.33        | 6.65          |
| take-five                | 2.0.0    | ✓      | 35293.4    | 27.84        | 12.69         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34839.2    | 28.22        | 6.21          |
| restify                  | 11.1.0   | ✓      | 34405.2    | 28.56        | 6.20          |
| koa-router               | 13.1.0   | ✓      | 33732.6    | 29.15        | 6.02          |
| hapi                     | 21.3.12  | ✓      | 32320.6    | 30.43        | 5.76          |
| microrouter              | 3.1.3    | ✓      | 30394.4    | 32.40        | 5.42          |
| fastify-big-json         | 5.2.1    | ✓      | 11910.8    | 83.38        | 137.04        |
| express                  | 5.0.1    | ✓      | 10076.3    | 98.66        | 1.80          |
| express-with-middlewares | 5.0.1    | ✓      | 9419.9     | 105.54       | 3.50          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
