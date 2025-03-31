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
* __Run:__ Mon Mar 31 2025 01:58:26 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.0 | ✗      | 47618.4    | 20.50        | 8.49          |
| fastify                  | 5.2.2    | ✓      | 46107.2    | 21.18        | 8.27          |
| connect                  | 3.7.0    | ✗      | 45997.6    | 21.23        | 8.20          |
| rayo                     | 1.4.6    | ✓      | 45794.4    | 21.33        | 8.17          |
| 0http                    | 4.2.0    | ✓      | 45770.4    | 21.36        | 8.16          |
| polka                    | 0.5.2    | ✓      | 45142.4    | 21.65        | 8.05          |
| micro                    | 10.0.1   | ✗      | 45024.0    | 21.71        | 8.03          |
| server-base-router       | 7.1.32   | ✓      | 44692.8    | 21.87        | 7.97          |
| polkadot                 | 1.0.0    | ✗      | 44479.2    | 21.98        | 7.93          |
| server-base              | 7.1.32   | ✗      | 44231.2    | 22.11        | 7.89          |
| micro-route              | 2.5.0    | ✓      | 42449.6    | 23.06        | 7.57          |
| connect-router           | 1.3.8    | ✓      | 42324.8    | 23.13        | 7.55          |
| h3                       | 1.15.1   | ✗      | 41917.6    | 23.36        | 7.48          |
| h3-router                | 1.15.1   | ✓      | 41517.6    | 23.58        | 7.40          |
| adonisjs                 | 7.6.0    | ✓      | 41447.2    | 23.63        | 7.39          |
| hono                     | 4.7.5    | ✓      | 40376.0    | 24.27        | 6.62          |
| restana                  | v5.0.0   | ✓      | 39154.4    | 25.04        | 6.98          |
| koa                      | 2.16.0   | ✗      | 36159.8    | 27.16        | 6.45          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35197.8    | 27.91        | 6.28          |
| take-five                | 2.0.0    | ✓      | 34491.4    | 28.49        | 12.40         |
| restify                  | 11.1.0   | ✓      | 34061.0    | 28.85        | 6.14          |
| koa-router               | 13.1.0   | ✓      | 32545.4    | 30.22        | 5.80          |
| hapi                     | 21.4.0   | ✓      | 31310.8    | 31.43        | 5.58          |
| microrouter              | 3.1.3    | ✓      | 30014.4    | 32.81        | 5.35          |
| fastify-big-json         | 5.2.2    | ✓      | 11638.2    | 85.38        | 133.91        |
| express                  | 5.0.1    | ✓      | 10168.8    | 97.73        | 1.81          |
| express-with-middlewares | 5.0.1    | ✓      | 9066.0     | 109.63       | 3.37          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
