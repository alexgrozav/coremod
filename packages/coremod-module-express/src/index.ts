import { CoremodModule } from 'coremod';
import { configuration } from "./configuration";
import { runtime } from "./runtime";

export * from './configuration';
export * from './runtime';
export default {
    configuration,
    runtime
} as CoremodModule;
