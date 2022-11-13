let d= new Date();


let post=[
    {
        title:'post one',
        date : `last seen ${d.getSeconds()+5} sec ago`
    },
    {
        title:'post two',
        date : `last seen ${d.getSeconds()+10} sec ago`
    },
    
]

const getpost=()=>{
    setTimeout(()=>{
        post.forEach(e => {
            let output = `<li> ${e.title} and ${e.date}</li>`;
            document.body.insertAdjacentHTML('beforeend',output)
        });
    },2000)
}
const createPost= (postPara)=>{
    return new Promise((resolve, reject) => {
        const err =false;
        setTimeout(()=>{
            post.push(postPara);
           
            if(!err){
                resolve('resolve');
            }else{
                reject('reject')
            }
            
        },500) 
        
     })
    
}



    const createPost4 =(post4th)=>{
        setTimeout(()=>{
            post.push(post4th);
        },1000)
    }

    
// making an object to track last user activity
const updateLasrActivity=()=>{
    let d = new Date();
    return new Promise((resolve, reject) => { 
        if(d){
            resolve('user last activity '+d.getSeconds()+5+ ' sec ago')
        }else{
            reject('not having date')
        }
     })
}

const deletePost=(post)=>{
    let count = post.length;
    return new Promise((resolve, reject) => { 
        if(count !== 0){
            let storeDeletedValue= post.pop()
            resolve(storeDeletedValue)
            count--;
        }else{
            reject('array is mepty')
        }
     })
}

createPost({
    title:'post three',
     date : `last seen ${d.getSeconds()+15} sec ago`
})
.then((res)=>{
    getpost();
    deletePost(post).then((res)=>{
        updateLasrActivity().then(lastActivity => console.log(lastActivity +' and  user deleted '))
        console.log(res);
    });

    deletePost(post).then((res)=>{
        updateLasrActivity().then(lastActivity => console.log(lastActivity +' and  user deleted '))
        console.log(res);
    });
    deletePost(post).then((res)=>{
        updateLasrActivity().then(lastActivity => console.log(lastActivity +' and  user deleted '))
        console.log(res);
    });

   
    createPost4({
        title:'post four',
         date : `last seen ${d.getSeconds()+12} sec ago`
    })
    

    setTimeout(()=>{
        deletePost(post).then((res)=>{
            updateLasrActivity().then(lastActivity => console.log(lastActivity +' and  user deleted '))
            console.log(res);
        });
    },1000)

})
.catch(err=> console.log(err))


// promise.all

// const p1 = Promise.resolve(4);
// const p2 = 'red';
// const p3 =  new Promise((resolve, reject) => { 
//     resolve('foo')
//  })

//  Promise.all([p1,p2,p3])
//  .then(res => console.log(res))
//  .catch(err => console.error(err))



// why promise all is importan
// Promise. all([]) is a useful helper function that lets use execute asynchronous operations in parallel,its asyncrounous it does not depend on other and, the exuction of code run simultinously

// promise vs callback
// A callback function is passed as an argument to another function whereas Promise is something that is achieved or completed in the future. In JavaScript, a promise is an object and we use the promise constructor to initialize a promis
