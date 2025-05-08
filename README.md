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
* __Node:__ `v20.19.1`
* __Run:__ Thu May 08 2025 17:22:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.1 | ✗      | 47770.4    | 20.46        | 8.52          |
| polka                    | 0.5.2    | ✓      | 47529.6    | 20.52        | 8.48          |
| rayo                     | 1.4.6    | ✓      | 46485.6    | 21.01        | 8.29          |
| polkadot                 | 1.0.0    | ✗      | 46413.6    | 21.05        | 8.28          |
| server-base-router       | 7.1.32   | ✓      | 46048.0    | 21.20        | 8.21          |
| server-base              | 7.1.32   | ✗      | 45766.4    | 21.34        | 8.16          |
| fastify                  | 5.3.2    | ✓      | 45656.8    | 21.40        | 8.19          |
| connect                  | 3.7.0    | ✗      | 45392.0    | 21.53        | 8.09          |
| micro                    | 10.0.1   | ✗      | 44385.6    | 22.02        | 7.92          |
| h3                       | 1.15.3   | ✗      | 43540.0    | 22.47        | 7.77          |
| 0http                    | 4.2.0    | ✓      | 42765.6    | 22.89        | 7.63          |
| micro-route              | 2.5.0    | ✓      | 42576.8    | 22.97        | 7.59          |
| connect-router           | 2.2.0    | ✓      | 41602.4    | 23.54        | 7.42          |
| h3-router                | 1.15.3   | ✓      | 41300.8    | 23.72        | 7.37          |
| adonisjs                 | 7.6.0    | ✓      | 41134.4    | 23.81        | 7.34          |
| hono                     | 4.7.8    | ✓      | 40757.6    | 24.04        | 6.69          |
| restana                  | v5.0.0   | ✓      | 39673.8    | 24.71        | 7.08          |
| koa                      | 2.16.1   | ✗      | 37520.8    | 26.18        | 6.69          |
| take-five                | 2.0.0    | ✓      | 35226.2    | 27.88        | 12.67         |
| restify                  | 11.1.0   | ✓      | 35189.4    | 27.92        | 6.34          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34661.0    | 28.34        | 6.18          |
| koa-router               | 13.1.0   | ✓      | 32678.2    | 30.09        | 5.83          |
| hapi                     | 21.4.0   | ✓      | 32200.2    | 30.55        | 5.74          |
| microrouter              | 3.1.3    | ✓      | 30210.8    | 32.60        | 5.39          |
| fastify-big-json         | 5.3.2    | ✓      | 11660.0    | 85.19        | 134.14        |
| express                  | 5.1.0    | ✓      | 9812.4     | 101.30       | 1.75          |
| express-with-middlewares | 5.1.0    | ✓      | 8761.5     | 113.46       | 3.26          |
| trpc-router              | 11.1.2   | ✓      | 5826.7     | 170.83       | 1.28          |
