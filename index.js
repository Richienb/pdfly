"use strict"
const puppeteer = require("puppeteer")

module.exports = async (html, options) => {
	if (typeof html !== "string") {
		throw new TypeError(`Expected a string, got ${typeof html}`)
	}

	options = {
		format: "A4",
		...options
	}

	const browser = await puppeteer.launch()
	const page = await browser.newPage()

	page.setContent(html)

	const pdf = await page.pdf(options)

	browser.close()

	return pdf
}
