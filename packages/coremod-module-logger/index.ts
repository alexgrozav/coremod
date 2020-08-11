import { CoremodModule } from 'coremod';
import { configuration, runtime } from './src';

export * from './src';
export default {
    namespace: 'logs',
    configuration,
    runtime
} as CoremodModule;
