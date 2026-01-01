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
* __Node:__ `v20.19.6`
* __Run:__ Thu Jan 01 2026 01:53:00 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.6 | ✗      | 46979.2    | 20.78        | 8.38          |
| fastify                  | 5.6.2    | ✓      | 46664.0    | 20.92        | 8.37          |
| 0http                    | 4.3.0    | ✓      | 46221.6    | 21.14        | 8.24          |
| connect                  | 3.7.0    | ✗      | 46126.4    | 21.16        | 8.23          |
| micro                    | 10.0.1   | ✗      | 45513.6    | 21.47        | 8.12          |
| polka                    | 0.5.2    | ✓      | 44965.6    | 21.75        | 8.02          |
| h3                       | 1.15.4   | ✗      | 43673.6    | 22.40        | 7.79          |
| h3-router                | 1.15.4   | ✓      | 42632.0    | 22.96        | 7.60          |
| restana                  | v5.1.0   | ✓      | 42618.4    | 22.96        | 7.60          |
| connect-router           | 2.2.0    | ✓      | 42023.2    | 23.31        | 7.49          |
| adonisjs                 | 7.7.0    | ✓      | 41805.6    | 23.42        | 7.45          |
| whatwg-node-server       | 0.10.17  | ✗      | 37992.8    | 25.82        | 6.78          |
| hono                     | 4.11.3   | ✓      | 36694.2    | 26.76        | 6.02          |
| koa                      | 3.1.1    | ✗      | 35085.6    | 28.00        | 6.26          |
| restify                  | 11.1.0   | ✓      | 34346.8    | 28.61        | 6.19          |
| koa-router               | 14.0.0   | ✓      | 32965.8    | 29.84        | 5.88          |
| hapi                     | 21.4.4   | ✓      | 32030.0    | 30.72        | 5.71          |
| microrouter              | 3.1.3    | ✓      | 30524.0    | 32.25        | 5.44          |
| srvx                     | 0.9.8    | ✗      | 19753.6    | 50.11        | 3.84          |
| fastify-big-json         | 5.6.2    | ✓      | 11815.0    | 84.06        | 135.93        |
| express                  | 5.2.1    | ✓      | 9433.1     | 105.42       | 1.68          |
| express-with-middlewares | 5.2.1    | ✓      | 9116.3     | 109.07       | 3.39          |
| trpc-router              | 11.8.1   | ✓      | 5686.1     | 175.06       | 1.25          |
