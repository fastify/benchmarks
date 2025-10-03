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
* __Run:__ Fri Oct 03 2025 20:41:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.6.1    | ✓      | 47983.2    | 20.37        | 8.60          |
| node-http                | v20.19.5 | ✗      | 47556.8    | 20.53        | 8.48          |
| connect                  | 3.7.0    | ✗      | 47501.6    | 20.53        | 8.47          |
| polka                    | 0.5.2    | ✓      | 47028.0    | 20.75        | 8.39          |
| micro                    | 10.0.1   | ✗      | 46047.2    | 21.21        | 8.21          |
| 0http                    | 4.3.0    | ✓      | 45755.2    | 21.36        | 8.16          |
| h3                       | 1.15.4   | ✗      | 44980.0    | 21.73        | 8.02          |
| h3-router                | 1.15.4   | ✓      | 44465.6    | 21.99        | 7.93          |
| restana                  | v5.1.0   | ✓      | 43776.8    | 22.35        | 7.81          |
| connect-router           | 2.2.0    | ✓      | 43460.0    | 22.50        | 7.75          |
| adonisjs                 | 7.7.0    | ✓      | 42674.4    | 22.95        | 7.61          |
| whatwg-node-server       | 0.10.12  | ✗      | 39603.2    | 24.73        | 7.06          |
| hono                     | 4.9.9    | ✓      | 37111.2    | 26.43        | 6.09          |
| restify                  | 11.1.0   | ✓      | 36684.8    | 26.76        | 6.61          |
| koa                      | 3.0.1    | ✗      | 35512.2    | 27.64        | 6.33          |
| hapi                     | 21.4.3   | ✓      | 32755.2    | 30.02        | 5.84          |
| koa-router               | 14.0.0   | ✓      | 32598.4    | 30.18        | 5.81          |
| microrouter              | 3.1.3    | ✓      | 30560.4    | 32.21        | 5.45          |
| srvx                     | 0.8.9    | ✗      | 20282.4    | 48.77        | 3.95          |
| fastify-big-json         | 5.6.1    | ✓      | 11790.6    | 84.24        | 135.65        |
| express                  | 5.1.0    | ✓      | 10183.0    | 97.61        | 1.82          |
| express-with-middlewares | 5.1.0    | ✓      | 9057.4     | 109.78       | 3.37          |
| trpc-router              | 11.6.0   | ✓      | 6479.8     | 153.58       | 1.43          |
