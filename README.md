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
* __Node:__ `v20.18.3`
* __Run:__ Mon Mar 03 2025 01:53:40 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.3 | ✗      | 47292.8    | 20.66        | 8.43          |
| connect                  | 3.7.0    | ✗      | 47236.0    | 20.66        | 8.42          |
| fastify                  | 5.2.1    | ✓      | 47169.6    | 20.69        | 8.46          |
| polka                    | 0.5.2    | ✓      | 46867.2    | 20.82        | 8.36          |
| server-base              | 7.1.32   | ✗      | 46503.2    | 21.00        | 8.29          |
| server-base-router       | 7.1.32   | ✓      | 46372.8    | 21.05        | 8.27          |
| rayo                     | 1.4.6    | ✓      | 46209.6    | 21.13        | 8.24          |
| polkadot                 | 1.0.0    | ✗      | 45999.2    | 21.24        | 8.20          |
| 0http                    | 4.2.0    | ✓      | 45824.8    | 21.33        | 8.17          |
| micro                    | 10.0.1   | ✗      | 45672.8    | 21.40        | 8.14          |
| connect-router           | 1.3.8    | ✓      | 43564.0    | 22.44        | 7.77          |
| adonisjs                 | 7.5.0    | ✓      | 42745.6    | 22.89        | 7.62          |
| micro-route              | 2.5.0    | ✓      | 42680.0    | 22.92        | 7.61          |
| h3-router                | 1.15.1   | ✓      | 42102.4    | 23.26        | 7.51          |
| h3                       | 1.15.1   | ✗      | 41487.2    | 23.61        | 7.40          |
| hono                     | 4.7.2    | ✓      | 40604.8    | 24.11        | 6.66          |
| restana                  | v5.0.0   | ✓      | 40044.8    | 24.48        | 7.14          |
| koa                      | 2.16.0   | ✗      | 37512.0    | 26.14        | 6.69          |
| take-five                | 2.0.0    | ✓      | 35540.6    | 27.63        | 12.78         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35132.2    | 27.96        | 6.27          |
| restify                  | 11.1.0   | ✓      | 34847.8    | 28.19        | 6.28          |
| koa-router               | 13.1.0   | ✓      | 33003.4    | 29.80        | 5.89          |
| hapi                     | 21.3.12  | ✓      | 31439.6    | 31.30        | 5.61          |
| microrouter              | 3.1.3    | ✓      | 30807.6    | 31.95        | 5.49          |
| fastify-big-json         | 5.2.1    | ✓      | 11906.6    | 83.43        | 136.98        |
| express                  | 5.0.1    | ✓      | 10187.0    | 97.56        | 1.82          |
| express-with-middlewares | 5.0.1    | ✓      | 9023.9     | 110.17       | 3.36          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
