var sanitizeHTML = function (str) {
	return str.replace(/[^\w. ]/gi, function (c) {
		return '&#' + c.charCodeAt(0) + ';';
	});
};

$("#formRegister").submit( (evt) => {
    const email = $("#email").val()
    const password = $("#password").val()

    const url = 'https://dummyjson.com/auth/login'
    const sendItem = {
        username: email,
        password: password,
    }

    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(sendItem),
        success: function(item) {
            const token = item.token
            if (token) {
                const stItem = JSON.stringify(item)
                sessionStorage.setItem('user', encrypt(stItem))
                window.location.href = 'dashboard.html'
            }else {
                alert("username or password fail")
            }
        },
        error: function(error) {
            console.error(error)
            alert("username or password fail")
        }
    })
    evt.preventDefault()
})

if ( userObj && userObj != 'undefined' && userObj != null ) {
    const firstName = userObj.firstName
    const lastName = userObj.lastName
    $('#userName').html(firstName + " " +lastName )
    const xss = "<script>alert('Hello XSS')</script>"
    $('#dataLine').html( sanitizeHTML(xss) )
}


