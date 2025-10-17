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
* __Run:__ Fri Oct 17 2025 09:51:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.5 | ✗      | 47641.6    | 20.48        | 8.50          |
| polka                    | 0.5.2    | ✓      | 47009.6    | 20.77        | 8.38          |
| fastify                  | 5.6.1    | ✓      | 46996.8    | 20.77        | 8.43          |
| 0http                    | 4.3.0    | ✓      | 45843.2    | 21.32        | 8.18          |
| connect                  | 3.7.0    | ✗      | 45733.6    | 21.37        | 8.16          |
| micro                    | 10.0.1   | ✗      | 45321.6    | 21.56        | 8.08          |
| h3-router                | 1.15.4   | ✓      | 43692.8    | 22.39        | 7.79          |
| h3                       | 1.15.4   | ✗      | 42837.6    | 22.84        | 7.64          |
| adonisjs                 | 7.7.0    | ✓      | 42819.2    | 22.85        | 7.64          |
| restana                  | v5.1.0   | ✓      | 42572.0    | 22.99        | 7.59          |
| connect-router           | 2.2.0    | ✓      | 42460.0    | 23.08        | 7.57          |
| whatwg-node-server       | 0.10.13  | ✗      | 39403.2    | 24.91        | 7.03          |
| hono                     | 4.10.0   | ✓      | 37440.8    | 26.18        | 6.14          |
| restify                  | 11.1.0   | ✓      | 35674.2    | 27.52        | 6.43          |
| koa                      | 3.0.2    | ✗      | 34708.8    | 28.31        | 6.19          |
| koa-router               | 14.0.0   | ✓      | 32520.6    | 30.25        | 5.80          |
| hapi                     | 21.4.3   | ✓      | 31916.0    | 30.83        | 5.69          |
| microrouter              | 3.1.3    | ✓      | 30896.4    | 31.85        | 5.51          |
| srvx                     | 0.8.16   | ✗      | 19852.8    | 49.87        | 3.86          |
| fastify-big-json         | 5.6.1    | ✓      | 11706.6    | 84.85        | 134.69        |
| express                  | 5.1.0    | ✓      | 10302.2    | 96.46        | 1.84          |
| express-with-middlewares | 5.1.0    | ✓      | 9485.4     | 104.76       | 3.53          |
| trpc-router              | 11.6.0   | ✓      | 6450.0     | 154.26       | 1.42          |
