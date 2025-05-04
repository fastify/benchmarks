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
* __Node:__ `v20.19.1`
* __Run:__ Sun May 04 2025 17:23:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.1 | ✗      | 47531.2    | 20.54        | 8.48          |
| fastify                  | 5.3.2    | ✓      | 46058.4    | 21.21        | 8.26          |
| polka                    | 0.5.2    | ✓      | 45184.8    | 21.62        | 8.06          |
| server-base              | 7.1.32   | ✗      | 44994.4    | 21.72        | 8.02          |
| polkadot                 | 1.0.0    | ✗      | 44712.0    | 21.87        | 7.97          |
| rayo                     | 1.4.6    | ✓      | 44675.2    | 21.88        | 7.97          |
| server-base-router       | 7.1.32   | ✓      | 43808.0    | 22.33        | 7.81          |
| connect                  | 3.7.0    | ✗      | 43549.4    | 22.46        | 7.77          |
| micro                    | 10.0.1   | ✗      | 43350.4    | 22.57        | 7.73          |
| h3                       | 1.15.3   | ✗      | 43090.4    | 22.71        | 7.68          |
| h3-router                | 1.15.3   | ✓      | 42990.4    | 22.76        | 7.67          |
| 0http                    | 4.2.0    | ✓      | 42741.6    | 22.90        | 7.62          |
| micro-route              | 2.5.0    | ✓      | 41765.6    | 23.44        | 7.45          |
| connect-router           | 2.2.0    | ✓      | 41443.2    | 23.65        | 7.39          |
| adonisjs                 | 7.6.0    | ✓      | 40382.4    | 24.26        | 7.20          |
| restana                  | v5.0.0   | ✓      | 40369.6    | 24.27        | 7.20          |
| hono                     | 4.7.8    | ✓      | 40348.8    | 24.27        | 6.62          |
| koa                      | 2.16.1   | ✗      | 36480.0    | 26.91        | 6.51          |
| take-five                | 2.0.0    | ✓      | 35118.2    | 27.98        | 12.63         |
| restify                  | 11.1.0   | ✓      | 34445.4    | 28.53        | 6.21          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33834.2    | 29.06        | 6.03          |
| koa-router               | 13.1.0   | ✓      | 32123.2    | 30.63        | 5.73          |
| hapi                     | 21.4.0   | ✓      | 32006.0    | 30.74        | 5.71          |
| microrouter              | 3.1.3    | ✓      | 30348.4    | 32.44        | 5.41          |
| fastify-big-json         | 5.3.2    | ✓      | 11464.0    | 86.69        | 131.90        |
| express                  | 5.1.0    | ✓      | 9757.9     | 101.90       | 1.74          |
| express-with-middlewares | 5.1.0    | ✓      | 8818.6     | 112.76       | 3.28          |
| trpc-router              | 11.1.2   | ✓      | 6014.7     | 165.42       | 1.32          |
