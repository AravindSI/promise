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
    function createPost(post){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                posts.push(post);
                const error=false;
                 if(!error){
                    resolve();
                 }
                 else{
                    reject('Error:something went wrong');
                 }
            
            },2000);
       });
    }
    //promiseAll
    const promise1=Promise.resolve("Hello World");
    const promise2=new Promise((resolve,reject)=>
        setTimeout(resolve,2000,"GoodBye"))
    
    const promise3=89;
    Promise.all([promise1,promise2,promise3]).then((values)=>{
        console.log(values);
    });
    const user={
       userName:'aravind'
       
    };
    function updatelastActivity(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                user.updatelastActivity=new Date().getTime();
            
            },2000);
       });
    }
    createPost();
    updatelastActivity();

    function deletePost(){
        return new Promise((resolve,reject)=>{
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
    }
    createPost({title:"postThree",body:"this is postThree"})
    .then(()=>{
        getPosts();
           deletePost().then(()=>{
               getPosts();
                   deletePost().then(()=>{
                        getPosts();
                           deletePost().then(()=>{
                            getPosts();
                              deletePost().then(()=>{})
                              .catch((err)=>{
                                console.log("Inside catch block",err);
                              });
                        })
                        .catch((err)=>{
                            console.log("catch block",err);
                        });


                    })
                    .catch((err)=>{
                        console.log("block",err)
                    })




            })
            .catch((err)=>{
                console.log("blla",err);
            })







    });