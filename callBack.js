const posts=[
    {title:"postone",body:"this is postone",createdAt:new Date().getTime()},
    {title:"postTwo",body:"this is postTwo",createdAt:new Date().getTime()}
    ];
    let intervalId=0;
    function getPosts(){
        clearInterval(intervalId)
        intervalId= setInterval(()=>{
            let output='';
            posts.forEach((post,index)=>{
                output+=`<li>${post.title}-last updated  ${(new Date().getTime()-post.createdAt) /1000}  seconds ago</li>`
                document.body.innerHTML=output;
            })
    createdAt:new Date().getTime()
        },1000)
    }
    function createPost(post,callBack){
           setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()});
            callBack();
    
           },2000);
    }
    
    function createFour(post,callBack){
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()});
            callBack();
    
           },4000);
    
    }
    createPost({title:"postThree",body:"this is postThree"},getPosts);
    createFour({title:"postFour",body:"this is postFour"},getPosts);    