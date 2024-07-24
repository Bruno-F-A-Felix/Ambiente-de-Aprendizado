fetch('https://api.github.com/users/octocat')
.then(response => response.json())
.then(data => {
    console.log(data);
})



