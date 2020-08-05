import { CoremodModule } from 'coremod/src/types';
import { configuration, moduleOptions, runtime } from './src';

export default {
    namespace: 'authentication',
    configuration,
    moduleOptions,
    runtime
} as CoremodModule;
