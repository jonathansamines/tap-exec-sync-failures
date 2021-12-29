'use strict';

const util = require('util');
const child = require('child_process');
const tap = require('tap');

const exec = util.promisify(child.exec);

const test = tap.test;

test('execSync usage should succeed', async (t) => {
    const program = "console.log('hello')";
    const result = await exec(`node -e "${program}"`);

    console.log(result);

    t.equal(result.stdout.trim(), "hello");
    t.end();
});