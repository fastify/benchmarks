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
* __Node:__ `v24.21.0`
* __Run:__ Mon Oct 12 2026 16:26:53 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version     | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:         | --:    | :-:        | --:          | --:           |
| fastify                  | 5.12.5      | ✓      | 89257.6    | 10.68        | 16.00         |
| node-http                | v24.21.0    | ✗      | 88876.8    | 10.77        | 15.85         |
| 0http                    | 5.1.1       | ✓      | 88459.2    | 10.80        | 15.78         |
| restana                  | 6.1.0       | ✓      | 88012.8    | 10.90        | 15.70         |
| polka                    | 0.5.2       | ✓      | 86872.0    | 11.04        | 15.49         |
| connect                  | 3.7.0       | ✗      | 86849.6    | 11.06        | 15.49         |
| hono                     | 4.13.13     | ✓      | 84884.8    | 11.30        | 13.92         |
| connect-router           | 2.2.0       | ✓      | 83936.0    | 11.44        | 14.97         |
| micro                    | 10.0.1      | ✗      | 83062.4    | 11.56        | 14.81         |
| srvx                     | 1.0.5       | ✗      | 81238.4    | 11.87        | 13.17         |
| adonisjs                 | 9.3.1       | ✓      | 80232.0    | 12.05        | 14.31         |
| elysia                   | 1.4.30      | ✓      | 77915.2    | 12.29        | 12.78         |
| h3                       | 2.0.1-rc.32 | ✓      | 76521.6    | 12.56        | 13.43         |
| koa                      | 3.2.1       | ✗      | 75681.6    | 12.78        | 13.50         |
| whatwg-node-server       | 0.13.0      | ✗      | 71952.0    | 13.38        | 12.83         |
| koa-router               | 15.7.0      | ✓      | 70249.6    | 13.73        | 12.53         |
| restify                  | 12.0.0      | ✓      | 65248.0    | 14.84        | 11.76         |
| hapi                     | 21.4.10     | ✓      | 62316.0    | 15.55        | 11.11         |
| express                  | 5.2.1       | ✓      | 62053.6    | 15.63        | 11.07         |
| microrouter              | 3.1.3       | ✓      | 57695.2    | 16.84        | 10.29         |
| express-with-middlewares | 5.2.1       | ✓      | 53272.8    | 18.28        | 19.81         |
| fastify-big-json         | 5.12.5      | ✓      | 25612.4    | 38.53        | 294.71        |
| trpc-router              | 11.19.0     | ✓      | 21496.4    | 46.00        | 4.90          |
