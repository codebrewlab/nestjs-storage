import { Inject, Injectable } from '@nestjs/common';
import { StorageManager } from '@slynova/flydrive';

import { STORAGE_TOKEN } from './storage.constants';

@Injectable()
export class StorageService {
  constructor(
    @Inject(STORAGE_TOKEN)
    private storageManager: StorageManager,
  ) {
    const storage = new StorageManager({
      default: 'local',
    });
    console.log(this.storageManager);
    console.log(storage);
    // storage.disk().getSignedUrl('./');
  }
}
