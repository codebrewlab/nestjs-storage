import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('s3 driver', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule.withStorage()],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`should load configuration with "s3 driver"`, () => {
    expect('a').toEqual('a');
  });

  afterEach(async () => {
    await app.close();
  });
});
