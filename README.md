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
CI](https://github.com/fastify/fastify/workflows/package-manager-ci/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web
SIte](https://github.com/fastify/fastify/workflows/website/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/website.yml)
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
* __Node:__ `v20.18.2`
* __Run:__ Mon Feb 03 2025 09:26:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.2 | ✗      | 47791.2    | 20.44        | 8.52          |
| polka                    | 0.5.2    | ✓      | 46648.0    | 20.93        | 8.32          |
| polkadot                 | 1.0.0    | ✗      | 46391.2    | 21.06        | 8.27          |
| fastify                  | 5.2.1    | ✓      | 46266.4    | 21.11        | 8.29          |
| connect                  | 3.7.0    | ✗      | 45913.6    | 21.27        | 8.19          |
| server-base-router       | 7.1.32   | ✓      | 45567.2    | 21.44        | 8.13          |
| rayo                     | 1.4.6    | ✓      | 45176.0    | 21.63        | 8.06          |
| 0http                    | 4.1.0    | ✓      | 45141.6    | 21.66        | 8.05          |
| server-base              | 7.1.32   | ✗      | 44826.4    | 21.81        | 7.99          |
| micro                    | 10.0.1   | ✗      | 44471.2    | 21.98        | 7.93          |
| h3                       | 1.14.0   | ✗      | 43591.2    | 22.44        | 7.77          |
| connect-router           | 1.3.8    | ✓      | 43149.6    | 22.67        | 7.69          |
| micro-route              | 2.5.0    | ✓      | 42744.0    | 22.88        | 7.62          |
| h3-router                | 1.14.0   | ✓      | 42338.4    | 23.12        | 7.55          |
| adonisjs                 | 7.4.0    | ✓      | 42082.4    | 23.26        | 7.50          |
| restana                  | v5.0.0   | ✓      | 41513.6    | 23.59        | 7.40          |
| hono                     | 4.6.20   | ✓      | 39740.0    | 24.67        | 6.52          |
| koa                      | 2.15.3   | ✗      | 37470.6    | 26.19        | 6.68          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35357.4    | 27.78        | 6.31          |
| restify                  | 11.1.0   | ✓      | 35079.8    | 28.00        | 6.32          |
| take-five                | 2.0.0    | ✓      | 34660.2    | 28.35        | 12.46         |
| koa-router               | 13.1.0   | ✓      | 32931.8    | 29.86        | 5.87          |
| hapi                     | 21.3.12  | ✓      | 31328.6    | 31.41        | 5.59          |
| microrouter              | 3.1.3    | ✓      | 30105.2    | 32.70        | 5.37          |
| fastify-big-json         | 5.2.1    | ✓      | 11801.6    | 84.18        | 135.79        |
| express                  | 5.0.1    | ✓      | 10524.4    | 94.44        | 1.88          |
| express-with-middlewares | 5.0.1    | ✓      | 9444.9     | 105.28       | 3.51          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
