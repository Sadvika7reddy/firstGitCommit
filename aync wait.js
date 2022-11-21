console.log("person1:shows the ticket");
console.log("person2:shows the ticket");
const preMovie=async()=>{
    const wifebringstheTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },1000)
    })
    const getpopcorn=new Promise((resolve,reject)=>{
        resolve(`popcorn`);
    })
    const getbutter=new Promise((resolve,reject)=>{
        resolve(`butter`);
    })
    const getcoldDrinks=new Promise((resolve,reject)=>{
        resolve(`coolDrinks`);
    })
    let ticket=await wifebringstheTicket;
    console.log(`wife:i got the ${ticket}`);
    console.log("husband:lets got in ");
    console.log("wife:i am hungry");
    let popcorn=await getpopcorn;
    console.log("husband:ur popcorn");
    console.log("wife:i want butter");
    let butter=await getbutter;
    console.log(`husband:i brought the ${butter}`);
    console.log("wife:i want coodrinks");
    let coolDrinks=await getcoldDrinks;
    console.log("husband :i brought the cooldrinks");
    return ticket;
}
preMovie().then((t)=>console.log(`person3:shows the${t}`));