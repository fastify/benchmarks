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
* __Node:__ `v20.19.4`
* __Run:__ Fri Aug 01 2025 02:04:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.4 | ✗      | 47272.0    | 20.65        | 8.43          |
| connect                  | 3.7.0    | ✗      | 45744.0    | 21.36        | 8.16          |
| rayo                     | 1.4.6    | ✓      | 45485.6    | 21.49        | 8.11          |
| fastify                  | 5.4.0    | ✓      | 45280.8    | 21.60        | 8.12          |
| server-base              | 7.1.32   | ✗      | 45216.0    | 21.63        | 8.06          |
| polka                    | 0.5.2    | ✓      | 45190.4    | 21.65        | 8.06          |
| 0http                    | 4.3.0    | ✓      | 45171.2    | 21.64        | 8.06          |
| polkadot                 | 1.0.0    | ✗      | 45147.2    | 21.65        | 8.05          |
| micro                    | 10.0.1   | ✗      | 45121.6    | 21.67        | 8.05          |
| server-base-router       | 7.1.32   | ✓      | 45046.4    | 21.71        | 8.03          |
| restana                  | v5.1.0   | ✓      | 43814.4    | 22.33        | 7.81          |
| h3                       | 1.15.4   | ✗      | 43321.6    | 22.58        | 7.73          |
| connect-router           | 2.2.0    | ✓      | 42232.8    | 23.18        | 7.53          |
| h3-router                | 1.15.4   | ✓      | 41736.8    | 23.46        | 7.44          |
| adonisjs                 | 7.7.0    | ✓      | 41528.0    | 23.59        | 7.41          |
| micro-route              | 2.5.0    | ✓      | 41158.4    | 23.80        | 7.34          |
| srvx                     | 0.8.2    | ✗      | 39038.4    | 25.12        | 7.59          |
| whatwg-node-server       | 0.10.12  | ✗      | 38876.8    | 25.24        | 6.93          |
| hono                     | 4.8.10   | ✓      | 36824.0    | 26.64        | 6.04          |
| restify                  | 11.1.0   | ✓      | 34957.8    | 28.11        | 6.30          |
| take-five                | 2.0.0    | ✓      | 34806.6    | 28.21        | 12.51         |
| koa                      | 3.0.1    | ✗      | 34214.4    | 28.73        | 6.10          |
| hapi                     | 21.4.0   | ✓      | 31851.8    | 30.89        | 5.68          |
| koa-router               | 13.1.1   | ✓      | 31577.6    | 31.17        | 5.63          |
| microrouter              | 3.1.3    | ✓      | 30710.0    | 32.06        | 5.48          |
| fastify-big-json         | 5.4.0    | ✓      | 11886.6    | 83.58        | 136.76        |
| express                  | 5.1.0    | ✓      | 10278.4    | 96.70        | 1.83          |
| express-with-middlewares | 5.1.0    | ✓      | 9148.0     | 108.70       | 3.40          |
| trpc-router              | 11.4.3   | ✓      | 6292.0     | 158.17       | 1.39          |
