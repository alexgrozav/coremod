import { CoremodModule } from 'coremod';
import { configuration } from "./configuration";
import { runtime } from "./runtime";
import { moduleOptions } from "./module-options";

export * from './configuration';
export * from './runtime';
export * from './module-options';
export default {
    configuration,
    moduleOptions,
    runtime
} as CoremodModule;
