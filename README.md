<p align="center">
    <a href="https://coremod.io/">
        <img src="https://raw.githubusercontent.com/coremod-io/coremod/master/logo.svg" alt="Coremod logo" width=72 height=63>
    </a>
</p>

<h1 align="center">Coremod</h1>

<p align="center">
    Coremod is a lightweight application framework with essential Node.js application modules written in Typescript. Coremod is written and maintained by <a href="https://twitter.com/alexgrozav">@alexgrozav</a>.
    <br/>
    <br/>
    <br/>
    <a href="https://coremod.io">Homepage</a>
    ·
    <a href="https://github.com/coremod-io/coremod/issues">Issue Tracker</a>
</p>

<br/>

<p align="center">
    <a href="https://www.npmjs.com/package/coremod">
        <img src="https://img.shields.io/npm/v/coremod.svg" alt="npm version">
    </a>
    <a href="https://www.npmjs.com/package/coremod">
        <img src="https://img.shields.io/npm/dm/coremod.svg" alt="Downloads">
    </a>
</p>

<br/>
<br/>

## Table of contents
- [Installation](#installation)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Community](#community)
- [Releases](#releases)
- [Versioning](#versioning)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)

## Installation
First, install the Coremod CLI globally.

~~~
npm install -g ts-node coremod
~~~

Next, add Coremod to your project and install all peer dependencies.

~~~
npm install -S coremod
~~~

~~~
coremod --help
~~~

### Modules
Install the Official Coremod modules:

~~~
npm i -S @coremod/ioc
~~~
~~~
npm i -S @coremod/express
~~~
~~~
npm i -S @coremod/public
~~~
~~~
npm i -S @coremod/logger
~~~
~~~
npm i -S @coremod/typeorm
~~~
~~~
npm i -S @coremod/authentication
~~~

### Configuration
Create a file called `coremod.config.ts`. The configuration uses the Babel configuration pattern.

~~~typescript
import { CoremodConfiguration } from 'coremod';

import { module as IOCModule } from '@coremod/ioc';
import { module as LoggerModule } from '@coremod/logger';
import { module as ExpressModule } from '@coremod/express';
import { module as PublicModule } from '@coremod/public';
import { module as TypeORMModule } from '@coremod/typeorm';
import { module as AuthenticationModule } from '@coremod/authentication';

export const configuration: CoremodConfiguration = {
    modules: [
        IOCModule,
        LoggerModule,
        ExpressModule,
        [PublicModule, {
            favicon: false
        }],
        TypeORMModule,
        [AuthenticationModule, {
            configuration: {
                jwt: {
                    secretOrKey: '##helloworld1234##'
                }
            }
        }]
    ]
};
~~~

### Writing a module
Create a local module in `modules/local-module` and add the following starter code to `modules/local-module/index.ts`:

~~~typescript
import {
    CoremodModule,
    CoremodModuleOptions,
    CoremodModuleRuntimeConfiguration,
    CoremodModuleRuntimeContext,
    CoremodModuleRuntime,
    CoremodModuleOptions,
    CoremodModuleRuntimeConfiguration, 
    env
} from 'coremod';

export const configuration: CoremodModuleRuntimeConfiguration = {
    host: env.get('HOST', 'localhost'),
    port: env.get('PORT', '3030')
};

export const runtime: CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    console.log(context, configuration, moduleOptions)
};

export const moduleOptions: CoremodModuleOptions = {
    something: true
};

export const module: CoremodModule = {
    namespace: 'local',
    moduleOptions,
    configuration,
    runtime,
};

export default module;
~~~

Modules have the following format:
- `namespace` is used to wrap the runtime configuration
- `moduleOptions` is used to set the module initialization options, which shouldn't be available to other modules
- `configuration` is merged to the configuration object passed to the runtime function
- `runtime` function used to add and modify the functionality of the application. Gets access to configuration object and context (the object that stores instances such as the Express application or TypeORM connection)

Next, add it to your `coremod.config.ts` file:

~~~typescript
import { resolve } from 'path';
import { CoremodConfiguration } from 'coremod';
import { module as LocalModule } from './modules/local-module';

export const configuration: CoremodConfiguration = {
    modules: [
        [LocalModule, {
            something: true,
            configuration: {
                host: '3031'
            }
        }]
    ]
}
~~~

## Bugs and feature requests
Have a bug or a feature request? Please first search for existing and closed issues.
If your problem or idea is not addressed yet, [please open a new issue](https://github.com/coremod-io/coremod/issues/new).

## Versioning
For increased transparency and backward compatibility,
Coremod is maintained under [the Semantic Versioning guidelines](https://semver.org/).

## Creators
**Alex Grozav**

- <https://twitter.com/alexgrozav>
- <https://facebook.com/alexgrozav>
- <https://github.com/alexgrozav>

## Copyright and license
Code copyright 2020 [Coremod Authors](https://github.com/coremod-io/coremod/graphs/contributors).
Code released under the [MIT License](https://github.com/coremod-io/coremod/blob/master/packages/coremod/LICENSE).
