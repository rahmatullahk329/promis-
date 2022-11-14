// let d= new Date();


// let post=[
//     {
//         title:'post one',
//         date : `last seen ${d.getSeconds()+5} sec ago`
//     },
//     {
//         title:'post two',
//         date : `last seen ${d.getSeconds()+10} sec ago`
//     },
    
// ]




// // convertin previous m=promised into asyn funiton
// async function convertinIntoAsync(){
//     try{
//         //get post first function to get the 2 post element of an array
//         const getpost=()=>{
//             return new Promise((resolve, reject) => { 
//                 setTimeout(()=>{
//                     post.forEach(e => {
//                         let output = `<li> ${e.title} and ${e.date}</li>`;
//                         document.body.insertAdjacentHTML('beforeend',output)
//                     });
//                     resolve('resolve')
//                 },2000)
//              })
//         }

//         // creting post three
//         const createPost= (postPara)=>{
//             return new Promise((resolve, reject) => {
//                 const err =false;
//                 setTimeout(()=>{
//                     post.push(postPara);
                   
//                     if(!err){
//                         resolve('resolve');
//                     }else{
//                         reject('reject')
//                     }
                    
//                 },500) 
                
//              })
            
//         }

//         // creatinpost 4 over here
//         const createPost4 =(post4th)=>{
//             return new Promise((resolve, reject) => { 
//                 setTimeout(()=>{
//                     post.push(post4th);
//                     resolve('resolved')
//                 },1000)
//              })
//         }

//         // update last avcitvity
//         const updateLasrActivity=()=>{
//             let d = new Date();
//             return new Promise((resolve, reject) => { 
//                 if(d){
//                     resolve('user last activity '+d.getSeconds()+5+ ' sec ago')
//                 }else{
//                     reject('not having date')
//                 }
//              })
//         }
        
//         //deleting post
//         const deletePost=(post)=>{
//             let count = post.length;
//             return new Promise((resolve, reject) => { 
//                 if(count !== 0){
//                     let storeDeletedValue= post.pop()
//                     resolve(storeDeletedValue)
//                     count--;
//                 }else{
//                     reject('array is mepty')
//                 }
//              })
//         }
    

//         // this is calling section
//        await getpost();
//        await createPost({title:'post three', date : `last seen ${d.getSeconds()+15} sec ago`});
//        updateLasrActivity()
//        await deletePost();
//        updateLasrActivity()
//        await deletePost();
//        updateLasrActivity()
//        await deletePost();
//        updateLasrActivity()
//        await createPost4({title:'post four', date : `last seen ${d.getSeconds()+12} sec ago`});
//        updateLasrActivity()
//        // deleting past after 1 hour
//        setTimeout(() => {
//         deletePost();
//         updateLasrActivity()
//        }, 1000);
//     }catch{
//         console.error(err);
//     }
// }
// convertinIntoAsync().then(res => console.log(res))
// .catch(err=> console.log(err))
// // promise.all

// // const p1 = Promise.resolve(4);
// // const p2 = 'red';
// // const p3 =  new Promise((resolve, reject) => { 
// //     resolve('foo')
// //  })

// //  Promise.all([p1,p2,p3])
// //  .then(res => console.log(res))
// //  .catch(err => console.error(err))



// // promised and async and aeait
// async function normalfunc(){
//     const hello=()=>{
//         console.log('hello 1');
//     }
//     const delhiWeather=  new Promise((resolve, reject) => { 
//        setTimeout(() => {
//         resolve('hello 2');
//        }, 3000); 
//      })
//      const bangloareWeather=  new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             resolve('hello 3'); 
//            }, 5000); 
//       })
//       console.log('delhiW is awating ... ');
//      let delhiW= await  delhiWeather;
//      console.log('delhiW is fecthed ... ');

//      console.log('banglore W is awating ... ');
//      let bangW= await bangloareWeather;
//      console.log('banglore W is fetched ... ');


//      return [delhiW,bangW]
// }
// console.log('before normal async function');
// normalfunc().then(t => console.log(t))
// console.log('after normal async function');




// // using promised for pushing student details 
// let student=[
//     {
//         student_name :'rehansh',
//         roll :325,
//         passed :true,
//     },
//     {
//         student_name :'rahul',
//         roll :155,
//         passed :false,
//     }
// ]

// const enrollStudent =(enroll)=>{
//    return new Promise((resolve, reject) => { 
//     setTimeout(() => {
//         if(enroll){
//             student.push(enroll)
//             resolve();
//         }else{
//             reject('rejetc')
//         }
//     }, 1000);
//    })
// }

// const getStudent= (student)=>{
//     return new Promise((resolve, reject) => { 
//         if(student){
//            student.forEach(e => {
//             let lis = `<li> student name ${e.student_name} student passed = ${e.passed}</li>`
//             document.body.insertAdjacentHTML('beforeend',lis)
//            });
//            resolve('resolved')
//         }else{
//             reject('reject')
//         }
//      })
// }
// enrollStudent({
//     student_name :'rohit',
//     roll :125,
//     passed :true,
// }).then((res)=>{
//     getStudent(student).then(res=> console.log(res))

// })

function postReq(firstname,lastname,city,salary){
    axios.post('https://crudcrud.com/api/3b23d7886d5b4da7af884b413484d52c/userDetails',{
    firstname:firstname,
    lastname:lastname,
    jobLocation :city,
    salary :salary
}).then(res => console.log(res))
.catch(err =>{
    return Promise.reject(err)
})
}
postReq('zakir','husain','new delhi','18k')
postReq('rahul','kumar','jaipur','25k')
// axios.delete('https://crudcrud.com/api/3b23d7886d5b4da7af884b413484d52c/userDetails/6372a1e48d2f8f03e8b0fa8d',{

// })
// .then(res => console.log(res))
// .catch(err=> console.log(err))

axios.get('https://crudcrud.com/api/3b23d7886d5b4da7af884b413484d52c/userDetails',{
    params:{_limit:1},
}).then(res => console.log(res))
.catch(err =>{
    return Promise.reject(err)
})