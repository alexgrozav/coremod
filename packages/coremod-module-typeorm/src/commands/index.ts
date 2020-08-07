import * as make from "./make";

export const commands = (cli) => {
    cli.command('make:model <name>', 'Create a model with the given name', (yargs) => {
        console.log(yargs)
        yargs.positional('name', {
            type: 'string',
            describe: 'The name of the model'
        })
    }, make.model)
};
