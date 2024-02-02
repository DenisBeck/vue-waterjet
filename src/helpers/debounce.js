export const debounce = (fn, debounceTime) => {
    let isWait = false;
    return async function () {
      if (!isWait) {
        isWait = true;
        await fn();
        setTimeout(() => isWait = false, debounceTime);
      }
    };
  };