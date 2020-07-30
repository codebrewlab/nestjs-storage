import { DynamicModule, Global, Module } from '@nestjs/common';

import { StorageModuleOptions } from './interfaces';
import { StorageCoreModule } from './storage-core.module';

@Global()
@Module({})
export class StorageModule {
  static forRoot(options: StorageModuleOptions): DynamicModule {
    return {
      module: StorageModule,
      imports: [StorageCoreModule.forRoot(options)],
    };
  }

  static forRootAsync(options: StorageModuleOptions) {
    //
  }
}
