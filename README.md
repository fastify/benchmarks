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
* __Node:__ `v20.19.5`
* __Run:__ Wed Sep 24 2025 13:09:15 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.6.1    | ✓      | 47002.4    | 20.77        | 8.43          |
| node-http                | v20.19.5 | ✗      | 46680.0    | 20.92        | 8.32          |
| connect                  | 3.7.0    | ✗      | 46140.8    | 21.17        | 8.23          |
| polka                    | 0.5.2    | ✓      | 45517.6    | 21.47        | 8.12          |
| micro                    | 10.0.1   | ✗      | 44703.2    | 21.87        | 7.97          |
| connect-router           | 2.2.0    | ✓      | 43009.6    | 22.75        | 7.67          |
| 0http                    | 4.3.0    | ✓      | 42972.0    | 22.77        | 7.66          |
| h3                       | 1.15.4   | ✗      | 42588.0    | 22.99        | 7.59          |
| adonisjs                 | 7.7.0    | ✓      | 41422.4    | 23.65        | 7.39          |
| h3-router                | 1.15.4   | ✓      | 41286.4    | 23.73        | 7.36          |
| restana                  | v5.1.0   | ✓      | 40408.0    | 24.25        | 7.21          |
| srvx                     | 0.8.7    | ✗      | 39829.6    | 24.60        | 7.75          |
| whatwg-node-server       | 0.10.12  | ✗      | 39306.4    | 24.94        | 7.01          |
| hono                     | 4.9.8    | ✓      | 37351.2    | 26.27        | 6.13          |
| koa                      | 3.0.1    | ✗      | 35396.6    | 27.76        | 6.31          |
| restify                  | 11.1.0   | ✓      | 35069.0    | 28.01        | 6.32          |
| hapi                     | 21.4.3   | ✓      | 32470.4    | 30.28        | 5.79          |
| koa-router               | 14.0.0   | ✓      | 31740.4    | 31.00        | 5.66          |
| microrouter              | 3.1.3    | ✓      | 29026.4    | 33.94        | 5.18          |
| fastify-big-json         | 5.6.1    | ✓      | 11866.2    | 83.71        | 136.53        |
| express                  | 5.1.0    | ✓      | 10009.4    | 99.30        | 1.78          |
| express-with-middlewares | 5.1.0    | ✓      | 9088.1     | 109.42       | 3.38          |
| trpc-router              | 11.5.1   | ✓      | 6259.6     | 158.98       | 1.38          |
