/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство HOST, равно значению Entity.HOST.
 * Имеет свойство URL, равное '/user'.
 * */
class User {

  HOST = 'http://bhj-diploma.u-w.me';
  URL = '/user';
  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static setCurrent(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
    if(localStorage.getItem('user')) {
      localStorage.removeItem('user');
    }
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current() {
    if(localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'));
    }
    return;
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch( data, callback = f => f ) {
      this.unsetCurrent();
      const options = {
        data: data,
        method: 'GET',
        url: 'http://bhj-diploma.u-w.me' + '/user' + '/current',
          callback: callback
        }
        const response = createRequest(options);
        this.setCurrent(response);
  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login( data = {
                email: 'test@test.ru',
                password: 'abracadabra'
              }, callback = f => f ) {
    const newCallback = (err, response) => {
      console.log(response);
      callback(err, response)
    };
    const options = {
        data: data,
        method: 'POST',
        url: 'http://bhj-diploma.u-w.me' + '/user' + '/register',
        callback: newCallback
    }
    console.log(this.HOST)
    const response = createRequest(options);
  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register( data, callback = f => f ) {
    const newCallback = (err, response) => {
      console.log(response);
      callback(err, response)
    };
    const options = {
        data: data,
        method: 'POST',
        url: 'http://bhj-diploma.u-w.me' + '/user' + '/register',
        callback: newCallback
    }
    const response = createRequest(options);
  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout( data, callback = f => f ) {
    const newCallback = (err, response) => {
      console.log(response);
      callback(err, response)
    };
    const options = {
        data: data,
        method: 'POST',
        url: 'http://bhj-diploma.u-w.me' + '/user' + '/logout',
        callback: newCallback
    }
    const response = createRequest(data, url, newCallback, method);
  }
}
