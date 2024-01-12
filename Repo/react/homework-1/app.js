// app.js

import getData from './getData.js';

(async () => {
  try {
    const userId = 1; // İstediğiniz kullanıcının ID'sini buraya ekleyin
    const result = await getData(userId);
    console.log(result);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
})();
