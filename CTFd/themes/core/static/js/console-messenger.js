function console_message(msg_id) {
	url = '/cli_msg/' + msg_id;
	$.get(url, function(data, status){
		console.log(data);
	});
}