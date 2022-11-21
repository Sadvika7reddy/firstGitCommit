const posts=[];
function createPost(post){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const end=posts.push(post);
        const error=false;
        if(!error){
            resolve(end);
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
async function fun1(){
const msg1=await createPost({title:'post three',body:'the body is three'});
const msg2=await deletepost();
console.log(msg2);
const msg3=await createPost({title:'post two',body:'the body is two'});
const msg4=await deletepost();
console.log(msg4);
}
fun1();