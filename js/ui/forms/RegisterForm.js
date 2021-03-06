/**
 * Класс RegisterForm управляет формой
 * регистрации
 * Наследуется от AsyncForm
 * */
class RegisterForm extends AsyncForm {
	constructor() {
		super();
	}
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit( options ) {
  	User.register(options, (err, response) => {
  		console.log(err);
  		console.log(response);
  		App.setState('user-logged');
  		Modal.close();
  	});
  }
}
