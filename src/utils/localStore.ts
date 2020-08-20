/**
 * @description 本地存储，对 localstorage 的简单封装
 */

const store = window.localStorage;
class localStore {
  // 存数据
  public static set(key: string, value: any) {
    if (!store) return;
    if (typeof value === "object") {
      try {
        store.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    }
  }
  // 取数据
  public static get(key: string) {
    if (!store) return;
    try {
      return JSON.parse(store.getItem(key) || "{}");
    } catch (error) {
      console.log(error);
    }
  }

  // 移除数据
  public static remove(key: string) {
    if (!store) return;
    try {
      store.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }

  // 移除所有数据
  public static removeAll() {
    if (!store) return;
    try {
      store.clear();
    } catch (error) {
      console.log(error);
    }
  }
}

export default localStore;
