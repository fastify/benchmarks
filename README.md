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
* __Node:__ `v24.18.0`
* __Run:__ Tue Jun 30 2026 10:05:44 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 5.1.0    | ✓      | 57351.2    | 17.01        | 10.23         |
| h3                       | 1.15.11  | ✗      | 53808.0    | 18.10        | 9.60          |
| h3-router                | 1.15.11  | ✓      | 51891.2    | 18.78        | 9.25          |
| restana                  | v6.0.0   | ✓      | 49794.4    | 19.57        | 12.54         |
| node-http                | v24.18.0 | ✗      | 48725.6    | 20.01        | 8.69          |
| connect                  | 3.7.0    | ✗      | 48294.4    | 20.24        | 8.61          |
| micro                    | 10.0.1   | ✗      | 48169.6    | 20.27        | 8.59          |
| fastify                  | 5.9.0    | ✓      | 48144.8    | 20.27        | 8.63          |
| polka                    | 0.5.2    | ✓      | 47805.6    | 20.50        | 8.53          |
| connect-router           | 2.2.0    | ✓      | 44412.0    | 21.98        | 7.92          |
| whatwg-node-server       | 0.11.0   | ✗      | 41609.8    | 23.55        | 7.42          |
| hono                     | 4.12.27  | ✓      | 40868.8    | 23.99        | 6.70          |
| koa                      | 3.2.1    | ✗      | 36271.0    | 27.06        | 6.47          |
| adonisjs                 | 7.8.1    | ✓      | 34854.8    | 28.20        | 6.22          |
| hapi                     | 21.4.9   | ✓      | 34543.2    | 28.47        | 6.16          |
| koa-router               | 15.6.0   | ✓      | 34510.2    | 28.46        | 6.15          |
| express                  | 5.2.1    | ✓      | 28741.2    | 34.29        | 5.13          |
| srvx                     | 0.11.17  | ✗      | 28148.4    | 35.03        | 5.48          |
| microrouter              | 3.1.3    | ✓      | 26140.0    | 37.74        | 4.66          |
| express-with-middlewares | 5.2.1    | ✓      | 23858.0    | 41.40        | 8.87          |
| fastify-big-json         | 5.9.0    | ✓      | 14400.8    | 68.90        | 165.68        |
| trpc-router              | 11.18.0  | ✓      | 10604.0    | 93.67        | 2.42          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
