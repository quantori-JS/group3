const form = document.getElementById('form');
const input = document.getElementById('input');
const storageButton = document.getElementById('storage');
const postList = document.getElementById('postList');
let postID;
let data;

const storage = {
    set: function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },
    get: function (key) {
        return JSON.parse(localStorage.getItem(key));
    },
    remove: function (key) {
        localStorage.removeItem(key);
    },
    clear: function () {
        localStorage.clear();
    }
};

let posts = storage.get('localPosts') || [];

form.addEventListener('submit', async function (event){
    event.preventDefault();
    postID = input.value;
    form.reset();
    if (posts.length === 0 ){
        storage.set('localPosts', posts);
    }
    let itemPosts = posts.filter(item => item.id == postID);
    if (itemPosts.length !== 0) {
        let index = posts.indexOf(itemPosts[0]);
        posts.splice(index, 1);
        posts.unshift(itemPosts[0]);
        render(posts, postList);

    } else {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
        if (response.ok) {
            data = await response.json();
            posts.unshift(data);
            storage.set('localPosts', posts);
            posts = JSON.parse(localStorage.getItem('localPosts'));
            render(posts, postList);
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    }

})

storageButton.addEventListener('click', function () {
    storage.remove('localPosts');
    postList.innerHTML = '';
});

function render(arr, page) {
    page.innerHTML = '';
    arr.forEach(function (item) {
        page.insertAdjacentHTML('beforeend', `
            <ul style="margin-bottom: 10px; list-style: none">
                <li><strong>Номер поста: ${item.id}</strong></li>
                <li>${item.title}</li>
                <li>${item.body}</li>
            </ul>
        `);
    });
}