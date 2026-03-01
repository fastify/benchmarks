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
* __Node:__ `v24.14.0`
* __Run:__ Sun Mar 01 2026 09:05:23 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.4.0    | ✓      | 49739.2    | 19.63        | 8.87          |
| h3                       | 1.15.5   | ✗      | 48085.6    | 20.29        | 8.58          |
| h3-router                | 1.15.5   | ✓      | 46796.8    | 20.89        | 8.34          |
| restana                  | v5.1.0   | ✓      | 46038.4    | 21.23        | 8.21          |
| node-http                | v24.14.0 | ✗      | 46005.6    | 21.22        | 8.20          |
| micro                    | 10.0.1   | ✗      | 44488.0    | 21.98        | 7.93          |
| polka                    | 0.5.2    | ✓      | 44261.6    | 22.11        | 7.89          |
| fastify                  | 5.7.4    | ✓      | 43329.6    | 22.59        | 7.77          |
| connect                  | 3.7.0    | ✗      | 43274.4    | 22.61        | 7.72          |
| connect-router           | 2.2.0    | ✓      | 40575.2    | 24.15        | 7.24          |
| whatwg-node-server       | 0.10.18  | ✗      | 37956.2    | 25.83        | 6.77          |
| hono                     | 4.12.3   | ✓      | 34880.6    | 28.16        | 5.72          |
| adonisjs                 | 7.8.0    | ✓      | 34172.8    | 28.76        | 6.09          |
| koa                      | 3.1.2    | ✗      | 34158.4    | 28.77        | 6.09          |
| hapi                     | 21.4.6   | ✓      | 32122.6    | 30.64        | 5.73          |
| koa-router               | 15.3.1   | ✓      | 32070.8    | 30.68        | 5.72          |
| express                  | 5.2.1    | ✓      | 25623.2    | 38.52        | 4.57          |
| srvx                     | 0.10.1   | ✗      | 25596.0    | 38.56        | 4.98          |
| microrouter              | 3.1.3    | ✓      | 24116.8    | 40.95        | 4.30          |
| express-with-middlewares | 5.2.1    | ✓      | 21660.8    | 45.66        | 8.06          |
| fastify-big-json         | 5.7.4    | ✓      | 12983.0    | 76.48        | 149.38        |
| trpc-router              | 11.10.0  | ✓      | 8750.5     | 113.64       | 1.93          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
