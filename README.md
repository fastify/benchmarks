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
* __Run:__ Wed Oct 01 2025 01:43:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.5 | ✗      | 45884.8    | 21.30        | 8.18          |
| connect                  | 3.7.0    | ✗      | 45449.6    | 21.51        | 8.11          |
| fastify                  | 5.6.1    | ✓      | 45132.0    | 21.66        | 8.09          |
| polka                    | 0.5.2    | ✓      | 44672.8    | 21.89        | 7.97          |
| 0http                    | 4.3.0    | ✓      | 44455.2    | 22.00        | 7.93          |
| micro                    | 10.0.1   | ✗      | 43156.0    | 22.67        | 7.70          |
| connect-router           | 2.2.0    | ✓      | 41880.8    | 23.38        | 7.47          |
| adonisjs                 | 7.7.0    | ✓      | 41606.4    | 23.53        | 7.42          |
| h3                       | 1.15.4   | ✗      | 41537.6    | 23.58        | 7.41          |
| restana                  | v5.1.0   | ✓      | 41404.0    | 23.66        | 7.38          |
| h3-router                | 1.15.4   | ✓      | 39749.6    | 24.66        | 7.09          |
| whatwg-node-server       | 0.10.12  | ✗      | 38686.4    | 25.36        | 6.90          |
| hono                     | 4.9.9    | ✓      | 36309.0    | 27.04        | 5.96          |
| koa                      | 3.0.1    | ✗      | 33795.8    | 29.09        | 6.03          |
| restify                  | 11.1.0   | ✓      | 33425.2    | 29.42        | 6.02          |
| koa-router               | 14.0.0   | ✓      | 30156.4    | 32.66        | 5.38          |
| hapi                     | 21.4.3   | ✓      | 30035.2    | 32.78        | 5.36          |
| microrouter              | 3.1.3    | ✓      | 28637.2    | 34.42        | 5.11          |
| srvx                     | 0.8.9    | ✗      | 19436.4    | 50.92        | 3.78          |
| fastify-big-json         | 5.6.1    | ✓      | 11273.8    | 88.13        | 129.72        |
| express                  | 5.1.0    | ✓      | 9533.5     | 104.26       | 1.70          |
| express-with-middlewares | 5.1.0    | ✓      | 8646.6     | 114.98       | 3.22          |
| trpc-router              | 11.6.0   | ✓      | 6195.7     | 160.65       | 1.36          |
