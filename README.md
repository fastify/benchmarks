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
* __Node:__ `v20.19.5`
* __Run:__ Thu Nov 06 2025 13:01:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| node-http                | v20.19.5 | ✗      | 47729.6    | 20.46        | 8.51          |
| fastify                  | 5.6.1    | ✓      | 46676.8    | 20.92        | 8.37          |
| polka                    | 0.5.2    | ✓      | 46625.6    | 20.93        | 8.32          |
| connect                  | 3.7.0    | ✗      | 46212.2    | 21.13        | 8.24          |
| 0http                    | 4.3.0    | ✓      | 45732.0    | 21.37        | 8.16          |
| micro                    | 10.0.1   | ✗      | 45344.8    | 21.55        | 8.09          |
| h3-router                | 1.15.4   | ✓      | 44318.4    | 22.07        | 7.90          |
| restana                  | v5.1.0   | ✓      | 43994.4    | 22.23        | 7.85          |
| h3                       | 1.15.4   | ✗      | 43683.2    | 22.39        | 7.79          |
| connect-router           | 2.2.0    | ✓      | 42403.2    | 23.09        | 7.56          |
| adonisjs                 | 7.7.0    | ✓      | 42166.4    | 23.21        | 7.52          |
| whatwg-node-server       | 0.10.15  | ✗      | 38602.4    | 25.41        | 6.88          |
| hono                     | 4.10.4   | ✓      | 37834.4    | 25.91        | 6.21          |
| restify                  | 11.1.0   | ✓      | 35708.6    | 27.50        | 6.44          |
| koa                      | 3.1.1    | ✗      | 34899.0    | 28.16        | 6.22          |
| koa-router               | 14.0.0   | ✓      | 32127.8    | 30.62        | 5.73          |
| hapi                     | 21.4.4   | ✓      | 31961.0    | 30.79        | 5.70          |
| microrouter              | 3.1.3    | ✓      | 30565.2    | 32.21        | 5.45          |
| srvx                     | 0.9.5    | ✗      | 19829.2    | 49.91        | 3.86          |
| fastify-big-json         | 5.6.1    | ✓      | 11753.4    | 84.52        | 135.22        |
| express                  | 5.1.0    | ✓      | 10035.0    | 99.06        | 1.79          |
| express-with-middlewares | 5.1.0    | ✓      | 9259.3     | 107.39       | 3.44          |
| trpc-router              | 11.7.1   | ✓      | 6303.1     | 157.85       | 1.39          |
