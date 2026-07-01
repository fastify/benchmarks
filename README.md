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
* __Run:__ Wed Jul 01 2026 07:51:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 5.1.0    | ✓      | 60232.8    | 16.12        | 10.74         |
| node-http                | v24.18.0 | ✗      | 57754.4    | 16.79        | 10.30         |
| polka                    | 0.5.2    | ✓      | 57505.6    | 16.86        | 10.26         |
| h3                       | 1.15.11  | ✗      | 56387.2    | 17.24        | 10.06         |
| h3-router                | 1.15.11  | ✓      | 55882.4    | 17.39        | 9.97          |
| connect                  | 3.7.0    | ✗      | 55756.0    | 17.44        | 9.94          |
| fastify                  | 5.9.0    | ✓      | 55040.0    | 17.69        | 9.87          |
| connect-router           | 2.2.0    | ✓      | 53723.2    | 18.14        | 9.58          |
| restana                  | v6.0.0   | ✓      | 53431.2    | 18.22        | 13.45         |
| micro                    | 10.0.1   | ✗      | 53343.2    | 18.26        | 9.51          |
| hono                     | 4.12.27  | ✓      | 50514.4    | 19.29        | 8.29          |
| whatwg-node-server       | 0.11.0   | ✗      | 49392.8    | 19.76        | 8.81          |
| koa                      | 3.2.1    | ✗      | 44704.8    | 21.84        | 7.97          |
| koa-router               | 15.6.0   | ✓      | 41094.4    | 23.82        | 7.33          |
| hapi                     | 21.4.9   | ✓      | 39247.2    | 24.97        | 7.00          |
| adonisjs                 | 7.8.1    | ✓      | 38145.4    | 25.70        | 6.80          |
| express                  | 5.2.1    | ✓      | 36230.4    | 27.10        | 6.46          |
| srvx                     | 0.11.18  | ✗      | 34553.2    | 28.43        | 6.72          |
| microrouter              | 3.1.3    | ✓      | 31428.8    | 31.31        | 5.60          |
| express-with-middlewares | 5.2.1    | ✓      | 29607.6    | 33.27        | 11.01         |
| fastify-big-json         | 5.9.0    | ✓      | 14846.2    | 66.80        | 170.81        |
| trpc-router              | 11.18.0  | ✓      | 11176.0    | 88.90        | 2.55          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
