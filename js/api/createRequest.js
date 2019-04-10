/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {

	const { 
		url, 
		headers,
		data,
		responseType,
		method,
		newCallback,
		callback
	} = options;

	if(!url) url = 'https://example.com';
	console.log(data)
	try {
		const xhr = new XMLHttpRequest();
		const formData = new FormData;

		if(method === 'GET' || method === 'DELETE') {
			xhr.open( method, url );
			xhr.send(data);
		} else {
			formData.append( 'data', data );
			xhr.open( method, url );
			xhr.send(formData);
		}

		xhr.onreadystatechange = () => {
			if(xhr.status === 200 && xhr.readyState === 4) {
				callback(null, xhr.responseText);
				console.log(xhr.responseText)
				return xhr;
			}
		};

	}
	catch (e) {
		callback(e);
	}
};
