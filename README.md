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
* __Node:__ `v24.14.0`
* __Run:__ Sun Mar 01 2026 02:21:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.4.0    | ✓      | 52965.6    | 18.39        | 9.45          |
| h3                       | 1.15.5   | ✗      | 51316.0    | 18.99        | 9.15          |
| node-http                | v24.14.0 | ✗      | 47736.8    | 20.47        | 8.51          |
| polka                    | 0.5.2    | ✓      | 46128.0    | 21.18        | 8.23          |
| fastify                  | 5.7.4    | ✓      | 45790.4    | 21.31        | 8.21          |
| micro                    | 10.0.1   | ✗      | 45780.0    | 21.34        | 8.16          |
| restana                  | v5.1.0   | ✓      | 45511.2    | 21.49        | 8.12          |
| connect                  | 3.7.0    | ✗      | 44368.8    | 22.06        | 7.91          |
| h3-router                | 1.15.5   | ✓      | 44021.6    | 22.22        | 7.85          |
| connect-router           | 2.2.0    | ✓      | 43044.0    | 22.73        | 7.68          |
| whatwg-node-server       | 0.10.18  | ✗      | 39888.8    | 24.57        | 7.11          |
| hono                     | 4.12.3   | ✓      | 37288.0    | 26.31        | 6.12          |
| adonisjs                 | 7.8.0    | ✓      | 35594.4    | 27.61        | 6.35          |
| koa                      | 3.1.2    | ✗      | 35432.6    | 27.73        | 6.32          |
| hapi                     | 21.4.6   | ✓      | 33394.4    | 29.47        | 5.96          |
| koa-router               | 15.3.1   | ✓      | 33011.2    | 29.80        | 5.89          |
| srvx                     | 0.10.1   | ✗      | 28156.8    | 35.01        | 5.48          |
| express                  | 5.2.1    | ✓      | 27270.4    | 36.18        | 4.86          |
| microrouter              | 3.1.3    | ✓      | 26085.6    | 37.84        | 4.65          |
| express-with-middlewares | 5.2.1    | ✓      | 22646.0    | 43.65        | 8.42          |
| fastify-big-json         | 5.7.4    | ✓      | 13079.2    | 75.90        | 150.48        |
| trpc-router              | 11.10.0  | ✓      | 9410.9     | 105.65       | 2.07          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
