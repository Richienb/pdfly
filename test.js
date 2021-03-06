const test = require("ava")
const { promises: fs } = require("fs") // eslint-disable-line node/no-unsupported-features/node-builtins
const pdfly = require(".")

test("main", async t => {
	const html = await fs.readFile("fixture.html", "utf8")
	t.true(Buffer.isBuffer(await pdfly(html)))
})
