import { DynamicModule, Module } from '@nestjs/common';

import { StorageModule } from '../../lib';
import { StorageService } from '../../lib/storage.service';

@Module({})
export class AppModule {
  constructor(private readonly storageService: StorageService) {
    console.log('AppModule constructor', storageService);
  }

  static withLocalStorage(): DynamicModule {
    console.log('withLocalStorage');
    return {
      module: AppModule,
      imports: [
        StorageModule.forRoot({
          default: 'local',
          disks: {
            local: {
              driver: 'local',
              config: {
                root: process.cwd(),
              },
            },
          },
        }),
      ],
    };
  }
}
