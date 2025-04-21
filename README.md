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
* `bench`:  Benchmark one or more modules.
* `compare`: Get comparative data for your benchmarks.

> Create benchmark before comparing; `benchmark bench`

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.0`
* __Run:__ Mon Apr 21 2025 02:00:12 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.0 | ✗      | 47656.8    | 20.47        | 8.50          |
| connect                  | 3.7.0    | ✗      | 47131.2    | 20.72        | 8.41          |
| fastify                  | 5.3.2    | ✓      | 47032.0    | 20.76        | 8.43          |
| polka                    | 0.5.2    | ✓      | 46556.8    | 20.97        | 8.30          |
| rayo                     | 1.4.6    | ✓      | 46418.4    | 21.05        | 8.28          |
| server-base-router       | 7.1.32   | ✓      | 45971.2    | 21.22        | 8.20          |
| server-base              | 7.1.32   | ✗      | 45835.2    | 21.30        | 8.17          |
| 0http                    | 4.2.0    | ✓      | 45431.2    | 21.53        | 8.10          |
| polkadot                 | 1.0.0    | ✗      | 44760.8    | 21.84        | 7.98          |
| micro                    | 10.0.1   | ✗      | 44487.2    | 21.99        | 7.93          |
| h3-router                | 1.15.1   | ✓      | 43432.0    | 22.53        | 7.75          |
| connect-router           | 2.2.0    | ✓      | 43256.0    | 22.60        | 7.71          |
| h3                       | 1.15.1   | ✗      | 42882.4    | 22.82        | 7.65          |
| micro-route              | 2.5.0    | ✓      | 42166.4    | 23.23        | 7.52          |
| adonisjs                 | 7.6.0    | ✓      | 41501.6    | 23.61        | 7.40          |
| hono                     | 4.7.7    | ✓      | 41014.4    | 23.87        | 6.73          |
| restana                  | v5.0.0   | ✓      | 40185.6    | 24.38        | 7.17          |
| koa                      | 2.16.1   | ✗      | 37044.0    | 26.49        | 6.61          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35348.2    | 27.78        | 6.30          |
| take-five                | 2.0.0    | ✓      | 35054.6    | 28.03        | 12.60         |
| restify                  | 11.1.0   | ✓      | 34753.8    | 28.26        | 6.26          |
| koa-router               | 13.1.0   | ✓      | 33344.2    | 29.50        | 5.95          |
| hapi                     | 21.4.0   | ✓      | 31933.2    | 30.81        | 5.70          |
| microrouter              | 3.1.3    | ✓      | 30896.0    | 31.86        | 5.51          |
| fastify-big-json         | 5.3.2    | ✓      | 11978.6    | 82.92        | 137.81        |
| express                  | 5.1.0    | ✓      | 9920.0     | 100.22       | 1.77          |
| express-with-middlewares | 5.1.0    | ✓      | 9227.9     | 107.72       | 3.43          |
| trpc-router              | 11.1.0   | ✓      | 6136.8     | 162.16       | 1.35          |
