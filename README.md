<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg"
      width="650"
      height="auto"
    />
  </a>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Package Manager
CI](https://github.com/fastify/fastify/workflows/package-manager-ci/badge.svg?branch=master)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web
SIte](https://github.com/fastify/fastify/workflows/website/badge.svg?branch=master)](https://github.com/fastify/fastify/actions/workflows/website.yml)
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
* The benchmarks are run automatically on GitHub actions, which means they run on virtual hardwardware that can suffer from the "noisy neighbor" effect; this means that the results can vary.
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
* __Node:__ `v20.18.1`
* __Run:__ Mon Dec 09 2024 01:57:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 47969.6    | 20.37        | 8.55          |
| fastify                  | 5.1.0    | ✓      | 47085.6    | 20.73        | 8.44          |
| connect                  | 3.7.0    | ✗      | 46552.8    | 20.97        | 8.30          |
| rayo                     | 1.4.6    | ✓      | 46131.2    | 21.16        | 8.23          |
| polka                    | 0.5.2    | ✓      | 46102.4    | 21.18        | 8.22          |
| server-base              | 7.1.32   | ✗      | 45595.2    | 21.42        | 8.13          |
| polkadot                 | 1.0.0    | ✗      | 45545.6    | 21.46        | 8.12          |
| server-base-router       | 7.1.32   | ✓      | 45536.8    | 21.42        | 8.12          |
| micro                    | 10.0.1   | ✗      | 44764.0    | 21.84        | 7.98          |
| 0http                    | 3.5.3    | ✓      | 44570.4    | 21.96        | 7.95          |
| connect-router           | 1.3.8    | ✓      | 42907.2    | 22.80        | 7.65          |
| h3                       | 1.13.0   | ✗      | 42856.0    | 22.84        | 7.64          |
| adonisjs                 | 7.3.0    | ✓      | 42537.6    | 23.00        | 7.59          |
| micro-route              | 2.5.0    | ✓      | 41788.8    | 23.44        | 7.45          |
| h3-router                | 1.13.0   | ✓      | 41465.6    | 23.63        | 7.39          |
| hono                     | 4.6.13   | ✓      | 40682.4    | 24.05        | 7.26          |
| restana                  | 4.9.9    | ✓      | 39013.6    | 25.13        | 6.96          |
| koa                      | 2.15.3   | ✗      | 37448.2    | 26.19        | 6.68          |
| take-five                | 2.0.0    | ✓      | 36091.2    | 27.19        | 12.97         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35534.2    | 27.64        | 6.34          |
| restify                  | 11.1.0   | ✓      | 35288.2    | 27.84        | 6.36          |
| koa-router               | 13.1.0   | ✓      | 34144.4    | 28.78        | 6.09          |
| hapi                     | 21.3.12  | ✓      | 31776.6    | 30.97        | 5.67          |
| microrouter              | 3.1.3    | ✓      | 30701.6    | 32.06        | 5.48          |
| fastify-big-json         | 5.1.0    | ✓      | 11860.2    | 83.78        | 136.45        |
| express                  | 5.0.1    | ✓      | 10198.8    | 97.44        | 1.82          |
| express-with-middlewares | 5.0.1    | ✓      | 9466.5     | 105.03       | 3.52          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
