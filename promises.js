const posts=[
    {title:"postone",body:"this is postone"},
    {title:"postTwo",body:"this is postTwo"}
    ];
    function getPosts(){
        setTimeout(()=>{
            let output='';
            posts.forEach((post,index)=>{
                output+=`<li>${post.title}</li>`
                document.body.innerHTML=output;
            })
        },1000)
    }
    async function createPost(post){
    const createPost1=  await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                posts.push(post);
                const error=false;
                 if(!error){
                    resolve(`post created`);
                 }
                 else{
                    reject('Error:something went wrong');
                 }
            
            },2000);
       });
       console.log(createPost1);
    }
    /*promiseAll
    const promise1=Promise.resolve("Hello World");
    const promise2=new Promise((resolve,reject)=>
        setTimeout(resolve,2000,"GoodBye"))
    
    const promise3=89;
    Promise.all([promise1,promise2,promise3]).then((values)=>{
        console.log(values);
    });*/

    async function deletePost(){
        const postdel=await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                
                 if(posts.length>0){
                    const lastElement= posts.pop();
                    resolve(lastElement);
                 }
                 else{
                    reject('Array is Empty');
                 }
            
            },3000);
       });
       console.log(postdel);
    }
    createPost({title:"postThree",body:"this is postThree"});
    deletePost();