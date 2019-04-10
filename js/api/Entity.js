/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * Имеет свойство HOST, равно 'http://bhj-diploma.u-w.me'.
 * */
class Entity {

  static HOST = 'http://bhj-diploma.u-w.me';
  static URL = '/user';
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list( data, callback = f => f ) {
    const options = {
      data: data,
      method: 'GET',
      url: 'http://bhj-diploma.u-w.me' + '/user',
      callback: callback
    }
    const response = createRequest(options);
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create( data, callback = f => f ) {
      let NewData = Object.assign({ _method: 'PUT' }, data );
      const options = {
        data: NewData,
        method: 'GET',
        url: 'http://bhj-diploma.u-w.me' + '/user',
        callback: callback
      }
      const xhr = createRequest(options);
      return xhr;
  }

  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get( id = '', data, callback = f => f ) {
      const options = {
        data: data,
        method: 'GET',
        url: 'http://bhj-diploma.u-w.me' + '/user' + '/' + id,
        callback: callback
      }
      const response = createRequest(options);
  }

  /**
   * Обновляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static update( id = '', data, callback = f => f ) {

  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove( id = '', data, callback = f => f ) {
      let NewData = Object.assign({ _method: 'DELETE' }, data );
      const options = {
        data: NewData,
        method: 'POST',
        url: 'http://bhj-diploma.u-w.me' + '/user' + '/' + id,
        callback: callback
      }
      const response = createRequest(options);
  }
}

