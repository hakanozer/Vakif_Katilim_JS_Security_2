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
                sessionStorage.setItem('user', stItem)
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
}