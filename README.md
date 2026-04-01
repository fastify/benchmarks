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
* __Node:__ `v24.14.1`
* __Run:__ Wed Apr 01 2026 02:33:40 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.4.0    | ✓      | 53711.2    | 18.13        | 9.58          |
| restana                  | v5.1.0   | ✓      | 51824.0    | 18.78        | 9.24          |
| h3-router                | 1.15.10  | ✓      | 50756.8    | 19.22        | 9.05          |
| node-http                | v24.14.1 | ✗      | 48020.0    | 20.35        | 8.56          |
| polka                    | 0.5.2    | ✓      | 47260.0    | 20.69        | 8.43          |
| micro                    | 10.0.1   | ✗      | 47135.2    | 20.70        | 8.41          |
| connect                  | 3.7.0    | ✗      | 46235.2    | 21.11        | 8.25          |
| fastify                  | 5.8.4    | ✓      | 46193.6    | 21.14        | 8.28          |
| h3                       | 1.15.10  | ✗      | 45614.4    | 21.44        | 8.14          |
| connect-router           | 2.2.0    | ✓      | 43307.2    | 22.60        | 7.72          |
| whatwg-node-server       | 0.10.18  | ✗      | 41160.0    | 23.79        | 7.34          |
| hono                     | 4.12.9   | ✓      | 37320.8    | 26.30        | 6.12          |
| adonisjs                 | 7.8.0    | ✓      | 36857.6    | 26.64        | 6.57          |
| koa                      | 3.2.0    | ✗      | 36152.2    | 27.15        | 6.45          |
| hapi                     | 21.4.7   | ✓      | 34974.8    | 28.11        | 6.24          |
| koa-router               | 15.4.0   | ✓      | 34193.0    | 28.77        | 6.10          |
| express                  | 5.2.1    | ✓      | 28104.4    | 35.07        | 5.01          |
| srvx                     | 0.11.13  | ✗      | 27534.0    | 35.81        | 5.36          |
| microrouter              | 3.1.3    | ✓      | 26008.0    | 37.93        | 4.64          |
| express-with-middlewares | 5.2.1    | ✓      | 23046.8    | 42.87        | 8.57          |
| fastify-big-json         | 5.8.4    | ✓      | 13628.6    | 72.83        | 156.81        |
| trpc-router              | 11.16.0  | ✓      | 9370.3     | 106.11       | 2.14          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
