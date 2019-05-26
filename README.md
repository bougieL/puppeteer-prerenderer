puppeteer-prerenderer
=====================

Prerender single page application to multiple static html files.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/puppeteer-prerenderer.svg)](https://npmjs.org/package/puppeteer-prerenderer)
[![Downloads/week](https://img.shields.io/npm/dw/puppeteer-prerenderer.svg)](https://npmjs.org/package/puppeteer-prerenderer)
[![License](https://img.shields.io/npm/l/puppeteer-prerenderer.svg)](https://github.com/bougieL/puppeteer-prerenderer/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @bougiel/puppeteer-prerenderer
$ puppeteer-prerenderer COMMAND
running command...
$ puppeteer-prerenderer (-v|--version|version)
@bougiel/puppeteer-prerenderer/0.0.2 darwin-x64 node-v12.2.0
$ puppeteer-prerenderer --help [COMMAND]
USAGE
  $ puppeteer-prerenderer COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`puppeteer-prerenderer help [COMMAND]`](#puppeteer-prerenderer-help-command)
* [`puppeteer-prerenderer render [DOMAIN]`](#puppeteer-prerenderer-render-domain)
* [`puppeteer-prerenderer serve [DIST]`](#puppeteer-prerenderer-serve-dist)
* [`puppeteer-prerenderer serveRender [DIST]`](#puppeteer-prerenderer-serverender-dist)
* [`puppeteer-prerenderer sitemap DOMAIN`](#puppeteer-prerenderer-sitemap-domain)

## `puppeteer-prerenderer help [COMMAND]`

display help for puppeteer-prerenderer

```
USAGE
  $ puppeteer-prerenderer help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `puppeteer-prerenderer render [DOMAIN]`

render a site or page to static html file(s).

```
USAGE
  $ puppeteer-prerenderer render [DOMAIN]

ARGUMENTS
  DOMAIN  render a domain's pages.

OPTIONS
  -h, --help           show CLI help
  -o, --output=output  [default: /Users/bougie/Projects/puppeteer-prerenderer] output directory.
  -s, --single         render single page only.

EXAMPLE
  $ puppeteer-prerenderer render https://www.bougieblog.cn
```

_See code: [src/commands/render.ts](https://github.com/bougieL/puppeteer-prerenderer/blob/v0.0.2/src/commands/render.ts)_

## `puppeteer-prerenderer serve [DIST]`

serve a SPA bundle.

```
USAGE
  $ puppeteer-prerenderer serve [DIST]

ARGUMENTS
  DIST  [default: .] SPA bundle dir.

OPTIONS
  -b, --base=base  [default: /] SPA base router.
  -h, --help       show CLI help
  -l, --log        wheather show access logs.
  -p, --port=port  [default: 3000] listen port

EXAMPLE
  $ puppeteer-prerenderer serve .
```

_See code: [src/commands/serve.ts](https://github.com/bougieL/puppeteer-prerenderer/blob/v0.0.2/src/commands/serve.ts)_

## `puppeteer-prerenderer serveRender [DIST]`

serve a SPA bundle, then render to static html files.

```
USAGE
  $ puppeteer-prerenderer serveRender [DIST]

ARGUMENTS
  DIST  [default: .] SPA bundle dir.

OPTIONS
  -b, --base=base      [default: /] SPA base router.
  -h, --help           show CLI help
  -o, --output=output  renderd out put dir
  -p, --port=port      [default: 3000] listen port

EXAMPLE
  $ puppeteer-prerenderer serveRender .
```

_See code: [src/commands/serveRender.ts](https://github.com/bougieL/puppeteer-prerenderer/blob/v0.0.2/src/commands/serveRender.ts)_

## `puppeteer-prerenderer sitemap DOMAIN`

serve a SPA bundle.

```
USAGE
  $ puppeteer-prerenderer sitemap DOMAIN

ARGUMENTS
  DOMAIN  site domain.

OPTIONS
  -f, --filename=filename  [default: sitemap]
  -h, --help               show CLI help
  -o, --output=output      [default: .]

EXAMPLE
  $ puppeteer-prerenderer sitemap https://www.bougieblog.cn
```

_See code: [src/commands/sitemap.ts](https://github.com/bougieL/puppeteer-prerenderer/blob/v0.0.2/src/commands/sitemap.ts)_
<!-- commandsstop -->
