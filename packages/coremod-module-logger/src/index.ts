import { CoremodModule } from 'coremod';
import { configuration } from "./configuration";
import { runtime } from "./runtime";

export * from './configuration';
export * from './runtime';
export * from './logger';
export default {
    namespace: 'logs',
    configuration,
    runtime
} as CoremodModule;
