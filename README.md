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
* __Node:__ `v20.19.2`
* __Run:__ Mon Jun 16 2025 05:42:47 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.2 | ✗      | 48102.4    | 20.31        | 8.58          |
| fastify                  | 5.4.0    | ✓      | 47950.4    | 20.37        | 8.60          |
| polka                    | 0.5.2    | ✓      | 46850.4    | 20.84        | 8.36          |
| rayo                     | 1.4.6    | ✓      | 46729.6    | 20.90        | 8.33          |
| connect                  | 3.7.0    | ✗      | 46607.2    | 20.96        | 8.31          |
| server-base-router       | 7.1.32   | ✓      | 46304.0    | 21.08        | 8.26          |
| micro                    | 10.0.1   | ✗      | 46189.6    | 21.15        | 8.24          |
| polkadot                 | 1.0.0    | ✗      | 46116.0    | 21.19        | 8.22          |
| 0http                    | 4.2.1    | ✓      | 45991.2    | 21.25        | 8.20          |
| server-base              | 7.1.32   | ✗      | 45909.6    | 21.27        | 8.19          |
| h3-router                | 1.15.3   | ✓      | 44372.8    | 22.04        | 7.91          |
| h3                       | 1.15.3   | ✗      | 44151.2    | 22.15        | 7.87          |
| micro-route              | 2.5.0    | ✓      | 43516.0    | 22.47        | 7.76          |
| connect-router           | 2.2.0    | ✓      | 43509.6    | 22.48        | 7.76          |
| adonisjs                 | 7.6.1    | ✓      | 42458.4    | 23.05        | 7.57          |
| restana                  | v5.0.0   | ✓      | 41832.0    | 23.41        | 7.46          |
| srvx                     | 0.7.5    | ✗      | 40751.2    | 24.04        | 7.93          |
| hono                     | 4.7.11   | ✓      | 40710.4    | 24.05        | 6.68          |
| whatwg-node-server       | 0.10.10  | ✗      | 40623.2    | 24.11        | 7.24          |
| koa                      | 2.16.1   | ✗      | 37956.6    | 25.83        | 6.77          |
| restify                  | 11.1.0   | ✓      | 36208.2    | 27.12        | 6.53          |
| take-five                | 2.0.0    | ✓      | 35794.6    | 27.43        | 12.87         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35699.4    | 27.52        | 6.37          |
| koa-router               | 13.1.0   | ✓      | 34151.2    | 28.77        | 6.09          |
| hapi                     | 21.4.0   | ✓      | 32086.0    | 30.66        | 5.72          |
| microrouter              | 3.1.3    | ✓      | 30835.2    | 31.91        | 5.50          |
| fastify-big-json         | 5.4.0    | ✓      | 12101.2    | 82.08        | 139.22        |
| express                  | 5.1.0    | ✓      | 10161.6    | 97.83        | 1.81          |
| express-with-middlewares | 5.1.0    | ✓      | 9173.4     | 108.41       | 3.41          |
| trpc-router              | 11.4.1   | ✓      | 6071.2     | 163.89       | 1.34          |
