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
* __Node:__ `v20.19.6`
* __Run:__ Mon Dec 01 2025 01:53:53 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.6 | ✗      | 70476.4    | 13.70        | 12.57         |
| fastify                  | 5.6.2    | ✓      | 69729.6    | 13.85        | 12.50         |
| connect                  | 3.7.0    | ✗      | 69298.4    | 13.94        | 12.36         |
| polka                    | 0.5.2    | ✓      | 68126.8    | 14.18        | 12.15         |
| micro                    | 10.0.1   | ✗      | 65742.0    | 14.72        | 11.72         |
| 0http                    | 4.3.0    | ✓      | 61263.2    | 15.83        | 10.93         |
| adonisjs                 | 7.7.0    | ✓      | 60897.6    | 15.92        | 10.86         |
| connect-router           | 2.2.0    | ✓      | 59197.6    | 16.39        | 10.56         |
| whatwg-node-server       | 0.10.17  | ✗      | 56291.2    | 17.26        | 10.04         |
| h3                       | 1.15.4   | ✗      | 56139.2    | 17.31        | 10.01         |
| restana                  | v5.1.0   | ✓      | 55956.8    | 17.38        | 9.98          |
| h3-router                | 1.15.4   | ✓      | 54121.6    | 17.98        | 9.65          |
| hono                     | 4.10.7   | ✓      | 53515.2    | 18.18        | 8.78          |
| restify                  | 11.1.0   | ✓      | 49431.2    | 19.73        | 8.91          |
| koa                      | 3.1.1    | ✗      | 49267.2    | 19.80        | 8.79          |
| koa-router               | 14.0.0   | ✓      | 44774.4    | 21.83        | 7.98          |
| hapi                     | 21.4.4   | ✓      | 42016.8    | 23.29        | 7.49          |
| microrouter              | 3.1.3    | ✓      | 41559.2    | 23.57        | 7.41          |
| srvx                     | 0.9.7    | ✗      | 24193.6    | 40.82        | 4.71          |
| fastify-big-json         | 5.6.2    | ✓      | 12868.0    | 77.17        | 148.05        |
| express                  | 5.1.0    | ✓      | 12284.0    | 80.87        | 2.19          |
| express-with-middlewares | 5.1.0    | ✓      | 11016.0    | 90.18        | 4.10          |
| trpc-router              | 11.7.2   | ✓      | 7238.0     | 137.50       | 1.59          |
