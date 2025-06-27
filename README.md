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
* __Node:__ `v20.19.3`
* __Run:__ Fri Jun 27 2025 07:28:34 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.3 | ✗      | 48486.4    | 20.18        | 8.65          |
| fastify                  | 5.4.0    | ✓      | 47791.2    | 20.40        | 8.57          |
| polka                    | 0.5.2    | ✓      | 47264.8    | 20.64        | 8.43          |
| polkadot                 | 1.0.0    | ✗      | 47067.2    | 20.75        | 8.39          |
| connect                  | 3.7.0    | ✗      | 46561.4    | 20.97        | 8.30          |
| 0http                    | 4.2.1    | ✓      | 46479.2    | 21.03        | 8.29          |
| server-base              | 7.1.32   | ✗      | 46371.2    | 21.03        | 8.27          |
| rayo                     | 1.4.6    | ✓      | 46188.8    | 21.12        | 8.24          |
| micro                    | 10.0.1   | ✗      | 46025.6    | 21.24        | 8.21          |
| server-base-router       | 7.1.32   | ✓      | 45840.0    | 21.29        | 8.17          |
| h3                       | 1.15.3   | ✗      | 44108.0    | 22.18        | 7.87          |
| h3-router                | 1.15.3   | ✓      | 44105.6    | 22.17        | 7.87          |
| connect-router           | 2.2.0    | ✓      | 43733.6    | 22.37        | 7.80          |
| restana                  | v5.0.0   | ✓      | 42971.2    | 22.77        | 7.66          |
| adonisjs                 | 7.7.0    | ✓      | 42584.0    | 22.98        | 7.59          |
| micro-route              | 2.5.0    | ✓      | 42435.2    | 23.06        | 7.57          |
| srvx                     | 0.7.5    | ✗      | 40215.2    | 24.35        | 7.82          |
| whatwg-node-server       | 0.10.10  | ✗      | 37692.8    | 26.01        | 6.72          |
| hono                     | 4.8.3    | ✓      | 37505.6    | 26.22        | 6.15          |
| koa                      | 3.0.0    | ✗      | 36694.6    | 26.74        | 6.54          |
| restify                  | 11.1.0   | ✓      | 35922.6    | 27.32        | 6.47          |
| take-five                | 2.0.0    | ✓      | 35323.4    | 27.80        | 12.70         |
| koa-router               | 13.1.0   | ✓      | 32659.4    | 30.11        | 5.82          |
| hapi                     | 21.4.0   | ✓      | 32582.4    | 30.19        | 5.81          |
| microrouter              | 3.1.3    | ✓      | 30338.8    | 32.46        | 5.41          |
| fastify-big-json         | 5.4.0    | ✓      | 12139.2    | 81.83        | 139.66        |
| express                  | 5.1.0    | ✓      | 10175.0    | 97.69        | 1.81          |
| express-with-middlewares | 5.1.0    | ✓      | 8898.0     | 111.75       | 3.31          |
| trpc-router              | 11.4.2   | ✓      | 5471.7     | 181.96       | 1.21          |
