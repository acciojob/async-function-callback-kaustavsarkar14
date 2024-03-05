const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
const btn = document.getElementById('btn')
btn.addEventListener('click', getData)

async function getData(){
	const res = await fetch(url)
	const data = await res.json()
	document.getElementById('output').innerText = data.title
}