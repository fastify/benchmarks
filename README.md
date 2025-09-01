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
* __Node:__ `v20.19.4`
* __Run:__ Mon Sep 01 2025 01:56:06 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.5.0    | ✓      | 47450.4    | 20.57        | 8.51          |
| node-http                | v20.19.4 | ✗      | 47408.8    | 20.59        | 8.45          |
| polka                    | 0.5.2    | ✓      | 46460.8    | 21.01        | 8.29          |
| 0http                    | 4.3.0    | ✓      | 46286.4    | 21.11        | 8.25          |
| connect                  | 3.7.0    | ✗      | 46126.4    | 21.17        | 8.23          |
| server-base              | 7.1.32   | ✗      | 45527.2    | 21.48        | 8.12          |
| rayo                     | 1.4.6    | ✓      | 45218.4    | 21.62        | 8.06          |
| polkadot                 | 1.0.0    | ✗      | 44637.6    | 21.91        | 7.96          |
| server-base-router       | 7.1.32   | ✓      | 44461.6    | 21.99        | 7.93          |
| micro                    | 10.0.1   | ✗      | 44381.6    | 22.03        | 7.92          |
| h3-router                | 1.15.4   | ✓      | 43169.6    | 22.66        | 7.70          |
| h3                       | 1.15.4   | ✗      | 43137.6    | 22.68        | 7.69          |
| connect-router           | 2.2.0    | ✓      | 42318.4    | 23.12        | 7.55          |
| adonisjs                 | 7.7.0    | ✓      | 42313.6    | 23.13        | 7.55          |
| restana                  | v5.1.0   | ✓      | 42096.0    | 23.26        | 7.51          |
| micro-route              | 2.5.0    | ✓      | 41544.0    | 23.57        | 7.41          |
| srvx                     | 0.8.7    | ✗      | 39532.0    | 24.79        | 7.69          |
| whatwg-node-server       | 0.10.12  | ✗      | 39236.8    | 24.99        | 7.00          |
| hono                     | 4.9.5    | ✓      | 36888.8    | 26.62        | 6.05          |
| restify                  | 11.1.0   | ✓      | 34833.4    | 28.22        | 6.28          |
| koa                      | 3.0.1    | ✗      | 34636.2    | 28.36        | 6.18          |
| take-five                | 2.0.0    | ✓      | 34387.0    | 28.58        | 12.36         |
| hapi                     | 21.4.3   | ✓      | 31803.8    | 30.94        | 5.67          |
| koa-router               | 13.1.1   | ✓      | 31100.4    | 31.65        | 5.55          |
| microrouter              | 3.1.3    | ✓      | 29900.8    | 32.93        | 5.33          |
| fastify-big-json         | 5.5.0    | ✓      | 12098.2    | 82.11        | 139.19        |
| express                  | 5.1.0    | ✓      | 9849.0     | 100.95       | 1.76          |
| express-with-middlewares | 5.1.0    | ✓      | 9184.0     | 108.27       | 3.42          |
| trpc-router              | 11.5.0   | ✓      | 6311.5     | 157.65       | 1.39          |
