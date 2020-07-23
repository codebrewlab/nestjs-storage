import {
  StorageManagerConfig,
  StorageManagerDiskConfig,
} from '@slynova/flydrive';

export interface StorageModuleOptions extends StorageManagerConfig {
  isGlobal?: boolean;
  default: string;
  disks: StorageManagerDiskConfig;
}
