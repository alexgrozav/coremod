import { CoremodModule } from 'coremod';
import { configuration } from "./configuration";
import { moduleOptions } from "./module-options";
import { runtime } from "./runtime";

export * from './configuration';
export * from './module-options';
export * from './runtime';
export default {
    configuration,
    moduleOptions,
    runtime
} as CoremodModule;
