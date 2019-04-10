/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * Наследуется от AsyncForm
 * */
class CreateAccountForm extends AsyncForm {
	constructor( element ) {
		super(element);  
	}
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit( options ) {
  	const result = Account.create(options, (err, res) => {
  		if(res) {
  			this.element.style.display = 'none';
			App.update();
			this.element = null;
  		}
  	});	
  }
}
