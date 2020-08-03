import {
    CoremodModuleRuntime,
    CoremodModuleOptions,
    CoremodModuleRuntimeConfiguration,
    CoremodModuleRuntimeContext
} from "coremod/src/types";
import * as express from 'express';
import * as favicon from 'serve-favicon';
import { resolve } from "path";

export const runtime: CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    configuration.application
        // Serve static files like images from the public folder
        .use(express.static(configuration.paths.public, { maxAge: 31557600000 }))
        // A favicon is a visual cue that client software, like browsers, use to identify a site
        .use(favicon(resolve(configuration.paths.public, 'favicon.ico')));
};
