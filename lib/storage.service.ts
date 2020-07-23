import { Inject, Injectable } from '@nestjs/common';
import { Storage, StorageManager } from '@slynova/flydrive';

import { STORAGE_TOKEN } from './storage.constants';
import { StorageModuleOptions } from './interfaces';

@Injectable()
export class StorageService {
  private storageManager: StorageManager;

  constructor(@Inject(STORAGE_TOKEN) private options: StorageModuleOptions) {
    this.storageManager = new StorageManager(options);
  }

  getDisk<T extends Storage>(name?: string): T {
    return this.storageManager.disk<T>(name);
  }
}
