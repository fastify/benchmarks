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
* __Node:__ `v20.19.1`
* __Run:__ Wed May 14 2025 18:00:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.1 | ✗      | 48903.2    | 19.96        | 8.72          |
| polka                    | 0.5.2    | ✓      | 46968.8    | 20.79        | 8.38          |
| server-base-router       | 7.1.32   | ✓      | 46756.0    | 20.88        | 8.34          |
| server-base              | 7.1.32   | ✗      | 46733.6    | 20.89        | 8.33          |
| fastify                  | 5.3.3    | ✓      | 46719.2    | 20.90        | 8.38          |
| rayo                     | 1.4.6    | ✓      | 46676.8    | 20.92        | 8.32          |
| connect                  | 3.7.0    | ✗      | 46200.2    | 21.14        | 8.24          |
| micro                    | 10.0.1   | ✗      | 45782.4    | 21.34        | 8.16          |
| polkadot                 | 1.0.0    | ✗      | 44359.2    | 22.05        | 7.91          |
| 0http                    | 4.2.0    | ✓      | 44284.8    | 22.09        | 7.90          |
| connect-router           | 2.2.0    | ✓      | 43433.6    | 22.51        | 7.75          |
| micro-route              | 2.5.0    | ✓      | 43396.8    | 22.53        | 7.74          |
| adonisjs                 | 7.6.0    | ✓      | 43104.0    | 22.70        | 7.69          |
| h3                       | 1.15.3   | ✗      | 42609.6    | 22.97        | 7.60          |
| h3-router                | 1.15.3   | ✓      | 41182.4    | 23.78        | 7.34          |
| hono                     | 4.7.9    | ✓      | 40329.6    | 24.29        | 6.62          |
| restana                  | v5.0.0   | ✓      | 38638.0    | 25.38        | 6.89          |
| koa                      | 2.16.1   | ✗      | 37315.2    | 26.30        | 6.65          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35786.2    | 27.44        | 6.38          |
| take-five                | 2.0.0    | ✓      | 35620.2    | 27.57        | 12.81         |
| restify                  | 11.1.0   | ✓      | 35569.0    | 27.61        | 6.41          |
| koa-router               | 13.1.0   | ✓      | 33784.6    | 29.09        | 6.03          |
| hapi                     | 21.4.0   | ✓      | 31935.4    | 30.81        | 5.70          |
| microrouter              | 3.1.3    | ✓      | 30664.8    | 32.12        | 5.47          |
| whatwg-node-server       | 0.10.6   | ✗      | 30086.0    | 32.73        | 5.37          |
| fastify-big-json         | 5.3.3    | ✓      | 11758.4    | 84.50        | 135.29        |
| express                  | 5.1.0    | ✓      | 9961.5     | 99.80        | 1.78          |
| express-with-middlewares | 5.1.0    | ✓      | 8971.9     | 110.84       | 3.34          |
| trpc-router              | 11.1.2   | ✓      | 6029.4     | 165.07       | 1.33          |
