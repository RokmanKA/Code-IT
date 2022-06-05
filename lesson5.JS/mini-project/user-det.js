let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
console.log(user);

let userDetailsContainer = document.getElementsByClassName('user-details')[0];
let postsContainer = document.getElementsByClassName('posts')[0];
userDetailsContainer.innerText = `${JSON.stringify(user)}`;

let postsButton = document.createElement('button');
postsButton.innerText = 'show posts of user';
postsButton.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            for (const postItem of value) {
                let postContainer = document.createElement('div');
                postContainer.classList.add('post');
                postContainer.innerText = postItem.title;
                postsContainer.appendChild(postContainer);
            }


        });
};

userDetailsContainer.appendChild(postsButton);