#!/usr/bin/env ts-node
import { resolve } from 'path';
import { Coremod } from './src';
import yargs = require('yargs');
import minimist = require('minimist');

(async () => {
    const argv = minimist(process.argv.slice(2));
    const configurationFile = resolve(argv.config || 'coremod.config.ts');
    const { configuration } = require(configurationFile);
    const coremod = new Coremod(configuration);
    await coremod.initialize();

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



