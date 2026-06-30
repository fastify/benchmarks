<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://raw.githubusercontent.com/fastify/graphics/HEAD/fastify-landscape-outlined.svg"
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
* __Node:__ `v24.16.0`
* __Run:__ Sun Jun 07 2026 15:00:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 5.0.1    | ✓      | 53224.8    | 18.30        | 9.49          |
| h3-router                | 1.15.11  | ✓      | 48082.4    | 20.29        | 8.58          |
| h3                       | 1.15.11  | ✗      | 48062.4    | 20.32        | 8.57          |
| micro                    | 10.0.1   | ✗      | 47112.0    | 20.71        | 8.40          |
| node-http                | v24.16.0 | ✗      | 46958.4    | 20.79        | 8.37          |
| restana                  | v6.0.0   | ✓      | 45690.4    | 21.41        | 11.50         |
| polka                    | 0.5.2    | ✓      | 45484.8    | 21.48        | 8.11          |
| connect                  | 3.7.0    | ✗      | 45272.0    | 21.58        | 8.07          |
| connect-router           | 2.2.0    | ✓      | 42660.0    | 22.94        | 7.61          |
| fastify                  | 5.8.5    | ✓      | 42257.4    | 23.19        | 7.58          |
| whatwg-node-server       | 0.11.0   | ✗      | 39520.0    | 24.97        | 7.05          |
| hono                     | 4.12.23  | ✓      | 38893.6    | 25.22        | 6.38          |
| koa                      | 3.2.1    | ✗      | 35224.6    | 27.89        | 6.28          |
| koa-router               | 15.6.0   | ✓      | 33384.2    | 29.46        | 5.95          |
| adonisjs                 | 7.8.1    | ✓      | 33119.6    | 29.68        | 5.91          |
| hapi                     | 21.4.9   | ✓      | 32765.8    | 30.01        | 5.84          |
| express                  | 5.2.1    | ✓      | 26742.0    | 36.88        | 4.77          |
| srvx                     | 0.11.16  | ✗      | 26694.8    | 36.96        | 5.19          |
| microrouter              | 3.1.3    | ✓      | 25282.8    | 39.04        | 4.51          |
| express-with-middlewares | 5.2.1    | ✓      | 21454.4    | 46.10        | 7.98          |
| fastify-big-json         | 5.8.5    | ✓      | 13415.2    | 74.00        | 154.36        |
| trpc-router              | 11.17.0  | ✓      | 10073.6    | 98.68        | 2.30          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
