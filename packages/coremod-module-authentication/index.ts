import { CoremodModule } from 'coremod';
import { configuration, moduleOptions, runtime } from './src';

export * from './src';
export default {
    namespace: 'authentication',
    configuration,
    moduleOptions,
    runtime
} as CoremodModule;
