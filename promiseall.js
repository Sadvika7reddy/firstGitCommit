const promise1=Promise.resolve("Hello World")
const promise2=10
const promise3=new Promise((resolve, reject)=>{
	setTimeout(resolve, 2000, "Goodbye")
})

Promise.all([promise1, promise2, promise3]).then(values=>console.log(values))

const posts=[
	{title: "Post 1", body:"This is Post 1", createdAt: new Date(new Date().setTime(new Date().getTime()-5990000))},
	{title: "Post 2", body:"This is Post 2", createdAt: new Date(new Date().setTime(new Date().getTime()-200000))}
]

function getPosts(){
	setTimeout(()=>{
		let output=''
		posts.forEach(post=>{
			output+=`<li>${post.title} : ${post.body} - created ${timeSince(post.createdAt)}</li>`
		})
		document.querySelector('.msg').innerHTML=output
	}, 1000)
}

function timeSince(date) {
	var seconds = Math.floor((new Date() - date) / 1000);
	var interval = seconds / 31536000;
	if (interval > 1) {
		return Math.floor(interval) + " years ago";
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		return Math.floor(interval) + " months ago";
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return Math.floor(interval) + " days ago";
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return Math.floor(interval) + " hours ago";
	}
	interval = seconds / 60;
	if (interval > 1) {
		return Math.floor(interval) + " minutes ago";
	}
	return Math.floor(seconds) + " seconds ago";
}
  

setInterval(getPosts, 1000) 

function createPost(post, time) {
	let createPostPromise=new Promise((resolve, reject)=>{
		setTimeout(()=>{
			post.createdAt=new Date()
			posts.push(post)
			
			const error=false
			if (!error){
				resolve()
			}
			else{
				reject
			}

		}, time);
	})
	let updateLastUserActivityTime=new Promise((resolve,reject)=>{
		setTimeout(resolve, 1000, console.log("Last Activity Time: "+new Date()))})
	Promise.all([posts, new Date().getTime()]).then(values=>console.log(values))
	return createPostPromise
}

let count=0
function deletePost(){
	return new Promise((resolve, reject)=>{
		let myId=setInterval(()=>{
			posts.pop()
			const error=posts.length==0
			if(!error){
				resolve()
			}
			else{
				count++
				clearInterval(myId)
				console.log("Array is empty now")
				reject("Array is empty now")
				if (count==1){
					createPost({title: "Post 4", body:"This is Post 4", createdAt: ""}, 0).then(getPosts).then(deletePost).then(getPosts).catch(err=>console.log(err))
				}
			}
		}, 1500)
	})
}


setTimeout(()=>{
	createPost({title: "Post 3", body:"This is Post 3", createdAt: ""}, 0).then(getPosts)
}, 2000) 

setTimeout(()=>{
	createPost({title: "Post 4", body:"This is Post 4", createdAt: ""}, 0).then(getPosts)
}, 4000) 

setTimeout(()=>{
	let deleteLastPost=new Promise((resolve, reject)=>{
		posts.pop()
		const error=posts.length==0
		if(!error){
			resolve()
		}
		else{
			console.log("Array is empty now")
		}
	})
	Promise.all([posts, getPosts]).then(values=>console.log(values))

}, 6000)