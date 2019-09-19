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
$ ppr COMMAND
running command...
$ ppr (-v|--version|version)
@bougiel/puppeteer-prerenderer/0.0.4 darwin-x64 node-v10.16.0
$ ppr --help [COMMAND]
USAGE
  $ ppr COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ppr autocomplete [SHELL]`](#ppr-autocomplete-shell)
* [`ppr help [COMMAND]`](#ppr-help-command)
* [`ppr render [DOMAIN]`](#ppr-render-domain)
* [`ppr serve [DIST]`](#ppr-serve-dist)
* [`ppr serveRender [DIST]`](#ppr-serverender-dist)
* [`ppr sitemap DOMAIN`](#ppr-sitemap-domain)
* [`ppr update [CHANNEL]`](#ppr-update-channel)

## `ppr autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ ppr autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ ppr autocomplete
  $ ppr autocomplete bash
  $ ppr autocomplete zsh
  $ ppr autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.0/src/commands/autocomplete/index.ts)_

## `ppr help [COMMAND]`

display help for ppr

```
USAGE
  $ ppr help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `ppr render [DOMAIN]`

render a site or page to static html file(s).

```
USAGE
  $ ppr render [DOMAIN]

ARGUMENTS
  DOMAIN  render a domain's pages.

OPTIONS
  -h, --help           show CLI help
  -o, --output=output  [default: /Users/bougie/Projects/puppeteer-prerenderer] output directory.
  -s, --single         render single page only.

EXAMPLE
  $ puppeteer-prerenderer render https://www.bougieblog.cn
```

_See code: [src/commands/render.ts](https://github.com/bougieL/puppeteer-prerenderer/blob/v0.0.4/src/commands/render.ts)_

## `ppr serve [DIST]`

serve a SPA bundle.

```
USAGE
  $ ppr serve [DIST]

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

_See code: [src/commands/serve.ts](https://github.com/bougieL/puppeteer-prerenderer/blob/v0.0.4/src/commands/serve.ts)_

## `ppr serveRender [DIST]`

serve a SPA bundle, then render to static html files.

```
USAGE
  $ ppr serveRender [DIST]

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

_See code: [src/commands/serveRender.ts](https://github.com/bougieL/puppeteer-prerenderer/blob/v0.0.4/src/commands/serveRender.ts)_

## `ppr sitemap DOMAIN`

serve a SPA bundle.

```
USAGE
  $ ppr sitemap DOMAIN

ARGUMENTS
  DOMAIN  site domain.

OPTIONS
  -f, --filename=filename  [default: sitemap]
  -h, --help               show CLI help
  -o, --output=output      [default: .]

EXAMPLE
  $ puppeteer-prerenderer sitemap https://www.bougieblog.cn
```

_See code: [src/commands/sitemap.ts](https://github.com/bougieL/puppeteer-prerenderer/blob/v0.0.4/src/commands/sitemap.ts)_

## `ppr update [CHANNEL]`

update the ppr CLI

```
USAGE
  $ ppr update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.9/src/commands/update.ts)_
<!-- commandsstop -->
