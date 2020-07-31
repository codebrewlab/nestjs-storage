import { Module } from '@nestjs/common';
import { DriverType, StorageModule } from '../../lib';

@Module({
  imports: [
    StorageModule.forRootAsync({
      useFactory: () => ({
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
    }),
  ],
})
export class AsyncFactoryModule {}
