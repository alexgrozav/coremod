#!/usr/bin/env ts-node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const index_1 = require("./index");
const yargs = require("yargs");
const minimist = require("minimist");
(async () => {
    const argv = minimist(process.argv.slice(2));
    const configurationFile = path_1.resolve(argv.config || 'coremod.config.ts');
    const { configuration } = require(configurationFile);
    const coremod = new index_1.Coremod(configuration);
    coremod.initialize();
    const cli = yargs
        .scriptName("coremod")
        .usage('$0 <cmd> [args]')
        .option('config', {
        alias: 'c',
        type: 'string',
        describe: 'Specify configuration file',
    });
    for (const module of coremod.modules) {
        if (module[0].commands) {
            module[0].commands(cli);
        }
    }
    cli
        .help()
        .argv;
})();
//# sourceMappingURL=cli.js.map