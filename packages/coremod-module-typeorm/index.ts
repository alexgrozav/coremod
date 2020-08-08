import { CoremodModule } from 'coremod/src/types';
import { commands, configuration, moduleOptions, runtime } from './src';

export default {
    namespace: 'database',
    configuration,
    moduleOptions,
    runtime,
    commands
} as CoremodModule;
