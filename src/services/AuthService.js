import axiosInstance from 'utils/axios'

export default {
  login: data => {
    const { username, password } = data;
    return new Promise(
      (resolve, reject) =>
        setTimeout(() => {
          if (username === 'admin' && password === 'admin') {
            return resolve();
          }
          return reject();
        }, 1000)
      // eslint-disable-next-line function-paren-newline
    );
  },
};
