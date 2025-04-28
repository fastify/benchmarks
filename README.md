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
* __Run:__ Mon Apr 28 2025 01:59:47 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.3.2    | ✓      | 45588.8    | 21.43        | 8.17          |
| node-http                | v20.19.1 | ✗      | 45346.4    | 21.56        | 8.09          |
| polka                    | 0.5.2    | ✓      | 44972.8    | 21.73        | 8.02          |
| connect                  | 3.7.0    | ✗      | 44689.8    | 21.88        | 7.97          |
| server-base              | 7.1.32   | ✗      | 44609.6    | 21.93        | 7.96          |
| rayo                     | 1.4.6    | ✓      | 43824.0    | 22.32        | 7.82          |
| micro                    | 10.0.1   | ✗      | 43739.8    | 22.36        | 7.80          |
| polkadot                 | 1.0.0    | ✗      | 43674.4    | 22.40        | 7.79          |
| 0http                    | 4.2.0    | ✓      | 43520.0    | 22.48        | 7.76          |
| server-base-router       | 7.1.32   | ✓      | 42789.6    | 22.87        | 7.63          |
| connect-router           | 2.2.0    | ✓      | 42456.0    | 23.06        | 7.57          |
| h3                       | 1.15.2   | ✗      | 42276.8    | 23.16        | 7.54          |
| h3-router                | 1.15.2   | ✓      | 42132.8    | 23.24        | 7.51          |
| micro-route              | 2.5.0    | ✓      | 41460.8    | 23.63        | 7.39          |
| adonisjs                 | 7.6.0    | ✓      | 41061.6    | 23.85        | 7.32          |
| hono                     | 4.7.7    | ✓      | 39284.0    | 24.96        | 6.44          |
| restana                  | v5.0.0   | ✓      | 38144.6    | 25.71        | 6.80          |
| koa                      | 2.16.1   | ✗      | 35927.0    | 27.33        | 6.41          |
| take-five                | 2.0.0    | ✓      | 34937.4    | 28.13        | 12.56         |
| restify                  | 11.1.0   | ✓      | 33996.0    | 28.91        | 6.13          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33878.4    | 29.02        | 6.04          |
| koa-router               | 13.1.0   | ✓      | 32574.8    | 30.20        | 5.81          |
| hapi                     | 21.4.0   | ✓      | 30826.4    | 31.93        | 5.50          |
| microrouter              | 3.1.3    | ✓      | 29452.8    | 33.44        | 5.25          |
| fastify-big-json         | 5.3.2    | ✓      | 11640.2    | 85.37        | 133.92        |
| express                  | 5.1.0    | ✓      | 9793.0     | 101.51       | 1.75          |
| express-with-middlewares | 5.1.0    | ✓      | 8912.3     | 111.57       | 3.31          |
| trpc-router              | 11.1.1   | ✓      | 5930.5     | 167.80       | 1.31          |
