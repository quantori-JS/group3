const URL = `https://jsonplaceholder.typicode.com/posts/`
let db
const section = document.querySelector('.content')
const mainButton = document.querySelector('#btn_addPost')
const postId = document.querySelector('#postId')
const addNewPostBtn = document.querySelector('#new_post')


document.addEventListener("DOMContentLoaded", function () {
	let openRequest = indexedDB.open("test", 1);

	openRequest.onupgradeneeded = function (e) {
		let thisDB = e.target.result;

		if (!thisDB.objectStoreNames.contains("posts")) {
			thisDB.createObjectStore("posts", {keyPath: 'id'});
		}
	}

	openRequest.onsuccess = function (e) {
		console.log(e)
		console.log("running onsuccess");
		db = e.target.result;
		mainButton.addEventListener("click", getPosts, false);
	}

	addNewPostBtn.addEventListener("click", readDB)

}, false);

async function getPosts() {

	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await response.json();
	console.log(posts)

	const transaction = db.transaction("posts", "readwrite");
	const store = transaction.objectStore("posts");

	for (let el of posts) {
		const request = store.add(el);

		request.onerror = function (e) {
			console.log("Error", e.target.error.name);
		}

		request.onsuccess = function (e) {
			console.log("ok");
		}
	}
}

function readDB() {
	console.log(postId.value)
	const id = Number(postId.value)
	let post = "";
	let connector = indexedDB.open("test");
	connector.onsuccess = function () {
		let db = connector.result
		let transaction = db.transaction("posts", "readonly");
		let objectStore = transaction.objectStore("posts");
		let ob = objectStore.get(id);
		ob.onsuccess = function () {
			post = ob.result
			section.insertAdjacentHTML("beforeend", `
		<div class='card'>
       		 <h3 class='card-title'>Title: ${post['title']}</h3>
       		 <p class='card-text'>Message: ${post['body']}</p>
   		 </div>`)
		};
	}

}






