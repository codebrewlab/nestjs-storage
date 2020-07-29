import { DynamicModule, Module } from '@nestjs/common';

import { DriverType, StorageModule } from '../../lib';
import { StorageService } from '../../lib/storage.service';

@Module({})
export class AppModule {
  constructor(private readonly storageService: StorageService) {}

  static withLocalStorage(): DynamicModule {
    return {
      module: AppModule,
      imports: [
        StorageModule.forRoot({
          default: 'local',
          disks: {
            local: {
              driver: DriverType.LOCAL,
              config: {
                root: process.cwd(),
              },
            },
          },
        }),
      ],
    };
  }

  static withS3Storage(): DynamicModule {
    return {
      module: AppModule,
      imports: [
        StorageModule.forRoot({
          default: 's3',
          disks: {
            s3: {
              driver: DriverType.S3,
              config: {},
            },
          },
        }),
      ],
    };
  }
}
