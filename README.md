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
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.3`
* __Run:__ Sun Mar 09 2025 19:07:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.3 | ✗      | 47544.0    | 20.54        | 8.48          |
| polkadot                 | 1.0.0    | ✗      | 46952.0    | 20.80        | 8.37          |
| 0http                    | 4.2.0    | ✓      | 46448.8    | 21.03        | 8.28          |
| polka                    | 0.5.2    | ✓      | 46329.6    | 21.07        | 8.26          |
| rayo                     | 1.4.6    | ✓      | 46201.6    | 21.13        | 8.24          |
| server-base-router       | 7.1.32   | ✓      | 46108.0    | 21.17        | 8.22          |
| fastify                  | 5.2.1    | ✓      | 45900.0    | 21.27        | 8.23          |
| connect                  | 3.7.0    | ✗      | 45862.4    | 21.29        | 8.18          |
| server-base              | 7.1.32   | ✗      | 45358.4    | 21.55        | 8.09          |
| micro                    | 10.0.1   | ✗      | 44908.8    | 21.77        | 8.01          |
| h3                       | 1.15.1   | ✗      | 43577.6    | 22.44        | 7.77          |
| connect-router           | 1.3.8    | ✓      | 43255.2    | 22.61        | 7.71          |
| h3-router                | 1.15.1   | ✓      | 42664.0    | 22.94        | 7.61          |
| micro-route              | 2.5.0    | ✓      | 42540.8    | 23.01        | 7.59          |
| adonisjs                 | 7.5.0    | ✓      | 41691.2    | 23.48        | 7.44          |
| hono                     | 4.7.4    | ✓      | 40610.4    | 24.12        | 6.66          |
| restana                  | v5.0.0   | ✓      | 39767.2    | 24.65        | 7.09          |
| koa                      | 2.16.0   | ✗      | 37300.0    | 26.30        | 6.65          |
| take-five                | 2.0.0    | ✓      | 35467.4    | 27.69        | 12.75         |
| restify                  | 11.1.0   | ✓      | 35345.8    | 27.79        | 6.37          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35277.8    | 27.84        | 6.29          |
| koa-router               | 13.1.0   | ✓      | 33617.2    | 29.24        | 5.99          |
| hapi                     | 21.4.0   | ✓      | 31837.0    | 30.91        | 5.68          |
| microrouter              | 3.1.3    | ✓      | 29872.8    | 32.96        | 5.33          |
| fastify-big-json         | 5.2.1    | ✓      | 12057.4    | 82.39        | 138.71        |
| express                  | 5.0.1    | ✓      | 10114.8    | 98.29        | 1.80          |
| express-with-middlewares | 5.0.1    | ✓      | 9348.4     | 106.34       | 3.48          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
