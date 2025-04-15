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
* __Run:__ Tue Apr 15 2025 10:56:55 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.0 | ✗      | 48244.0    | 20.25        | 8.60          |
| connect                  | 3.7.0    | ✗      | 46324.8    | 21.07        | 8.26          |
| 0http                    | 4.2.0    | ✓      | 45865.6    | 21.32        | 8.18          |
| server-base              | 7.1.32   | ✗      | 45744.0    | 21.37        | 8.16          |
| polka                    | 0.5.2    | ✓      | 45622.4    | 21.42        | 8.14          |
| fastify                  | 5.3.0    | ✓      | 45288.8    | 21.59        | 8.12          |
| server-base-router       | 7.1.32   | ✓      | 44925.6    | 21.77        | 8.01          |
| h3                       | 1.15.1   | ✗      | 44861.6    | 21.80        | 8.00          |
| micro                    | 10.0.1   | ✗      | 44604.8    | 21.92        | 7.95          |
| polkadot                 | 1.0.0    | ✗      | 44140.8    | 22.15        | 7.87          |
| rayo                     | 1.4.6    | ✓      | 44050.4    | 22.20        | 7.86          |
| connect-router           | 2.2.0    | ✓      | 42460.0    | 23.05        | 7.57          |
| h3-router                | 1.15.1   | ✓      | 42181.6    | 23.21        | 7.52          |
| micro-route              | 2.5.0    | ✓      | 41553.6    | 23.58        | 7.41          |
| adonisjs                 | 7.6.0    | ✓      | 41503.2    | 23.60        | 7.40          |
| hono                     | 4.7.6    | ✓      | 39821.6    | 24.59        | 6.53          |
| restana                  | v5.0.0   | ✓      | 38788.8    | 25.28        | 6.92          |
| koa                      | 2.16.1   | ✗      | 36285.4    | 27.06        | 6.47          |
| restify                  | 11.1.0   | ✓      | 35220.6    | 27.90        | 6.35          |
| take-five                | 2.0.0    | ✓      | 34957.0    | 28.11        | 12.57         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33952.2    | 28.96        | 6.05          |
| koa-router               | 13.1.0   | ✓      | 32286.4    | 30.47        | 5.76          |
| hapi                     | 21.4.0   | ✓      | 31298.0    | 31.44        | 5.58          |
| microrouter              | 3.1.3    | ✓      | 30314.0    | 32.47        | 5.41          |
| fastify-big-json         | 5.3.0    | ✓      | 11843.8    | 83.86        | 136.26        |
| express                  | 5.1.0    | ✓      | 9834.8     | 101.08       | 1.75          |
| express-with-middlewares | 5.1.0    | ✓      | 8749.5     | 113.69       | 3.25          |
| trpc-router              | 11.1.0   | ✓      | 5905.1     | 168.55       | 1.30          |
