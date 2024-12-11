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
CI](https://github.com/fastify/fastify/workflows/package-manager-ci/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web
SIte](https://github.com/fastify/fastify/workflows/website/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/website.yml)
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
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.1`
* __Run:__ Wed Dec 11 2024 08:30:31 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| h3                       | 1.13.0   | ✗      | 52312.8    | 18.62        | 9.33          |
| bare                     | v20.18.1 | ✗      | 47473.6    | 20.56        | 8.47          |
| fastify                  | 5.1.0    | ✓      | 46431.2    | 21.03        | 8.32          |
| rayo                     | 1.4.6    | ✓      | 46358.4    | 21.06        | 8.27          |
| polka                    | 0.5.2    | ✓      | 46216.0    | 21.13        | 8.24          |
| connect                  | 3.7.0    | ✗      | 45580.0    | 21.43        | 8.13          |
| polkadot                 | 1.0.0    | ✗      | 45184.8    | 21.63        | 8.06          |
| micro                    | 10.0.1   | ✗      | 44974.4    | 21.73        | 8.02          |
| server-base              | 7.1.32   | ✗      | 44952.8    | 21.75        | 8.02          |
| server-base-router       | 7.1.32   | ✓      | 44593.6    | 21.94        | 7.95          |
| 0http                    | 3.5.3    | ✓      | 44541.6    | 21.95        | 7.94          |
| connect-router           | 1.3.8    | ✓      | 43272.8    | 22.59        | 7.72          |
| micro-route              | 2.5.0    | ✓      | 42278.4    | 23.15        | 7.54          |
| adonisjs                 | 7.3.0    | ✓      | 41523.2    | 23.58        | 7.41          |
| h3-router                | 1.13.0   | ✓      | 41288.0    | 23.72        | 7.36          |
| hono                     | 4.6.13   | ✓      | 39595.2    | 24.76        | 7.06          |
| restana                  | 4.9.9    | ✓      | 38324.0    | 25.60        | 6.83          |
| koa                      | 2.15.3   | ✗      | 36974.6    | 26.54        | 6.59          |
| take-five                | 2.0.0    | ✓      | 34907.8    | 28.14        | 12.55         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34699.4    | 28.29        | 6.19          |
| restify                  | 11.1.0   | ✓      | 34225.2    | 28.71        | 6.17          |
| koa-router               | 13.1.0   | ✓      | 33843.6    | 29.05        | 6.04          |
| hapi                     | 21.3.12  | ✓      | 32089.0    | 30.67        | 5.72          |
| microrouter              | 3.1.3    | ✓      | 30314.4    | 32.47        | 5.41          |
| fastify-big-json         | 5.1.0    | ✓      | 11911.8    | 83.38        | 137.04        |
| express                  | 5.0.1    | ✓      | 9996.8     | 99.44        | 1.78          |
| express-with-middlewares | 5.0.1    | ✓      | 9415.9     | 105.59       | 3.50          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
