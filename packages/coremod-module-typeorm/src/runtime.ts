import {
    CoremodModuleRuntime,
    CoremodModuleOptions,
    CoremodModuleRuntimeConfiguration,
    CoremodModuleRuntimeContext
} from "coremod";
import { createConnection, getConnectionOptions } from 'typeorm';
import { useContainer as ormUseContainer } from 'typeorm';
import { Container } from 'typedi';
import { sync as glob } from 'glob';

export const runtime: CoremodModuleRuntime = async (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    ormUseContainer(Container);

    const loadedConnectionOptions = await getConnectionOptions();

    const connectionOptions = Object.assign(loadedConnectionOptions, {
        type: configuration.database.type as any, // See createConnection options for valid types
        host: configuration.database.host,
        port: configuration.database.port,
        username: configuration.database.username,
        password: configuration.database.password,
        database: configuration.database.database,
        synchronize: configuration.database.synchronize,
        logging: configuration.database.logging,
        entities: configuration.paths.entities,
        migrations: configuration.paths.migrations,
    });

    const connection = await createConnection(connectionOptions);

    context.connection = connection;
    context.onExit(() => connection.close());

    const patterns = configuration.paths.subscribers;

    patterns.forEach((pattern) => {
        const files = glob(pattern);

        for (const file of files) {
            import(file);
        }
    });
};
