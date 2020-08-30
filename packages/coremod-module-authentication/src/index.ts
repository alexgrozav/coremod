import { CoremodModule } from 'coremod';
import { configuration } from "./configuration";
import { moduleOptions } from "./module-options";
import { runtime } from "./runtime";

export * from './configuration';
export * from './module-options';
export * from './runtime';
export * from './models';
export * from './repositories';
export * from './services';
export * from './subscribers';
export * from './errors';
export * from './authentication';

export const module: CoremodModule = {
    namespace: 'authentication',
    configuration,
    moduleOptions,
    runtime
};

export default module;
