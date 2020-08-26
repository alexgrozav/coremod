import { CoremodModule } from 'coremod';
import { configuration } from "./configuration";
import { runtime } from "./runtime";

export * from './configuration';
export * from './runtime';
export * from './logger';

export const module: CoremodModule = {
    namespace: 'logs',
    configuration,
    runtime
};

export default module;
