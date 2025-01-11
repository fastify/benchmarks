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
* __Run:__ Sat Jan 11 2025 13:31:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.2.1    | ✓      | 46991.2    | 20.78        | 8.43          |
| bare                     | v20.18.1 | ✗      | 46834.4    | 20.85        | 8.35          |
| connect                  | 3.7.0    | ✗      | 46359.2    | 21.06        | 8.27          |
| polka                    | 0.5.2    | ✓      | 46032.0    | 21.20        | 8.21          |
| rayo                     | 1.4.6    | ✓      | 45105.6    | 21.68        | 8.04          |
| polkadot                 | 1.0.0    | ✗      | 44745.6    | 21.87        | 7.98          |
| server-base              | 7.1.32   | ✗      | 44397.6    | 22.05        | 7.92          |
| micro                    | 10.0.1   | ✗      | 44179.2    | 22.13        | 7.88          |
| server-base-router       | 7.1.32   | ✓      | 43948.8    | 22.27        | 7.84          |
| 0http                    | 4.0.0    | ✓      | 43751.2    | 22.36        | 7.80          |
| connect-router           | 1.3.8    | ✓      | 42617.6    | 22.95        | 7.60          |
| micro-route              | 2.5.0    | ✓      | 42045.6    | 23.29        | 7.50          |
| adonisjs                 | 7.4.0    | ✓      | 41540.8    | 23.58        | 7.41          |
| h3-router                | 1.13.1   | ✓      | 41230.4    | 23.76        | 7.35          |
| h3                       | 1.13.1   | ✗      | 40237.6    | 24.35        | 7.18          |
| hono                     | 4.6.16   | ✓      | 39778.4    | 24.63        | 6.52          |
| restana                  | v5.0.0   | ✓      | 38633.4    | 25.39        | 6.89          |
| koa                      | 2.15.3   | ✗      | 36743.0    | 26.71        | 6.55          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35285.0    | 27.85        | 6.29          |
| take-five                | 2.0.0    | ✓      | 35116.6    | 27.96        | 12.63         |
| restify                  | 11.1.0   | ✓      | 33890.0    | 29.02        | 6.11          |
| koa-router               | 13.1.0   | ✓      | 33511.6    | 29.34        | 5.98          |
| hapi                     | 21.3.12  | ✓      | 31606.0    | 31.14        | 5.64          |
| microrouter              | 3.1.3    | ✓      | 30383.6    | 32.41        | 5.42          |
| fastify-big-json         | 5.2.1    | ✓      | 11871.2    | 83.68        | 136.58        |
| express                  | 5.0.1    | ✓      | 9827.6     | 101.17       | 1.75          |
| express-with-middlewares | 5.0.1    | ✓      | 9401.6     | 105.74       | 3.50          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
