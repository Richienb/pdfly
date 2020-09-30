/// <reference types="node"/>
import { PDFOptions } from "puppeteer"

/**
Generate a pdf from html.
@param html The html to generate the pdf from.
@param options [Options to pass to puppeteer](https://github.com/puppeteer/puppeteer/blob/v5.3.1/docs/api.md#pagepdfoptions).
@example
```
const { promises: fs } = require("fs")
const pdfly = require(".")

const html = await fs.readFile("file.html", "utf8")
const pdf = await pdfly(html)

await fs.writeFile("output.pdf", pdf)
```
*/
declare function pdfly(html: string, options?: PDFOptions): Promise<Buffer>

export = pdfly
