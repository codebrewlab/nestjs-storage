import { StorageManagerConfig } from '@slynova/flydrive';
import { DiskConfigType, DriverType } from '../types';

export interface StorageModuleOptions extends StorageManagerConfig {
  isGlobal?: boolean;
  default: string;
  disks: Record<string, StorageDiskConfig>;
}

export interface StorageDiskConfig {
  driver: DriverType | string;
  config: DiskConfigType;
}
