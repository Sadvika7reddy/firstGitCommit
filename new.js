posts=[
    {title:'post one',body:'the body is one',create:new Date().getTime()},
    {title:'post two',body:'the body is two',create:new Date().getTime()}
];
let interval;
function getpost()
{
    clearInterval(interval);
    interval=setInterval(()=>{
    let output='';
    posts.forEach((post)=> {
        output+=`<li>${post.title} at ${(new Date().getTime()-post.create)/1000} by seconds</li>`;
    });
    document.body.innerHTML=output;
},1000);
}
function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000)
}
function creat4ePost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },3000)
}
createPost({title:'post three',body:'the body is three',create:new Date().getTime()},getpost);   
createPost({title:'post four',body:'the body is four',create:new Date().getTime()},getpost);   
       