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
* __Node:__ `v20.19.0`
* __Run:__ Tue Apr 15 2025 08:35:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.0 | ✗      | 46845.0    | 20.84        | 8.35          |
| 0http                    | 4.2.0    | ✓      | 46751.2    | 20.90        | 8.34          |
| connect                  | 3.7.0    | ✗      | 45852.8    | 21.30        | 8.18          |
| fastify                  | 5.3.0    | ✓      | 45700.8    | 21.37        | 8.19          |
| server-base              | 7.1.32   | ✗      | 45163.2    | 21.66        | 8.05          |
| server-base-router       | 7.1.32   | ✓      | 45144.0    | 21.67        | 8.05          |
| micro                    | 10.0.1   | ✗      | 44841.6    | 21.80        | 8.00          |
| polka                    | 0.5.2    | ✓      | 44756.8    | 21.85        | 7.98          |
| rayo                     | 1.4.6    | ✓      | 44616.0    | 21.92        | 7.96          |
| polkadot                 | 1.0.0    | ✗      | 43565.6    | 22.45        | 7.77          |
| h3                       | 1.15.1   | ✗      | 42424.8    | 23.07        | 7.57          |
| connect-router           | 2.2.0    | ✓      | 42348.8    | 23.13        | 7.55          |
| adonisjs                 | 7.6.0    | ✓      | 41837.6    | 23.40        | 7.46          |
| h3-router                | 1.15.1   | ✓      | 41634.4    | 23.52        | 7.42          |
| micro-route              | 2.5.0    | ✓      | 40380.0    | 24.26        | 7.20          |
| hono                     | 4.7.6    | ✓      | 39744.8    | 24.66        | 6.52          |
| restana                  | v5.0.0   | ✓      | 38736.2    | 25.31        | 6.91          |
| koa                      | 2.16.1   | ✗      | 36316.2    | 27.03        | 6.48          |
| take-five                | 2.0.0    | ✓      | 34974.2    | 28.10        | 12.57         |
| restify                  | 11.1.0   | ✓      | 34117.4    | 28.81        | 6.15          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34069.6    | 28.86        | 6.08          |
| koa-router               | 13.1.0   | ✓      | 32246.4    | 30.51        | 5.75          |
| hapi                     | 21.4.0   | ✓      | 31032.4    | 31.72        | 5.53          |
| microrouter              | 3.1.3    | ✓      | 28848.8    | 34.15        | 5.14          |
| fastify-big-json         | 5.3.0    | ✓      | 11673.2    | 85.10        | 134.31        |
| express                  | 5.1.0    | ✓      | 10061.6    | 98.79        | 1.79          |
| express-with-middlewares | 5.1.0    | ✓      | 8888.1     | 111.83       | 3.31          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
