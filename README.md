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
* __Node:__ `v24.13.0`
* __Run:__ Mon Jan 19 2026 07:55:18 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| restana                  | v5.1.0   | ✓      | 53728.8    | 18.12        | 9.58          |
| h3-router                | 1.15.5   | ✓      | 50107.2    | 19.46        | 8.94          |
| 0http                    | 4.4.0    | ✓      | 49312.8    | 19.78        | 8.79          |
| node-http                | v24.13.0 | ✗      | 47691.2    | 20.48        | 8.51          |
| polka                    | 0.5.2    | ✓      | 47166.4    | 20.72        | 8.41          |
| fastify                  | 5.7.1    | ✓      | 46318.4    | 21.08        | 8.30          |
| connect                  | 3.7.0    | ✗      | 46146.4    | 21.15        | 8.23          |
| micro                    | 10.0.1   | ✗      | 45600.8    | 21.43        | 8.13          |
| h3                       | 1.15.5   | ✗      | 45353.6    | 21.58        | 8.09          |
| connect-router           | 2.2.0    | ✓      | 42815.2    | 22.83        | 7.64          |
| whatwg-node-server       | 0.10.18  | ✗      | 41150.6    | 23.85        | 7.34          |
| hono                     | 4.11.4   | ✓      | 37281.4    | 26.33        | 6.12          |
| koa                      | 3.1.1    | ✗      | 36805.0    | 26.67        | 6.56          |
| koa-router               | 15.2.0   | ✓      | 34732.0    | 28.27        | 6.19          |
| hapi                     | 21.4.4   | ✓      | 33866.0    | 29.02        | 6.04          |
| adonisjs                 | 7.8.0    | ✓      | 31639.8    | 31.10        | 5.64          |
| srvx                     | 0.10.0   | ✗      | 29409.6    | 33.52        | 5.72          |
| express                  | 5.2.1    | ✓      | 27744.0    | 35.54        | 4.95          |
| express-with-middlewares | 5.2.1    | ✓      | 23067.6    | 42.85        | 8.58          |
| microrouter              | 3.1.3    | ✓      | 20507.6    | 48.23        | 3.66          |
| fastify-big-json         | 5.7.1    | ✓      | 12446.2    | 79.81        | 143.20        |
| trpc-router              | 11.8.1   | ✓      | 9583.4     | 103.73       | 2.11          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
