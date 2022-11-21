console.log("person1:shows the ticket");
console.log("person2:shows the ticket");
const wifebringstheTicket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },1000)
}) 
const getpopcorn=wifebringstheTicket.then((t)=>{
    console.log("wife:i got the tickets");
    console.log("husband:lets got in ");
    console.log("wife:i am hungry");
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`);
    })
}
);
const getbutter=getpopcorn.then((t)=>{
    console.log("husband:ur popcorn");
    console.log("wife:i want butter");
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`)
    })
});
getbutter.then((t)=>console.log(t));