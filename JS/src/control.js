let stUser = sessionStorage.getItem('user')
if ( !stUser ) {
    window.location.href = 'index.html'
}

let userObj = null;
try {
    stUser = decrypt(stUser)
    userObj = JSON.parse(stUser)
} catch (error) {
    sessionStorage.removeItem('user')
    window.location.href = 'index.html'
}
