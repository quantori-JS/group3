const URL = `https://jsonplaceholder.typicode.com/posts/`

const section = document.querySelector('.content')
const mainButton = document.querySelector('#btn_addPost')
let postId = 0;

mainButton.addEventListener('click', addNewPostOnPage)

async function postData(url = '') {
	const response = await fetch(url);
	return await response.json();
}

async function addNewPostOnPage(){
	postId ++
	const post = await postData(`${URL}${postId}`)
		.then((data) => {
			return data;
		});

	section.insertAdjacentHTML("beforeend",`
		<div class='card'>
        <h3 class='card-title'>Title: ${post['title']}</h3>
        <p class='card-text'>Message: ${post['body']}</p>
    </div>`)
}
