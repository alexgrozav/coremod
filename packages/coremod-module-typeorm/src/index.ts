import { CoremodModule } from 'coremod';
import { configuration } from "./configuration";
import { moduleOptions } from "./module-options";
import { runtime } from "./runtime";
import { commands } from "./commands";

export * from './configuration';
export * from './module-options';
export * from './runtime';
export * from './commands';
export * from './dispatch';
export default {
    namespace: 'database',
    configuration,
    moduleOptions,
    runtime,
    commands
} as CoremodModule;
