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
* __Run:__ Mon Feb 24 2025 01:51:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.2 | ✗      | 48240.6    | 20.24        | 8.60          |
| fastify                  | 5.2.1    | ✓      | 47872.8    | 20.41        | 8.58          |
| connect                  | 3.7.0    | ✗      | 47527.2    | 20.53        | 8.48          |
| polka                    | 0.5.2    | ✓      | 47433.6    | 20.58        | 8.46          |
| polkadot                 | 1.0.0    | ✗      | 47260.0    | 20.66        | 8.43          |
| 0http                    | 4.1.0    | ✓      | 47178.4    | 20.71        | 8.41          |
| rayo                     | 1.4.6    | ✓      | 47109.6    | 20.71        | 8.40          |
| server-base              | 7.1.32   | ✗      | 46316.8    | 21.07        | 8.26          |
| micro                    | 10.0.1   | ✗      | 46195.2    | 21.14        | 8.24          |
| server-base-router       | 7.1.32   | ✓      | 46037.6    | 21.21        | 8.21          |
| h3                       | 1.15.1   | ✗      | 45453.6    | 21.51        | 8.11          |
| connect-router           | 1.3.8    | ✓      | 44089.6    | 22.18        | 7.86          |
| h3-router                | 1.15.1   | ✓      | 43792.8    | 22.34        | 7.81          |
| micro-route              | 2.5.0    | ✓      | 43555.2    | 22.43        | 7.77          |
| adonisjs                 | 7.4.0    | ✓      | 42531.2    | 23.02        | 7.59          |
| restana                  | v5.0.0   | ✓      | 42096.8    | 23.25        | 7.51          |
| hono                     | 4.7.2    | ✓      | 41246.4    | 23.76        | 6.77          |
| koa                      | 2.15.4   | ✗      | 37869.6    | 25.92        | 6.75          |
| restify                  | 11.1.0   | ✓      | 36007.0    | 27.27        | 6.49          |
| take-five                | 2.0.0    | ✓      | 35995.8    | 27.27        | 12.94         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35243.2    | 27.89        | 6.28          |
| koa-router               | 13.1.0   | ✓      | 34245.4    | 28.70        | 6.11          |
| hapi                     | 21.3.12  | ✓      | 32019.4    | 30.73        | 5.71          |
| microrouter              | 3.1.3    | ✓      | 30699.2    | 32.06        | 5.47          |
| fastify-big-json         | 5.2.1    | ✓      | 12081.4    | 82.20        | 139.00        |
| express                  | 5.0.1    | ✓      | 10380.2    | 95.71        | 1.85          |
| express-with-middlewares | 5.0.1    | ✓      | 9261.4     | 107.36       | 3.44          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
