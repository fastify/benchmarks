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
* __Run:__ Tue Jul 01 2025 01:59:15 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.3 | ✗      | 48940.8    | 19.95        | 8.73          |
| fastify                  | 5.4.0    | ✓      | 47571.2    | 20.52        | 8.53          |
| polkadot                 | 1.0.0    | ✗      | 47542.4    | 20.53        | 8.48          |
| polka                    | 0.5.2    | ✓      | 47040.0    | 20.75        | 8.39          |
| server-base-router       | 7.1.32   | ✓      | 46409.6    | 21.04        | 8.28          |
| connect                  | 3.7.0    | ✗      | 46234.4    | 21.12        | 8.25          |
| rayo                     | 1.4.6    | ✓      | 46180.8    | 21.14        | 8.24          |
| server-base              | 7.1.32   | ✗      | 45599.2    | 21.42        | 8.13          |
| micro                    | 10.0.1   | ✗      | 45558.4    | 21.45        | 8.12          |
| h3-router                | 1.15.3   | ✓      | 44320.0    | 22.07        | 7.90          |
| 0http                    | 4.2.1    | ✓      | 44085.6    | 22.19        | 7.86          |
| h3                       | 1.15.3   | ✗      | 44059.2    | 22.19        | 7.86          |
| connect-router           | 2.2.0    | ✓      | 43342.4    | 22.57        | 7.73          |
| micro-route              | 2.5.0    | ✓      | 42739.2    | 22.90        | 7.62          |
| adonisjs                 | 7.7.0    | ✓      | 42530.4    | 23.01        | 7.58          |
| srvx                     | 0.7.5    | ✗      | 41048.0    | 23.84        | 7.99          |
| restana                  | v5.0.0   | ✓      | 40699.2    | 24.07        | 7.26          |
| whatwg-node-server       | 0.10.10  | ✗      | 39694.4    | 24.70        | 7.08          |
| hono                     | 4.8.3    | ✓      | 37666.4    | 26.05        | 6.18          |
| koa                      | 3.0.0    | ✗      | 37639.0    | 26.07        | 6.71          |
| take-five                | 2.0.0    | ✓      | 35683.0    | 27.50        | 12.83         |
| restify                  | 11.1.0   | ✓      | 34926.2    | 28.12        | 6.30          |
| koa-router               | 13.1.0   | ✓      | 33293.2    | 29.53        | 5.94          |
| hapi                     | 21.4.0   | ✓      | 32131.0    | 30.62        | 5.73          |
| microrouter              | 3.1.3    | ✓      | 29931.2    | 32.90        | 5.34          |
| fastify-big-json         | 5.4.0    | ✓      | 12030.0    | 82.58        | 138.41        |
| express                  | 5.1.0    | ✓      | 10149.0    | 97.94        | 1.81          |
| express-with-middlewares | 5.1.0    | ✓      | 9168.1     | 108.44       | 3.41          |
| trpc-router              | 11.4.3   | ✓      | 6350.5     | 156.73       | 1.40          |
