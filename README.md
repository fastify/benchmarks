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
* __Node:__ `v24.18.0`
* __Run:__ Tue Jul 21 2026 16:30:18 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:         | --:    | :-:        | --:          | --:           |
| 0http                    | 5.1.0       | ✓      | 54500.8    | 17.87        | 9.72          |
| restana                  | v6.0.1      | ✓      | 49195.2    | 19.82        | 12.39         |
| srvx                     | 0.12.1      | ✗      | 48867.2    | 20.04        | 7.92          |
| node-http                | v24.18.0    | ✗      | 47916.8    | 20.43        | 8.54          |
| micro                    | 10.0.1      | ✗      | 47431.2    | 20.57        | 8.46          |
| polka                    | 0.5.2       | ✓      | 47279.2    | 20.63        | 8.43          |
| connect                  | 3.7.0       | ✗      | 46990.4    | 20.76        | 8.38          |
| fastify                  | 5.10.0      | ✓      | 46850.4    | 20.82        | 8.40          |
| adonisjs                 | 9.1.0       | ✓      | 43868.8    | 22.30        | 7.82          |
| h3                       | 2.0.1-rc.25 | ✓      | 43402.4    | 22.52        | 7.70          |
| connect-router           | 2.2.0       | ✓      | 43209.6    | 22.60        | 7.71          |
| hono                     | 4.12.31     | ✓      | 40188.0    | 24.38        | 6.59          |
| whatwg-node-server       | 0.11.0      | ✗      | 40124.2    | 24.39        | 7.16          |
| koa                      | 3.2.1       | ✗      | 35724.2    | 27.54        | 6.37          |
| hapi                     | 21.4.9      | ✓      | 33980.6    | 28.93        | 6.06          |
| koa-router               | 15.7.0      | ✓      | 33395.8    | 29.44        | 5.96          |
| express                  | 5.2.1       | ✓      | 27794.0    | 35.47        | 4.96          |
| microrouter              | 3.1.3       | ✓      | 25416.0    | 38.84        | 4.53          |
| express-with-middlewares | 5.2.1       | ✓      | 22402.4    | 44.14        | 8.33          |
| fastify-big-json         | 5.10.0      | ✓      | 13854.0    | 71.66        | 159.40        |
| trpc-router              | 11.18.0     | ✓      | 10280.5    | 96.71        | 2.34          |
| restify                  | 11.1.0      | ✓      | N/A        | N/A          | N/A           |
