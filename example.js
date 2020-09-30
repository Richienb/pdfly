const { promises: fs } = require("fs") // eslint-disable-line node/no-unsupported-features/node-builtins
const pdfly = require(".")

module.exports = (async () => {
	const html = await fs.readFile("fixture.html", "utf8")
	const pdf = await pdfly(html)

	await fs.writeFile("output.pdf", pdf)
})()
