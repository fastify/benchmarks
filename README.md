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
* __Node:__ `v20.19.4`
* __Run:__ Thu Aug 14 2025 18:20:33 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| restana                  | v5.1.0   | ✓      | 51088.0    | 19.07        | 9.11          |
| fastify                  | 5.5.0    | ✓      | 47087.2    | 20.73        | 8.44          |
| node-http                | v20.19.4 | ✗      | 46750.4    | 20.88        | 8.34          |
| rayo                     | 1.4.6    | ✓      | 46708.8    | 20.90        | 8.33          |
| connect                  | 3.7.0    | ✗      | 46424.8    | 21.01        | 8.28          |
| server-base              | 7.1.32   | ✗      | 45803.2    | 21.31        | 8.17          |
| micro                    | 10.0.1   | ✗      | 45588.8    | 21.43        | 8.13          |
| server-base-router       | 7.1.32   | ✓      | 45322.4    | 21.55        | 8.08          |
| polka                    | 0.5.2    | ✓      | 44953.6    | 21.74        | 8.02          |
| h3                       | 1.15.4   | ✗      | 44822.4    | 21.81        | 7.99          |
| 0http                    | 4.3.0    | ✓      | 44516.8    | 21.97        | 7.94          |
| h3-router                | 1.15.4   | ✓      | 44209.6    | 22.12        | 7.88          |
| polkadot                 | 1.0.0    | ✗      | 44080.0    | 22.19        | 7.86          |
| adonisjs                 | 7.7.0    | ✓      | 42741.6    | 22.89        | 7.62          |
| connect-router           | 2.2.0    | ✓      | 42695.2    | 22.93        | 7.61          |
| micro-route              | 2.5.0    | ✓      | 41842.4    | 23.40        | 7.46          |
| srvx                     | 0.8.6    | ✗      | 39716.0    | 24.68        | 7.73          |
| whatwg-node-server       | 0.10.12  | ✗      | 38007.2    | 25.81        | 6.78          |
| hono                     | 4.9.1    | ✓      | 37640.8    | 26.07        | 6.17          |
| restify                  | 11.1.0   | ✓      | 35514.2    | 27.65        | 6.40          |
| take-five                | 2.0.0    | ✓      | 34343.8    | 28.61        | 12.35         |
| koa                      | 3.0.1    | ✗      | 34156.2    | 28.78        | 6.09          |
| hapi                     | 21.4.3   | ✓      | 31987.4    | 30.76        | 5.70          |
| koa-router               | 13.1.1   | ✓      | 31110.8    | 31.66        | 5.55          |
| microrouter              | 3.1.3    | ✓      | 29349.6    | 33.57        | 5.23          |
| fastify-big-json         | 5.5.0    | ✓      | 12172.6    | 81.59        | 140.06        |
| express                  | 5.1.0    | ✓      | 10261.8    | 96.85        | 1.83          |
| express-with-middlewares | 5.1.0    | ✓      | 9287.4     | 107.06       | 3.45          |
| trpc-router              | 11.4.4   | ✓      | 6257.2     | 159.03       | 1.38          |
