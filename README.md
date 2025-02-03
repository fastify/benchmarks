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
* __Run:__ Mon Feb 03 2025 01:49:03 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.2.1    | ✓      | 47784.0    | 20.43        | 8.57          |
| bare                     | v20.18.2 | ✗      | 47522.6    | 20.56        | 8.48          |
| connect                  | 3.7.0    | ✗      | 47233.6    | 20.66        | 8.42          |
| polka                    | 0.5.2    | ✓      | 47214.4    | 20.67        | 8.42          |
| rayo                     | 1.4.6    | ✓      | 47087.2    | 20.73        | 8.40          |
| 0http                    | 4.1.0    | ✓      | 46759.2    | 20.89        | 8.34          |
| server-base-router       | 7.1.32   | ✓      | 46518.4    | 20.99        | 8.30          |
| server-base              | 7.1.32   | ✗      | 46194.4    | 21.14        | 8.24          |
| micro                    | 10.0.1   | ✗      | 45524.0    | 21.46        | 8.12          |
| polkadot                 | 1.0.0    | ✗      | 45223.2    | 21.61        | 8.06          |
| connect-router           | 1.3.8    | ✓      | 44215.2    | 22.09        | 7.89          |
| h3                       | 1.14.0   | ✗      | 43476.0    | 22.50        | 7.75          |
| micro-route              | 2.5.0    | ✓      | 43460.8    | 22.51        | 7.75          |
| adonisjs                 | 7.4.0    | ✓      | 43143.2    | 22.68        | 7.69          |
| hono                     | 4.6.20   | ✓      | 41789.6    | 23.48        | 6.85          |
| h3-router                | 1.14.0   | ✓      | 41753.6    | 23.45        | 7.45          |
| restana                  | v5.0.0   | ✓      | 39975.2    | 24.51        | 7.13          |
| koa                      | 2.15.3   | ✗      | 37783.2    | 25.95        | 6.74          |
| take-five                | 2.0.0    | ✓      | 36414.6    | 26.94        | 13.09         |
| restify                  | 11.1.0   | ✓      | 35695.8    | 27.52        | 6.43          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35474.8    | 27.70        | 6.33          |
| koa-router               | 13.1.0   | ✓      | 34150.2    | 28.76        | 6.09          |
| hapi                     | 21.3.12  | ✓      | 32347.2    | 30.41        | 5.77          |
| microrouter              | 3.1.3    | ✓      | 30758.0    | 32.00        | 5.48          |
| fastify-big-json         | 5.2.1    | ✓      | 12182.2    | 81.55        | 140.15        |
| express                  | 5.0.1    | ✓      | 10488.2    | 94.73        | 1.87          |
| express-with-middlewares | 5.0.1    | ✓      | 9263.3     | 107.33       | 3.45          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
