import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { StorageService } from '../../lib';

describe('local driver', () => {
  let app: INestApplication, storageService: StorageService;

  const fileName = 'local_test.txt',
    fileContent = 'hi local storage test';

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

  it(`put text`, async () => {
    await storageService.getDisk().put(`tests/data/${fileName}`, fileContent);
  });

  it(`get text file`, async () => {
    const res = await storageService.getDisk().get(`tests/data/${fileName}`);
    expect(res.raw).toEqual(fileContent);
  });

  afterEach(async () => {
    await app.close();
  });
});
