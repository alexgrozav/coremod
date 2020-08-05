import {
    CoremodModuleRuntime,
    CoremodModuleOptions,
    CoremodModuleRuntimeConfiguration,
    CoremodModuleRuntimeContext
} from "coremod/src/types";
import * as express from 'express';
import favicon from 'serve-favicon';
import { resolve } from "path";

export const runtime: CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    // Serve static files like images from the public folder
    context.application.use(express.static(configuration.paths.public, configuration.application.public));

    // A favicon is a visual cue that client software, like browsers, use to identify a site
    if (moduleOptions.favicon) {
        context.application.use(favicon(resolve(configuration.paths.public, 'favicon.ico')));
    }
};
