import { Global, Module } from '@nestjs/common';
import { STORAGE_SERVICE_TOKEN, STORAGE_TOKEN } from './storage.constants';
import { StorageService } from './storage.service';

@Global()
@Module({
  providers: [
    {
      provide: STORAGE_TOKEN,
      useFactory: () => ({}),
    },
    {
      provide: STORAGE_SERVICE_TOKEN,
      useClass: StorageService,
    },
  ],
  exports: [STORAGE_TOKEN, STORAGE_SERVICE_TOKEN],
})
export class StorageHostModule {}
