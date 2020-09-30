# pdfly [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/pdfly/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/pdfly)

Generate a pdf from html.

[![NPM Badge](https://nodei.co/npm/pdfly.png)](https://npmjs.com/package/pdfly)

## Install

```sh
npm install pdfly
```

## Usage

```js
const { promises: fs } = require("fs")
const pdfly = require(".")

const html = await fs.readFile("file.html", "utf8")
const pdf = await pdfly(html)

await fs.writeFile("output.pdf", pdf)
```

## API

### pdfly(html, options?)

#### html

Type: `string`

The html to generate the pdf from.

#### options

Type: `object`

[Options to pass to puppeteer](https://github.com/puppeteer/puppeteer/blob/v5.3.1/docs/api.md#pagepdfoptions).
