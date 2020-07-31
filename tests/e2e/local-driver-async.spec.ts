import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AsyncFactoryModule } from '../src/async-factory.module';
import { StorageService } from '../../lib';

describe('async local driver module', () => {
  let app: INestApplication, storageService: StorageService;

  const fileName = 'local_async_test.txt',
    fileContent = 'hi async module local storage test';

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AsyncFactoryModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`should load configuration with "async module local driver"`, async () => {
    storageService = app.get<StorageService>(StorageService);
  });

  it(`async module put text`, async () => {
    await storageService.getDisk().put(`tests/data/${fileName}`, fileContent);
  });

  it(`async module get text file`, async () => {
    const res = await storageService.getDisk().get(`tests/data/${fileName}`);
    expect(res.raw).toEqual(fileContent);
  });

  afterEach(async () => {
    await app.close();
  });
});
