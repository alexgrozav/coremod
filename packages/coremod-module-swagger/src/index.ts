import { CoremodModule } from 'coremod';
import { configuration } from "./configuration";
import { moduleOptions } from "./module-options";
import { runtime } from "./runtime";

export * from './configuration';
export * from './module-options';
export * from './runtime';

export const module: CoremodModule = {
    namespace: 'swagger',
    configuration,
    moduleOptions,
    runtime
};

export default module;
