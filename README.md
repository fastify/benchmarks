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
* __Node:__ `v20.19.6`
* __Run:__ Tue Dec 02 2025 08:38:04 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.6 | ✗      | 47898.4    | 20.38        | 8.54          |
| fastify                  | 5.6.2    | ✓      | 47330.4    | 20.63        | 8.49          |
| connect                  | 3.7.0    | ✗      | 46331.2    | 21.08        | 8.26          |
| polka                    | 0.5.2    | ✓      | 46058.4    | 21.21        | 8.21          |
| micro                    | 10.0.1   | ✗      | 44692.8    | 21.87        | 7.97          |
| 0http                    | 4.3.0    | ✓      | 43913.6    | 22.28        | 7.83          |
| h3                       | 1.15.4   | ✗      | 43012.8    | 22.75        | 7.67          |
| connect-router           | 2.2.0    | ✓      | 42675.2    | 22.92        | 7.61          |
| adonisjs                 | 7.7.0    | ✓      | 41866.4    | 23.38        | 7.47          |
| h3-router                | 1.15.4   | ✓      | 41676.8    | 23.50        | 7.43          |
| restana                  | v5.1.0   | ✓      | 41036.8    | 23.87        | 7.32          |
| whatwg-node-server       | 0.10.17  | ✗      | 38301.6    | 25.60        | 6.83          |
| hono                     | 4.10.7   | ✓      | 37111.2    | 26.44        | 6.09          |
| koa                      | 3.1.1    | ✗      | 34753.8    | 28.28        | 6.20          |
| restify                  | 11.1.0   | ✓      | 34571.6    | 28.42        | 6.23          |
| koa-router               | 14.0.0   | ✓      | 32353.6    | 30.40        | 5.77          |
| hapi                     | 21.4.4   | ✓      | 31538.8    | 31.20        | 5.62          |
| microrouter              | 3.1.3    | ✓      | 29692.8    | 33.17        | 5.30          |
| srvx                     | 0.9.7    | ✗      | 19520.1    | 50.71        | 3.80          |
| fastify-big-json         | 5.6.2    | ✓      | 11645.6    | 85.29        | 134.00        |
| express                  | 5.2.1    | ✓      | 10139.2    | 98.04        | 1.81          |
| express-with-middlewares | 5.2.1    | ✓      | 9061.4     | 109.72       | 3.37          |
| trpc-router              | 11.7.2   | ✓      | 6344.6     | 156.86       | 1.40          |
