import { CoremodModule } from "coremod";
import { configuration } from './configuration';
import { runtime } from './runtime';

export const module: CoremodModule = {
    namespace: 'local',
    configuration,
    runtime
};

export default module;
