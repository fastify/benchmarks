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
* __Node:__ `v24.16.0`
* __Run:__ Thu Jun 04 2026 12:59:59 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 5.0.1    | ✓      | 54659.2    | 17.79        | 9.75          |
| h3                       | 1.15.11  | ✗      | 49278.4    | 19.77        | 8.79          |
| h3-router                | 1.15.11  | ✓      | 49219.2    | 19.82        | 8.78          |
| node-http                | v24.16.0 | ✗      | 47817.6    | 20.47        | 8.53          |
| micro                    | 10.0.1   | ✗      | 47080.8    | 20.76        | 8.40          |
| restana                  | v6.0.0   | ✓      | 47000.8    | 20.78        | 11.83         |
| polka                    | 0.5.2    | ✓      | 46411.2    | 21.04        | 8.28          |
| connect                  | 3.7.0    | ✗      | 45796.0    | 21.33        | 8.17          |
| fastify                  | 5.8.5    | ✓      | 45507.2    | 21.47        | 8.16          |
| connect-router           | 2.2.0    | ✓      | 41874.4    | 23.40        | 7.47          |
| hono                     | 4.12.23  | ✓      | 39619.2    | 24.74        | 6.50          |
| whatwg-node-server       | 0.11.0   | ✗      | 39411.0    | 24.91        | 7.03          |
| koa                      | 3.2.1    | ✗      | 34855.0    | 28.19        | 6.22          |
| koa-router               | 15.6.0   | ✓      | 33625.0    | 29.23        | 6.00          |
| adonisjs                 | 7.8.1    | ✓      | 33038.2    | 29.76        | 5.89          |
| hapi                     | 21.4.9   | ✓      | 32952.2    | 29.85        | 5.88          |
| srvx                     | 0.11.16  | ✗      | 27026.0    | 36.49        | 5.26          |
| express                  | 5.2.1    | ✓      | 26267.2    | 37.55        | 4.68          |
| microrouter              | 3.1.3    | ✓      | 25031.6    | 39.44        | 4.46          |
| express-with-middlewares | 5.2.1    | ✓      | 22592.4    | 43.78        | 8.40          |
| fastify-big-json         | 5.8.5    | ✓      | 13244.2    | 74.95        | 152.38        |
| trpc-router              | 11.17.0  | ✓      | 10093.9    | 98.49        | 2.30          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
