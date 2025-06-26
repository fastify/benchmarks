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
* __Node:__ `v20.19.3`
* __Run:__ Thu Jun 26 2025 21:43:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.3 | ✗      | 48465.6    | 20.15        | 8.64          |
| fastify                  | 5.4.0    | ✓      | 47912.8    | 20.38        | 8.59          |
| polka                    | 0.5.2    | ✓      | 47256.8    | 20.65        | 8.43          |
| connect                  | 3.7.0    | ✗      | 46754.4    | 20.89        | 8.34          |
| rayo                     | 1.4.6    | ✓      | 46589.6    | 20.96        | 8.31          |
| server-base              | 7.1.32   | ✗      | 46440.0    | 21.02        | 8.28          |
| server-base-router       | 7.1.32   | ✓      | 46144.8    | 21.15        | 8.23          |
| micro                    | 10.0.1   | ✗      | 45668.0    | 21.41        | 8.14          |
| 0http                    | 4.2.1    | ✓      | 45382.4    | 21.54        | 8.09          |
| polkadot                 | 1.0.0    | ✗      | 45187.2    | 21.64        | 8.06          |
| h3                       | 1.15.3   | ✗      | 45008.8    | 21.73        | 8.03          |
| connect-router           | 2.2.0    | ✓      | 43502.4    | 22.48        | 7.76          |
| micro-route              | 2.5.0    | ✓      | 42936.0    | 22.78        | 7.66          |
| h3-router                | 1.15.3   | ✓      | 42385.6    | 23.09        | 7.56          |
| adonisjs                 | 7.7.0    | ✓      | 42351.2    | 23.11        | 7.55          |
| restana                  | v5.0.0   | ✓      | 41818.4    | 23.41        | 7.46          |
| srvx                     | 0.7.5    | ✗      | 40844.8    | 23.98        | 7.95          |
| whatwg-node-server       | 0.10.10  | ✗      | 38674.4    | 25.35        | 6.90          |
| hono                     | 4.8.3    | ✓      | 37796.8    | 25.95        | 6.20          |
| koa                      | 2.16.1   | ✗      | 37652.8    | 26.06        | 6.71          |
| restify                  | 11.1.0   | ✓      | 35922.6    | 27.33        | 6.48          |
| take-five                | 2.0.0    | ✓      | 35909.0    | 27.33        | 12.91         |
| koa-router               | 13.1.0   | ✓      | 33510.8    | 29.34        | 5.98          |
| hapi                     | 21.4.0   | ✓      | 32286.4    | 30.46        | 5.76          |
| microrouter              | 3.1.3    | ✓      | 30728.0    | 32.04        | 5.48          |
| fastify-big-json         | 5.4.0    | ✓      | 11933.6    | 83.24        | 137.31        |
| express                  | 5.1.0    | ✓      | 10162.0    | 97.83        | 1.81          |
| express-with-middlewares | 5.1.0    | ✓      | 9230.6     | 107.71       | 3.43          |
| trpc-router              | 11.4.2   | ✓      | 5829.1     | 170.76       | 1.28          |
