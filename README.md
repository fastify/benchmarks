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
* __Node:__ `v20.18.2`
* __Run:__ Mon Feb 10 2025 01:49:59 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.2.1    | ✓      | 48440.8    | 20.15        | 8.68          |
| bare                     | v20.18.2 | ✗      | 48114.4    | 20.29        | 8.58          |
| rayo                     | 1.4.6    | ✓      | 47088.8    | 20.73        | 8.40          |
| polka                    | 0.5.2    | ✓      | 46978.4    | 20.78        | 8.38          |
| polkadot                 | 1.0.0    | ✗      | 46848.8    | 20.85        | 8.36          |
| server-base-router       | 7.1.32   | ✓      | 46481.6    | 21.00        | 8.29          |
| connect                  | 3.7.0    | ✗      | 46210.4    | 21.14        | 8.24          |
| 0http                    | 4.1.0    | ✓      | 46050.4    | 21.22        | 8.21          |
| server-base              | 7.1.32   | ✗      | 45738.4    | 21.37        | 8.16          |
| micro                    | 10.0.1   | ✗      | 45225.6    | 21.61        | 8.07          |
| connect-router           | 1.3.8    | ✓      | 43334.4    | 22.57        | 7.73          |
| micro-route              | 2.5.0    | ✓      | 43301.6    | 22.58        | 7.72          |
| h3                       | 1.15.0   | ✗      | 43218.4    | 22.64        | 7.71          |
| adonisjs                 | 7.4.0    | ✓      | 42939.2    | 22.78        | 7.66          |
| h3-router                | 1.15.0   | ✓      | 41656.0    | 23.51        | 7.43          |
| restana                  | v5.0.0   | ✓      | 40768.8    | 24.03        | 7.27          |
| hono                     | 4.7.0    | ✓      | 40049.6    | 24.46        | 6.57          |
| koa                      | 2.15.3   | ✗      | 36661.8    | 26.77        | 6.54          |
| restify                  | 11.1.0   | ✓      | 36501.8    | 26.89        | 6.58          |
| take-five                | 2.0.0    | ✓      | 35809.8    | 27.43        | 12.87         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34607.0    | 28.39        | 6.17          |
| koa-router               | 13.1.0   | ✓      | 33751.2    | 29.12        | 6.02          |
| hapi                     | 21.3.12  | ✓      | 31507.0    | 31.23        | 5.62          |
| microrouter              | 3.1.3    | ✓      | 30988.0    | 31.76        | 5.53          |
| fastify-big-json         | 5.2.1    | ✓      | 11960.6    | 83.05        | 137.61        |
| express                  | 5.0.1    | ✓      | 10467.0    | 94.95        | 1.87          |
| express-with-middlewares | 5.0.1    | ✓      | 9701.6     | 102.47       | 3.61          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
