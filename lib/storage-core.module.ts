import {
  DynamicModule,
  FactoryProvider,
  Inject,
  Module,
  Provider,
} from '@nestjs/common';
import { StorageService } from './storage.service';

import { STORAGE_TOKEN, STORAGE_MODULE_OPTIONS } from './storage.constants';
import { StorageModuleOptions } from './interfaces';
import { ModuleRef } from '@nestjs/core';

@Module({})
export class StorageCoreModule {
  constructor(
    @Inject(STORAGE_MODULE_OPTIONS)
    private readonly options: StorageModuleOptions,
    private readonly moduleRef: ModuleRef,
  ) {}

  static forRoot(options: StorageModuleOptions): DynamicModule {
    const storageModuleOptions: Provider = {
      provide: STORAGE_MODULE_OPTIONS,
      useValue: options,
    };

    return {
      module: StorageCoreModule,
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
