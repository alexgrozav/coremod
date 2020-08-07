#!/usr/bin/env ts-node
import yargs = require('yargs');
import { resolve } from 'path';
import { Coremod } from './src';


(async () => {
    const cli = yargs
        .scriptName("coremod")
        .usage('$0 <cmd> [args]')
        .option('config', {
            alias: 'c',
            type: 'string',
            describe: 'Specify configuration file',
        });

    const configurationFile = resolve(cli.argv.config as string || 'coremod.config.ts');
    const { configuration } = require(configurationFile);
    const coremod = new Coremod(configuration);
    await coremod.initialize();

    console.log(coremod.modules);

    for (const module of coremod.modules) {
        if (module[0].commands) {
            module[0].commands(cli);
        }
    }

    cli
        .help()
        .argv;
})();



