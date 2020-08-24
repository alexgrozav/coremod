"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = void 0;
const tslib_1 = require("tslib");
const express = tslib_1.__importStar(require("express"));
const serve_favicon_1 = tslib_1.__importDefault(require("serve-favicon"));
const path_1 = require("path");
exports.runtime = (context, configuration, moduleOptions) => {
    // Serve static files like images from the public folder
    context.application.use(express.static(configuration.paths.public, configuration.application.public));
    // A favicon is a visual cue that client software, like browsers, use to identify a site
    if (moduleOptions.favicon) {
        context.application.use(serve_favicon_1.default(path_1.resolve(configuration.paths.public, 'favicon.ico')));
    }
};
//# sourceMappingURL=runtime.js.map