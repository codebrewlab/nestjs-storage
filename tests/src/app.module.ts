import { DynamicModule, Module } from '@nestjs/common';

import { StorageModule } from '../../lib';
import { StorageService } from '../../lib/storage.service';

@Module({})
export class AppModule {
  constructor(private readonly storageService: StorageService) {
    console.log(storageService);
  }

  static withStorage(): DynamicModule {
    return {
      module: AppModule,
      imports: [StorageModule.forRoot()],
    };
  }
}
