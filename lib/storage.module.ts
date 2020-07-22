import { DynamicModule, Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageHostModule } from './storage-host.module';

import { STORAGE_SERVICE_TOKEN } from './storage.constants';

@Module({
  imports: [StorageHostModule],
  providers: [
    {
      provide: StorageService,
      useExisting: STORAGE_SERVICE_TOKEN,
    },
  ],
  exports: [StorageHostModule, StorageService],
})
export class StorageModule {
  static forRoot(): DynamicModule {
    return {
      module: StorageModule,
    };
  }
}
