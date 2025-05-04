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
* __Run:__ Sun May 04 2025 14:50:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.1 | ✗      | 47643.2    | 20.49        | 8.50          |
| server-base              | 7.1.32   | ✗      | 46490.4    | 21.00        | 8.29          |
| polka                    | 0.5.2    | ✓      | 46408.0    | 21.03        | 8.28          |
| fastify                  | 5.3.2    | ✓      | 46030.4    | 21.22        | 8.25          |
| server-base-router       | 7.1.32   | ✓      | 46019.2    | 21.24        | 8.21          |
| rayo                     | 1.4.6    | ✓      | 45887.2    | 21.30        | 8.18          |
| connect                  | 3.7.0    | ✗      | 45791.4    | 21.33        | 8.17          |
| micro                    | 10.0.1   | ✗      | 45331.2    | 21.56        | 8.08          |
| polkadot                 | 1.0.0    | ✗      | 45120.8    | 21.67        | 8.05          |
| 0http                    | 4.2.0    | ✓      | 44164.8    | 22.15        | 7.88          |
| h3                       | 1.15.3   | ✗      | 43444.8    | 22.52        | 7.75          |
| connect-router           | 2.2.0    | ✓      | 42862.4    | 22.84        | 7.64          |
| micro-route              | 2.5.0    | ✓      | 42120.0    | 23.26        | 7.51          |
| h3-router                | 1.15.3   | ✓      | 41928.8    | 23.35        | 7.48          |
| adonisjs                 | 7.6.0    | ✓      | 41588.0    | 23.55        | 7.42          |
| hono                     | 4.7.8    | ✓      | 40253.6    | 24.33        | 6.60          |
| restana                  | v5.0.0   | ✓      | 39009.6    | 25.14        | 6.96          |
| koa                      | 2.16.1   | ✗      | 37198.2    | 26.38        | 6.63          |
| restify                  | 11.1.0   | ✓      | 35433.4    | 27.71        | 6.39          |
| take-five                | 2.0.0    | ✓      | 35310.2    | 27.81        | 12.70         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34566.4    | 28.43        | 6.16          |
| koa-router               | 13.1.0   | ✓      | 33364.2    | 29.46        | 5.95          |
| hapi                     | 21.4.0   | ✓      | 30998.2    | 31.75        | 5.53          |
| microrouter              | 3.1.3    | ✓      | 30076.4    | 32.74        | 5.36          |
| fastify-big-json         | 5.3.2    | ✓      | 11831.6    | 83.96        | 136.12        |
| express                  | 5.1.0    | ✓      | 9707.0     | 102.41       | 1.73          |
| express-with-middlewares | 5.1.0    | ✓      | 8965.0     | 110.94       | 3.33          |
| trpc-router              | 11.1.2   | ✓      | 5969.8     | 166.73       | 1.32          |
