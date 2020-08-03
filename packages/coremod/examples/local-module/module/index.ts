import { CoremodModule } from "coremod/src/types";
import { configuration } from './configuration';
import { runtime } from './runtime';

export default {
    namespace: 'local',
    configuration,
    runtime
} as CoremodModule;
