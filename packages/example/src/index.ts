import 'reflect-metadata';
import { Coremod } from 'coremod';
import { configuration } from '../coremod.config';

(async () => {
    const coremod = new Coremod(configuration);

    coremod.initialize();
    await coremod.run();
})();
