import { CoremodModule } from 'coremod';
import { commands, configuration, moduleOptions, runtime } from './src';

export * from './src';
export default {
    namespace: 'database',
    configuration,
    moduleOptions,
    runtime,
    commands
} as CoremodModule;
