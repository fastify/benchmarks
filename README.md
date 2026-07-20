<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://raw.githubusercontent.com/fastify/graphics/HEAD/fastify-landscape-outlined.svg"
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
* __Node:__ `v24.18.0`
* __Run:__ Mon Jul 20 2026 08:42:02 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 5.1.0    | ✓      | 49952.8    | 19.52        | 8.91          |
| h3                       | 1.15.11  | ✗      | 49298.4    | 19.79        | 8.79          |
| h3-router                | 1.15.11  | ✓      | 48121.6    | 20.29        | 8.58          |
| micro                    | 10.0.1   | ✗      | 45973.6    | 21.24        | 8.20          |
| node-http                | v24.18.0 | ✗      | 45818.4    | 21.31        | 8.17          |
| restana                  | v6.0.1   | ✓      | 45623.2    | 21.42        | 11.49         |
| fastify                  | 5.10.0   | ✓      | 45310.4    | 21.56        | 8.12          |
| polka                    | 0.5.2    | ✓      | 44914.4    | 21.79        | 8.01          |
| connect                  | 3.7.0    | ✗      | 44372.0    | 22.06        | 7.91          |
| connect-router           | 2.2.0    | ✓      | 41573.6    | 23.59        | 7.41          |
| hono                     | 4.12.31  | ✓      | 38773.6    | 25.30        | 6.36          |
| whatwg-node-server       | 0.11.0   | ✗      | 37503.4    | 26.16        | 6.69          |
| koa                      | 3.2.1    | ✗      | 35373.8    | 27.78        | 6.31          |
| koa-router               | 15.7.0   | ✓      | 33036.4    | 29.76        | 5.89          |
| adonisjs                 | 7.8.1    | ✓      | 32814.6    | 29.99        | 5.85          |
| hapi                     | 21.4.9   | ✓      | 32626.6    | 30.15        | 5.82          |
| express                  | 5.2.1    | ✓      | 26765.6    | 36.86        | 4.77          |
| srvx                     | 0.11.22  | ✗      | 26312.4    | 37.49        | 5.12          |
| microrouter              | 3.1.3    | ✓      | 24755.2    | 39.88        | 4.42          |
| express-with-middlewares | 5.2.1    | ✓      | 22084.4    | 44.77        | 8.21          |
| fastify-big-json         | 5.10.0   | ✓      | 13532.0    | 73.34        | 155.69        |
| trpc-router              | 11.18.0  | ✓      | 9141.9     | 108.76       | 2.08          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
