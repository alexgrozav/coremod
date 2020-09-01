"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawn = void 0;
const spawnProcess = require('child_process').spawn;
exports.spawn = async (command, args, options) => {
    return new Promise((resolve, reject) => {
        const child = spawnProcess(command, args, options);
        let stdout = '';
        let stderr = '';
        // add a 'data' event listener for the spawn instance
        child.stdout.on('data', (data) => {
            stdout += data.toString();
        });
        // add a 'data' event listener for the spawn instance
        child.stderr.on('data', (data) => {
            stderr += data.toString();
        });
        // when the spawn child process exits, check if there were any errors and close the writeable stream
        child.on('exit', (code) => {
            console.log(stdout);
            if (code !== 0 || stderr) {
                reject(stderr);
            }
            resolve(stdout);
        });
    });
};
//# sourceMappingURL=spawn.js.map