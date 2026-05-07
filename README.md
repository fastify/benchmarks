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
* __Node:__ `v24.15.0`
* __Run:__ Thu May 07 2026 15:34:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| h3                       | 1.15.11  | ✗      | 51097.6    | 19.09        | 9.11          |
| h3-router                | 1.15.11  | ✓      | 50880.8    | 19.15        | 9.07          |
| 0http                    | 4.4.0    | ✓      | 50176.0    | 19.41        | 8.95          |
| restana                  | v6.0.0   | ✓      | 49060.8    | 19.92        | 12.35         |
| node-http                | v24.15.0 | ✗      | 48777.6    | 20.02        | 8.70          |
| micro                    | 10.0.1   | ✗      | 48211.2    | 20.23        | 8.60          |
| polka                    | 0.5.2    | ✓      | 47339.2    | 20.65        | 8.44          |
| fastify                  | 5.8.5    | ✓      | 47321.6    | 20.61        | 8.48          |
| connect                  | 3.7.0    | ✗      | 47316.0    | 20.60        | 8.44          |
| connect-router           | 2.2.0    | ✓      | 43456.0    | 22.50        | 7.75          |
| hono                     | 4.12.18  | ✓      | 41224.0    | 23.80        | 6.76          |
| whatwg-node-server       | 0.10.18  | ✗      | 40375.0    | 24.26        | 7.20          |
| koa                      | 3.2.0    | ✗      | 36648.2    | 26.80        | 6.54          |
| hapi                     | 21.4.9   | ✓      | 35564.2    | 27.63        | 6.34          |
| adonisjs                 | 7.8.1    | ✓      | 35067.4    | 28.01        | 6.25          |
| koa-router               | 15.5.0   | ✓      | 34575.8    | 28.43        | 6.17          |
| express                  | 5.2.1    | ✓      | 28181.6    | 34.98        | 5.03          |
| srvx                     | 0.11.15  | ✗      | 28080.4    | 35.09        | 5.46          |
| microrouter              | 3.1.3    | ✓      | 26030.4    | 37.90        | 4.64          |
| express-with-middlewares | 5.2.1    | ✓      | 24033.6    | 41.10        | 8.94          |
| fastify-big-json         | 5.8.5    | ✓      | 13937.4    | 71.20        | 160.37        |
| trpc-router              | 11.17.0  | ✓      | 9376.0     | 106.05       | 2.14          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
