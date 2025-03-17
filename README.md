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
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.0`
* __Run:__ Mon Mar 17 2025 01:55:28 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.0 | ✗      | 47916.0    | 20.36        | 8.55          |
| connect                  | 3.7.0    | ✗      | 46961.6    | 20.79        | 8.37          |
| fastify                  | 5.2.1    | ✓      | 46949.6    | 20.80        | 8.42          |
| polka                    | 0.5.2    | ✓      | 46751.2    | 20.88        | 8.34          |
| rayo                     | 1.4.6    | ✓      | 46432.8    | 21.03        | 8.28          |
| polkadot                 | 1.0.0    | ✗      | 46178.4    | 21.16        | 8.24          |
| server-base              | 7.1.32   | ✗      | 45974.4    | 21.23        | 8.20          |
| server-base-router       | 7.1.32   | ✓      | 45814.4    | 21.31        | 8.17          |
| 0http                    | 4.2.0    | ✓      | 45524.0    | 21.48        | 8.12          |
| micro                    | 10.0.1   | ✗      | 45043.2    | 21.69        | 8.03          |
| h3                       | 1.15.1   | ✗      | 43981.6    | 22.23        | 7.84          |
| connect-router           | 1.3.8    | ✓      | 42883.2    | 22.80        | 7.65          |
| h3-router                | 1.15.1   | ✓      | 42882.4    | 22.82        | 7.65          |
| micro-route              | 2.5.0    | ✓      | 42711.2    | 22.91        | 7.62          |
| adonisjs                 | 7.5.0    | ✓      | 42040.0    | 23.28        | 7.50          |
| hono                     | 4.7.4    | ✓      | 40176.0    | 24.37        | 6.59          |
| restana                  | v5.0.0   | ✓      | 39890.4    | 24.58        | 7.11          |
| koa                      | 2.16.0   | ✗      | 36746.6    | 26.69        | 6.55          |
| take-five                | 2.0.0    | ✓      | 35736.6    | 27.46        | 12.85         |
| restify                  | 11.1.0   | ✓      | 35421.8    | 27.75        | 6.38          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34857.0    | 28.18        | 6.22          |
| koa-router               | 13.1.0   | ✓      | 32836.6    | 29.94        | 5.86          |
| hapi                     | 21.4.0   | ✓      | 32366.0    | 30.40        | 5.77          |
| microrouter              | 3.1.3    | ✓      | 30345.2    | 32.44        | 5.41          |
| fastify-big-json         | 5.2.1    | ✓      | 11869.2    | 83.68        | 136.56        |
| express                  | 5.0.1    | ✓      | 10218.0    | 97.27        | 1.82          |
| express-with-middlewares | 5.0.1    | ✓      | 9055.6     | 109.81       | 3.37          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
