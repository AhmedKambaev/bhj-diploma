/**
 * Класс AccountsWidget управляет блоком
 * отображения счетов в боковой колонке
 * */
class AccountsWidget {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью
   * AccountsWidget.registerEvents()
   * Вызывает AccountsWidget.update() для получения
   * списка счетов и последующего отображения
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    // if(element) {
    //   this.element = element;
    //   else console.error('null');
    //   AccountsWidget.registerEvents();
    //   AccountsWidget.update(); 
    // }
  }

  /**
   * При нажатии на .create-account открывает окно
   * #modal-new-account для создания нового счёта
   * При нажатии на один из существующих счетов
   * (которые отображены в боковой колонке),
   * вызывает AccountsWidget.onSelectAccount()
   * */
  registerEvents() {
    document.querySelector('.create-account').onclick = () => {
      App.getModal(createAccount);
      AccountsWidget.onSelectAccount();
    };
  }

  /**
   * Метод доступен только авторизованным пользователям
   * (User.current()).
   * Если пользователь авторизован, необходимо
   * получить список счетов через Account.list(). При
   * успешном ответе необходимо очистить список ранее
   * отображённых счетов через AccountsWidget.clear().
   * Отображает список полученных счетов с помощью
   * метода render()
   * */
  update() {
    const user = User.current();
    if(user) {
      const account = Account.list(user);
      for(let i = 0; i < account.length; i++) {
        AccountsWidget.clear();
        AccountsWidget.render(account[i]);
      }
    }
  }

  /**
   * Отрисовывает массив счетов с помощью
   * метода renderItem
   * */
  render( data ) {

  }

  /**
   * Очищает список ранее отображённых счетов.
   * Для этого необходимо удалять все элементы .account
   * в боковой колонке
   * */
  clear() {
    const accounts = document.querySelectorAll('.account');

    for(let i = 0; i < accounts.length; i++) {
      accounts[i].style.display = 'none';
    }
  }

  /**
   * Срабатывает в момент выбора счёта
   * Устанавливает текущему выбранному элементу счёта
   * класс .active. Удаляет ранее выбранному элементу
   * счёта класс .active.
   * Вызывает App.showPage( 'transactions', { account_id: id_счёта });
   * */
  onSelectAccount( element ) {
    if(element) {
      element.classList.add('active');
      this.element.classList.remove('active');
      // const xhr = 
    }
  }

  /**
   * Возвращает HTML-код счёта для последующего
   * отображения в боковой колонке.
   * item - объект с данными о счёте
   * */
  getAccountHTML( item ) {
    return `
      <li class="active account" data-id="35">
          <a href="#">
              <span>Сбербанк</span> /
              <span>2,396.30 ₽</span>
          </a>
      </li>
    `;
  }

  /**
   * Отображает полученный с помощью метода
   * AccountsWidget.getAccountHTML HTML-код элемента
   * и добавляет его внутрь элемента виджета
   * */
  renderItem( item ) {
      const html = AccountsWidget.getAccountHTML();
      if(html) {
        this.element.innerHTML = html;
      }
  }
}
