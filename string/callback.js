getUser(1, function(user) {
    console.log('User', user)
    console.log(getRepo(user))
})

function getUser (id, callback) {
    setTimeout(()=> {
        console.log('from set time out')
        const data = {
            id: id,
            githubUserName: 'chinmoy709'
        };
        callback(data)
    },2000)
}

function getRepo(user) {
    return ['repo 1', 'repo 2', 'repo 3']
}

