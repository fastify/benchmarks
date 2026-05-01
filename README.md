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
* __Run:__ Fri May 01 2026 03:04:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.4.0    | ✓      | 54972.0    | 17.66        | 9.80          |
| h3                       | 1.15.11  | ✗      | 53089.6    | 18.35        | 9.47          |
| restana                  | v5.2.0   | ✓      | 53064.0    | 18.32        | 9.46          |
| h3-router                | 1.15.11  | ✓      | 49902.4    | 19.55        | 8.90          |
| node-http                | v24.15.0 | ✗      | 47573.6    | 20.57        | 8.48          |
| fastify                  | 5.8.5    | ✓      | 47491.2    | 20.54        | 8.51          |
| connect                  | 3.7.0    | ✗      | 47105.6    | 20.70        | 8.40          |
| micro                    | 10.0.1   | ✗      | 46713.6    | 20.90        | 8.33          |
| polka                    | 0.5.2    | ✓      | 46392.8    | 21.05        | 8.27          |
| connect-router           | 2.2.0    | ✓      | 43162.4    | 22.67        | 7.70          |
| whatwg-node-server       | 0.10.18  | ✗      | 39509.4    | 24.80        | 7.05          |
| hono                     | 4.12.16  | ✓      | 36821.4    | 26.66        | 6.04          |
| koa                      | 3.2.0    | ✗      | 35345.4    | 27.85        | 6.30          |
| hapi                     | 21.4.8   | ✓      | 34197.8    | 28.74        | 6.10          |
| adonisjs                 | 7.8.1    | ✓      | 33946.4    | 28.95        | 6.05          |
| koa-router               | 15.4.0   | ✓      | 33127.8    | 29.68        | 5.91          |
| express                  | 5.2.1    | ✓      | 27810.0    | 35.45        | 4.96          |
| srvx                     | 0.11.15  | ✗      | 26905.2    | 36.66        | 5.23          |
| microrouter              | 3.1.3    | ✓      | 25181.6    | 39.21        | 4.49          |
| express-with-middlewares | 5.2.1    | ✓      | 22995.6    | 42.97        | 8.55          |
| fastify-big-json         | 5.8.5    | ✓      | 14229.8    | 69.73        | 163.71        |
| trpc-router              | 11.17.0  | ✓      | 9210.0     | 107.96       | 2.10          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
