import { CoremodModule } from './module';
export interface CoremodConfiguration {
    env?: string;
    modules: Array<CoremodModule | [CoremodModule, any]>;
}
