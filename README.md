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
* __Run:__ Thu May 15 2025 14:40:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.1 | ✗      | 46288.8    | 21.10        | 8.25          |
| polka                    | 0.5.2    | ✓      | 45348.8    | 21.56        | 8.09          |
| server-base              | 7.1.32   | ✗      | 45302.4    | 21.58        | 8.08          |
| fastify                  | 5.3.3    | ✓      | 45032.8    | 21.71        | 8.07          |
| rayo                     | 1.4.6    | ✓      | 44761.6    | 21.84        | 7.98          |
| micro                    | 10.0.1   | ✗      | 44696.0    | 21.87        | 7.97          |
| server-base-router       | 7.1.32   | ✓      | 44418.4    | 22.01        | 7.92          |
| connect                  | 3.7.0    | ✗      | 44334.4    | 22.06        | 7.91          |
| polkadot                 | 1.0.0    | ✗      | 44254.4    | 22.10        | 7.89          |
| 0http                    | 4.2.0    | ✓      | 43351.2    | 22.56        | 7.73          |
| micro-route              | 2.5.0    | ✓      | 41587.2    | 23.55        | 7.42          |
| adonisjs                 | 7.6.1    | ✓      | 41103.2    | 23.83        | 7.33          |
| connect-router           | 2.2.0    | ✓      | 40783.2    | 24.02        | 7.27          |
| h3                       | 1.15.3   | ✗      | 39900.8    | 24.56        | 7.12          |
| h3-router                | 1.15.3   | ✓      | 39321.6    | 24.93        | 7.01          |
| srvx                     | 0.7.1    | ✗      | 39215.2    | 25.00        | 7.63          |
| restana                  | v5.0.0   | ✓      | 38776.8    | 25.29        | 6.92          |
| hono                     | 4.7.9    | ✓      | 38170.4    | 25.69        | 6.26          |
| koa                      | 2.16.1   | ✗      | 35493.0    | 27.67        | 6.33          |
| take-five                | 2.0.0    | ✓      | 34408.0    | 28.56        | 12.37         |
| restify                  | 11.1.0   | ✓      | 34222.2    | 28.72        | 6.17          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33825.0    | 29.06        | 6.03          |
| koa-router               | 13.1.0   | ✓      | 31722.4    | 31.02        | 5.66          |
| hapi                     | 21.4.0   | ✓      | 30016.8    | 32.81        | 5.35          |
| microrouter              | 3.1.3    | ✓      | 29261.6    | 33.66        | 5.22          |
| whatwg-node-server       | 0.10.6   | ✗      | 29026.0    | 33.95        | 5.18          |
| fastify-big-json         | 5.3.3    | ✓      | 11466.0    | 86.64        | 131.92        |
| express                  | 5.1.0    | ✓      | 9658.0     | 102.94       | 1.72          |
| express-with-middlewares | 5.1.0    | ✓      | 8649.9     | 114.99       | 3.22          |
| trpc-router              | 11.1.2   | ✓      | 6009.0     | 165.65       | 1.32          |
