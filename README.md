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
* __Run:__ Sun Jun 01 2025 02:03:33 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.2 | ✗      | 49103.2    | 19.88        | 8.76          |
| fastify                  | 5.3.3    | ✓      | 47056.0    | 20.75        | 8.44          |
| rayo                     | 1.4.6    | ✓      | 46955.2    | 20.79        | 8.37          |
| connect                  | 3.7.0    | ✗      | 46831.2    | 20.84        | 8.35          |
| polka                    | 0.5.2    | ✓      | 46768.0    | 20.87        | 8.34          |
| server-base              | 7.1.32   | ✗      | 46647.2    | 20.93        | 8.32          |
| micro                    | 10.0.1   | ✗      | 46006.4    | 21.23        | 8.20          |
| 0http                    | 4.2.1    | ✓      | 45880.0    | 21.30        | 8.18          |
| polkadot                 | 1.0.0    | ✗      | 45716.8    | 21.38        | 8.15          |
| server-base-router       | 7.1.32   | ✓      | 45399.2    | 21.53        | 8.10          |
| connect-router           | 2.2.0    | ✓      | 43677.6    | 22.38        | 7.79          |
| adonisjs                 | 7.6.1    | ✓      | 43279.2    | 22.61        | 7.72          |
| micro-route              | 2.5.0    | ✓      | 42784.8    | 22.86        | 7.63          |
| h3                       | 1.15.3   | ✗      | 42768.8    | 22.88        | 7.63          |
| h3-router                | 1.15.3   | ✓      | 41819.2    | 23.42        | 7.46          |
| restana                  | v5.0.0   | ✓      | 41617.6    | 23.54        | 7.42          |
| hono                     | 4.7.11   | ✓      | 40141.6    | 24.40        | 6.58          |
| srvx                     | 0.7.3    | ✗      | 39961.6    | 24.52        | 7.77          |
| whatwg-node-server       | 0.10.10  | ✗      | 38295.2    | 25.61        | 6.83          |
| koa                      | 2.16.1   | ✗      | 37660.6    | 26.05        | 6.72          |
| restify                  | 11.1.0   | ✓      | 35584.2    | 27.59        | 6.41          |
| take-five                | 2.0.0    | ✓      | 35229.0    | 27.87        | 12.67         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35033.8    | 28.04        | 6.25          |
| koa-router               | 13.1.0   | ✓      | 33662.4    | 29.21        | 6.00          |
| hapi                     | 21.4.0   | ✓      | 32034.0    | 30.71        | 5.71          |
| microrouter              | 3.1.3    | ✓      | 30264.8    | 32.52        | 5.40          |
| fastify-big-json         | 5.3.3    | ✓      | 11811.6    | 84.11        | 135.90        |
| express                  | 5.1.0    | ✓      | 10037.2    | 99.05        | 1.79          |
| express-with-middlewares | 5.1.0    | ✓      | 9029.8     | 110.11       | 3.36          |
| trpc-router              | 11.1.4   | ✓      | 5811.6     | 171.26       | 1.28          |
