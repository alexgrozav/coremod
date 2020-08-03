import { Coremod } from "coremod";
import { configuration } from './coremod.config';

(async () => {
    const coremod = new Coremod(configuration);

    await coremod.initialize();
    await coremod.run();
})();


