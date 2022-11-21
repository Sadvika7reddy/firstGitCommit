posts=[
    {title:'post one',body:'the body is one'},
    {title:'post two',body:'the body is two'}
];
let interval;
function getpost()
{
    setTimeout(()=>{
    let output='';
    posts.forEach((post)=> {
        output+=`<li>${post.title}</li>`;
    });
    document.body.innerHTML=output;
},1000);
}
function createPost(post){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post);
        const error=false;
        if(!error){
            resolve();
        }
        else{
            reject('error:Somthing went wrong');
        }
    },2000)
});
}
function deletepost()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error=false;
            if(posts.length>0){
                var last=posts.pop();
                resolve(last);
            }
            else{
                reject('array is empty');
            }
        },1000)
    });
}

createPost({title:'post three',body:'the body is three'})  
   .then(()=>{
    getpost();
    deletepost().then(()=>{
        getpost();
        deletepost().then(()=>{
            getpost();
            deletepost().then(()=>{
                getpost();
                deletepost().then(()=>{})
                .catch((err)=>{
                    console.log(err)
                })
            })
        })
    }
    )

})



   
       