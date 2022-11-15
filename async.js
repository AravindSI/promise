
console.log("person1 shows ticket");
console.log("person2 shows ticket");
const preMovie=async()=>{
    const wifeBringingTics=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
    const addButter=new Promise((resolve,reject)=>resolve(`butter`));
    const getColdDrinks=new Promise((resolve,reject)=>resolve(`coolDrinks`));
   /* let ticket=await wifeBringingTics;
    console.log("wife:i have the tickets");
    console.log("husband:ok lets go");
    console.log("wife:but im hungry i need popcorn");
    let popcorn=await getPopcorn;
    console.log("wife:come lets have some popcorn");
    console.log("husband:ok lets go");
    console.log("wife:my sweet darling");
    let butter=await addButter;
    console.log("wife:add some butter to the popcorn darling");
    console.log("husband:ok my sweetheart");
    console.log("wife:lets go we are late for the movie");
    let coolDrinks=await getColdDrinks;
    console.log("wife:come lets have some coolDrinks");
    console.log("husband:ok lets go darling eat whatever u want");
    console.log("wife:my sweet darling");*/
    //promiseAll
    let ticket=await wifeBringingTics;
    let[popcorn,butter,coolDrinks]=await Promise.all([getColdDrinks,getPopcorn,addButter]);
    console.log(`${popcorn}`,`${coolDrinks}`,`${butter}`);
    return ticket;
}
preMovie().then((m)=>{console.log(` husband shows${m}`)});
console.log("person4 shows ticket");
console.log("person5 shows ticket");


