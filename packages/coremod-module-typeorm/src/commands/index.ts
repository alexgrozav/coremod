import * as make from "./make";
import * as db from "./db";

export const commands = (cli) => {
    cli
        .command('make:migration <name>', 'Create a migration with the given name', (yargs) => {
            yargs.positional('name', {
                type: 'string',
                describe: 'The name of the migration'
            })
        }, make.migration)
        .command('make:model <name>', 'Create a model with the given name', (yargs) => {
            yargs.positional('name', {
                type: 'string',
                describe: 'The name of the model'
            });
        }, make.model)
        .command('make:subscriber <name>', 'Create a subscriber with the given name', (yargs) => {
            yargs.positional('name', {
                type: 'string',
                describe: 'The name of the subscriber'
            });
        }, make.subscriber)
        .command('db:drop', 'Drop the database and start clean', () => {}, db.drop)
        .command('db:migrate', 'Run all pending migrations', () => {}, db.migrate)
        .command('db:query <query>', 'Run a query on the database', (yargs) => {
            yargs.positional('query', {
                type: 'string',
                describe: 'The query to execute'
            });
        }, db.query)
        .command('db:revert', 'Revert to previous migration', () => {}, db.revert)
        .command('db:seed', 'Seed database using default seed files', () => {}, db.seed)
        .command('db:seed:dev', 'Seed database using development seed files', () => {}, db.seedDev)
        .command('db:setup', 'Refresh migrations by performing rollback and then running from start with default seeds', () => {}, db.setup)
        .command('db:setup:dev', 'Refresh migrations by performing rollback and then running from start with development seeds', () => {}, db.setupDev)
        .command('db:status', 'Check current migrations status', () => {}, db.status)
        .command('db:sync', 'Synchronize the database', () => {}, db.sync)
};
