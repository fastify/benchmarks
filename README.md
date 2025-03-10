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
* __Run:__ Mon Mar 10 2025 01:41:08 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.3 | ✗      | 45317.6    | 21.57        | 8.08          |
| connect                  | 3.7.0    | ✗      | 45144.8    | 21.66        | 8.05          |
| fastify                  | 5.2.1    | ✓      | 44968.0    | 21.74        | 8.06          |
| rayo                     | 1.4.6    | ✓      | 44443.2    | 22.00        | 7.93          |
| polka                    | 0.5.2    | ✓      | 44416.0    | 22.01        | 7.92          |
| server-base              | 7.1.32   | ✗      | 44019.2    | 22.22        | 7.85          |
| server-base-router       | 7.1.32   | ✓      | 43404.8    | 22.54        | 7.74          |
| 0http                    | 4.2.0    | ✓      | 43393.6    | 22.54        | 7.74          |
| micro                    | 10.0.1   | ✗      | 42557.6    | 23.00        | 7.59          |
| connect-router           | 1.3.8    | ✓      | 42188.8    | 23.21        | 7.52          |
| polkadot                 | 1.0.0    | ✗      | 42142.4    | 23.23        | 7.52          |
| micro-route              | 2.5.0    | ✓      | 40912.0    | 23.94        | 7.30          |
| h3                       | 1.15.1   | ✗      | 40132.8    | 24.41        | 7.16          |
| adonisjs                 | 7.5.0    | ✓      | 39357.6    | 24.91        | 7.02          |
| h3-router                | 1.15.1   | ✓      | 38377.6    | 25.57        | 6.84          |
| hono                     | 4.7.4    | ✓      | 37974.4    | 25.83        | 6.23          |
| restana                  | v5.0.0   | ✓      | 36978.4    | 26.55        | 6.59          |
| koa                      | 2.16.0   | ✗      | 35231.4    | 27.88        | 6.28          |
| restify                  | 11.1.0   | ✓      | 34115.8    | 28.81        | 6.15          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33470.0    | 29.37        | 5.97          |
| take-five                | 2.0.0    | ✓      | 33405.8    | 29.43        | 12.01         |
| koa-router               | 13.1.0   | ✓      | 31869.6    | 30.87        | 5.68          |
| hapi                     | 21.4.0   | ✓      | 30198.8    | 32.61        | 5.39          |
| microrouter              | 3.1.3    | ✓      | 28237.6    | 34.91        | 5.04          |
| fastify-big-json         | 5.2.1    | ✓      | 11285.2    | 88.05        | 129.84        |
| express                  | 5.0.1    | ✓      | 9871.4     | 100.70       | 1.76          |
| express-with-middlewares | 5.0.1    | ✓      | 8915.5     | 111.54       | 3.32          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
