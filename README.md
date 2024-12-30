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
* __Run:__ Mon Dec 30 2024 01:51:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.2.0    | ✓      | 47367.2    | 20.60        | 8.49          |
| bare                     | v20.18.1 | ✗      | 47220.8    | 20.67        | 8.42          |
| polka                    | 0.5.2    | ✓      | 46952.8    | 20.80        | 8.37          |
| polkadot                 | 1.0.0    | ✗      | 46778.4    | 20.89        | 8.34          |
| connect                  | 3.7.0    | ✗      | 46468.8    | 21.01        | 8.29          |
| server-base              | 7.1.32   | ✗      | 46328.0    | 21.07        | 8.26          |
| rayo                     | 1.4.6    | ✓      | 46186.4    | 21.13        | 8.24          |
| server-base-router       | 7.1.32   | ✓      | 46148.0    | 21.15        | 8.23          |
| micro                    | 10.0.1   | ✗      | 45770.4    | 21.35        | 8.16          |
| 0http                    | 3.5.3    | ✓      | 44970.4    | 21.75        | 8.02          |
| connect-router           | 1.3.8    | ✓      | 44459.2    | 21.99        | 7.93          |
| adonisjs                 | 7.4.0    | ✓      | 43186.4    | 22.65        | 7.70          |
| h3                       | 1.13.0   | ✗      | 43046.4    | 22.74        | 7.68          |
| micro-route              | 2.5.0    | ✓      | 42920.8    | 22.80        | 7.65          |
| h3-router                | 1.13.0   | ✓      | 41628.8    | 23.53        | 7.42          |
| restana                  | 4.9.9    | ✓      | 40425.6    | 24.24        | 7.21          |
| hono                     | 4.6.15   | ✓      | 40344.8    | 24.28        | 6.62          |
| koa                      | 2.15.3   | ✗      | 37166.2    | 26.41        | 6.63          |
| take-five                | 2.0.0    | ✓      | 35511.0    | 27.66        | 12.77         |
| restify                  | 11.1.0   | ✓      | 35383.4    | 27.77        | 6.38          |
| koa-router               | 13.1.0   | ✓      | 34724.6    | 28.30        | 6.19          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34426.4    | 28.53        | 6.14          |
| hapi                     | 21.3.12  | ✓      | 32057.8    | 30.68        | 5.72          |
| microrouter              | 3.1.3    | ✓      | 30976.8    | 31.77        | 5.52          |
| fastify-big-json         | 5.2.0    | ✓      | 11913.2    | 83.35        | 137.07        |
| express                  | 5.0.1    | ✓      | 9955.4     | 99.82        | 1.78          |
| express-with-middlewares | 5.0.1    | ✓      | 9429.0     | 105.46       | 3.51          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
