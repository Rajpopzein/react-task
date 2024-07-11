export const addTodo = async (todo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve();
      } else {
        reject('Error adding todo');
      }
    }, 1000);
  });
};

export const deleteTodo = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve();
      } else {
        reject('Error deleting todo');
      }
    }, 1000);
  });
};