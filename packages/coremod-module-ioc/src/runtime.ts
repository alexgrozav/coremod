import {
    CoremodModuleRuntimeConfiguration,
    CoremodModuleRuntimeContext,
    CoremodModuleRuntime,
    CoremodModuleOptions
} from "coremod";

import { useContainer as ormUseContainer } from 'typeorm';
import { useContainer as classValidatorUseContainer } from 'class-validator';
import { useContainer as routingUseContainer } from 'routing-controllers';

import { Container } from 'typedi';

export const runtime: CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    ormUseContainer(Container);
    routingUseContainer(Container);
    classValidatorUseContainer(Container);
};
