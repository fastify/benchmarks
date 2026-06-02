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
* __Node:__ `v24.16.0`
* __Run:__ Tue Jun 02 2026 06:28:24 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.4.0    | ✓      | 55791.2    | 17.45        | 9.95          |
| h3-router                | 1.15.11  | ✓      | 54233.6    | 17.93        | 9.67          |
| h3                       | 1.15.11  | ✗      | 53525.6    | 18.18        | 9.54          |
| restana                  | v6.0.0   | ✓      | 50848.0    | 19.18        | 12.80         |
| node-http                | v24.16.0 | ✗      | 48081.6    | 20.37        | 8.58          |
| micro                    | 10.0.1   | ✗      | 47544.0    | 20.53        | 8.48          |
| polka                    | 0.5.2    | ✓      | 47028.8    | 20.74        | 8.39          |
| fastify                  | 5.8.5    | ✓      | 46504.0    | 21.00        | 8.34          |
| connect                  | 3.7.0    | ✗      | 45851.2    | 21.29        | 8.18          |
| connect-router           | 2.2.0    | ✓      | 43069.6    | 22.71        | 7.68          |
| whatwg-node-server       | 0.10.18  | ✗      | 41292.0    | 23.78        | 7.36          |
| hono                     | 4.12.23  | ✓      | 40498.4    | 24.20        | 6.64          |
| koa                      | 3.2.1    | ✗      | 36439.0    | 26.91        | 6.50          |
| hapi                     | 21.4.9   | ✓      | 34929.0    | 28.15        | 6.23          |
| koa-router               | 15.6.0   | ✓      | 34119.6    | 28.81        | 6.08          |
| adonisjs                 | 7.8.1    | ✓      | 33575.6    | 29.27        | 5.99          |
| express                  | 5.2.1    | ✓      | 27776.8    | 35.49        | 4.95          |
| srvx                     | 0.11.16  | ✗      | 27642.8    | 35.64        | 5.38          |
| microrouter              | 3.1.3    | ✓      | 25741.2    | 38.35        | 4.59          |
| express-with-middlewares | 5.2.1    | ✓      | 22667.6    | 43.60        | 8.43          |
| fastify-big-json         | 5.8.5    | ✓      | 13824.8    | 71.81        | 159.05        |
| trpc-router              | 11.17.0  | ✓      | 10196.6    | 97.48        | 2.32          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
