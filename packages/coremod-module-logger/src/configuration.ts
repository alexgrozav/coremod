import { CoremodModuleRuntimeConfiguration, env } from "coremod";

export const configuration: CoremodModuleRuntimeConfiguration = {
    level: env.get('LOG_LEVEL', 'debug'),
    json: env.toBoolean(env.get('LOG_JSON', 'true')),
    output: env.get('LOG_OUTPUT', 'dev'),
};
