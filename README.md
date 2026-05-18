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
* __Node:__ `v24.15.0`
* __Run:__ Mon May 18 2026 20:40:47 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.4.0    | ✓      | 59375.2    | 16.34        | 10.59         |
| node-http                | v24.15.0 | ✗      | 58108.0    | 16.71        | 10.36         |
| polka                    | 0.5.2    | ✓      | 57223.2    | 16.96        | 10.21         |
| fastify                  | 5.8.5    | ✓      | 55716.0    | 17.43        | 9.99          |
| connect                  | 3.7.0    | ✗      | 55486.4    | 17.50        | 9.90          |
| h3-router                | 1.15.11  | ✓      | 54235.2    | 17.94        | 9.67          |
| connect-router           | 2.2.0    | ✓      | 53844.8    | 18.12        | 9.60          |
| micro                    | 10.0.1   | ✗      | 53568.0    | 18.18        | 9.55          |
| restana                  | v6.0.0   | ✓      | 53479.2    | 18.23        | 13.46         |
| hono                     | 4.12.19  | ✓      | 51182.4    | 19.03        | 8.40          |
| whatwg-node-server       | 0.10.18  | ✗      | 50150.4    | 19.46        | 8.94          |
| h3                       | 1.15.11  | ✗      | 49780.8    | 19.59        | 8.88          |
| koa                      | 3.2.0    | ✗      | 44621.6    | 21.96        | 7.96          |
| koa-router               | 15.5.0   | ✓      | 41640.8    | 23.52        | 7.43          |
| hapi                     | 21.4.9   | ✓      | 39248.8    | 24.97        | 7.00          |
| adonisjs                 | 7.8.1    | ✓      | 38364.0    | 25.59        | 6.84          |
| express                  | 5.2.1    | ✓      | 35909.8    | 27.37        | 6.40          |
| srvx                     | 0.11.15  | ✗      | 35482.6    | 27.68        | 6.90          |
| microrouter              | 3.1.3    | ✓      | 32014.6    | 30.74        | 5.71          |
| express-with-middlewares | 5.2.1    | ✓      | 29360.4    | 33.54        | 10.92         |
| fastify-big-json         | 5.8.5    | ✓      | 14377.2    | 69.02        | 165.41        |
| trpc-router              | 11.17.0  | ✓      | 10622.8    | 93.58        | 2.42          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
