import { DynamicModule, FactoryProvider, Module } from '@nestjs/common';
import { StorageService } from './storage.service';

import { STORAGE_TOKEN } from './storage.constants';
import { StorageModuleOptions } from './interfaces';

@Module({
  providers: [StorageService],
  exports: [StorageService],
})
export class StorageModule {
  static forRoot(options: StorageModuleOptions): DynamicModule {
    return {
      module: StorageModule,
      global: options.isGlobal,
      providers: [
        {
          provide: STORAGE_TOKEN,
          useValue: options,
        },
      ],
      exports: [StorageService],
    };
  }
}
