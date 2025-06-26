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
* __Run:__ Mon Jun 23 2025 15:20:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.2 | ✗      | 48212.8    | 20.25        | 8.60          |
| polka                    | 0.5.2    | ✓      | 47161.6    | 20.70        | 8.41          |
| server-base              | 7.1.32   | ✗      | 46456.0    | 21.02        | 8.28          |
| rayo                     | 1.4.6    | ✓      | 46348.0    | 21.07        | 8.27          |
| connect                  | 3.7.0    | ✗      | 46307.2    | 21.08        | 8.26          |
| micro                    | 10.0.1   | ✗      | 46301.6    | 21.10        | 8.26          |
| fastify                  | 5.4.0    | ✓      | 45908.0    | 21.28        | 8.23          |
| 0http                    | 4.2.1    | ✓      | 45654.4    | 21.41        | 8.14          |
| polkadot                 | 1.0.0    | ✗      | 45058.4    | 21.70        | 8.04          |
| server-base-router       | 7.1.32   | ✓      | 44570.4    | 21.94        | 7.95          |
| connect-router           | 2.2.0    | ✓      | 43155.2    | 22.68        | 7.70          |
| h3                       | 1.15.3   | ✗      | 43077.6    | 22.71        | 7.68          |
| h3-router                | 1.15.3   | ✓      | 42704.8    | 22.92        | 7.62          |
| micro-route              | 2.5.0    | ✓      | 42612.0    | 22.96        | 7.60          |
| adonisjs                 | 7.7.0    | ✓      | 42364.8    | 23.11        | 7.56          |
| srvx                     | 0.7.5    | ✗      | 40011.2    | 24.50        | 7.78          |
| restana                  | v5.0.0   | ✓      | 39812.0    | 24.62        | 7.10          |
| whatwg-node-server       | 0.10.10  | ✗      | 39372.8    | 24.90        | 7.02          |
| hono                     | 4.8.2    | ✓      | 37309.4    | 26.29        | 6.12          |
| koa                      | 2.16.1   | ✗      | 37291.8    | 26.31        | 6.65          |
| take-five                | 2.0.0    | ✓      | 35506.2    | 27.66        | 12.77         |
| restify                  | 11.1.0   | ✓      | 35224.6    | 27.88        | 6.35          |
| koa-router               | 13.1.0   | ✓      | 33299.0    | 29.52        | 5.94          |
| hapi                     | 21.4.0   | ✓      | 32330.8    | 30.42        | 5.77          |
| microrouter              | 3.1.3    | ✓      | 30241.6    | 32.56        | 5.39          |
| fastify-big-json         | 5.4.0    | ✓      | 12064.0    | 82.36        | 138.80        |
| express                  | 5.1.0    | ✓      | 9558.0     | 104.03       | 1.70          |
| express-with-middlewares | 5.1.0    | ✓      | 8563.4     | 116.15       | 3.18          |
| trpc-router              | 11.4.2   | ✓      | 5555.8     | 179.16       | 1.22          |
