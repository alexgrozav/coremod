"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUserChecker = void 0;
async function currentUserChecker(model) {
    return (action) => {
        return action.request.user;
    };
}
exports.currentUserChecker = currentUserChecker;
//# sourceMappingURL=currentUserChecker.js.map