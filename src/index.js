import uniqBy from 'lodash.uniq';

export default function performLocalStorage(action, config = { limit: 15 }) {
  const load = (resolve, reject) => {
    try {
      let data = JSON.parse(localStorage.getItem(config.key)) || [];
      data = data.slice(0, config.limit);
      resolve({ data: { data } });
    } catch (reason) {
      reject(reason);
    }
  };

  const save = (resolve, reject) => {
    try {
      const oldData = JSON.parse(localStorage.getItem(config.key)) || [];
      if (oldData.length >= 15) {
        oldData.pop();
      }
      oldData.unshift(config.data);
      localStorage.removeItem(config.key);
      const newData = uniqBy(oldData, 'id');
      localStorage.setItem(config.key, JSON.stringify(newData));
      resolve({ data: config.data });
    } catch (reason) {
      reject(reason);
    }
  };

  return new Promise((resolve, reject) => {
    if (action === 'load') {
      return load(resolve, reject);
    }

    if (action === 'save') {
      return save(resolve, reject);
    }
  });
}
