import { AsyncStorage } from 'react-native';

class StorageHelper {
  static prefix: string = '@mbti';

  public async setItem(key: string, value: string) {
    try {
      await AsyncStorage.setItem(`${StorageHelper.prefix}:${key}`, value)
    } catch (e) {
      console.error(e);
    }
  }

  public async getItem(key: string): Promise<string>;
  public async getItem<T>(key: string, transformer: (retrieved: string) => T): Promise<T>;
  public async getItem<T>(key: string, transformer?: (retrieved: string) => T) {
    try {
      const retrieved = await AsyncStorage.getItem(`${StorageHelper.prefix}:${key}`);
      if (null === retrieved) {
        throw new Error('Inexistent value');
      }

      if (!transformer) {
        return retrieved;
      }

      try {
        return transformer(retrieved);
      } catch (e) {
        throw e;
      }
      
    } catch (e) {
      throw e;
    }
  }

  public async removeItem(key: string): Promise<void> {
    await AsyncStorage.removeItem(`${StorageHelper.prefix}:${key}`);
  }
}

export default new StorageHelper;
