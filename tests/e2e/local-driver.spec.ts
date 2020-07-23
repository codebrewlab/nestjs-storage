import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { StorageService } from '../../lib';

describe('local driver', async () => {
  let app: INestApplication;
  let storageService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule.withLocalStorage()],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`should load configuration with "local driver"`, async () => {
    storageService = app.get<StorageService>(StorageService);
  });

  it(`put `);

  afterEach(async () => {
    await app.close();
  });
});
