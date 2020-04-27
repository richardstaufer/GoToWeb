$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
	
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
     ///$('#formend').fadeIn(500).delay(3000).fadeOut(1000);
	 ///$('#').fadeIn(500).delay(3000).fadeOut(1000);
	 ///$('#').fadeIn(500).delay(3000).fadeOut(1000);
			document.getElementById('formend');
            formend.style.display='block';
			formend.style.visibility='visible';
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});