let expense_amount= document.querySelector('#amount');
let expense_decsript= document.querySelector('#descrip');
let expense_catagory= document.querySelector('#select-tag');
let submit_btn = document.querySelector('#submit_btn');

// creating api link globally so func can access it;
let api = 'https://crudcrud.com/api/c966a90c2acb49c0bd52e72599093113';

submit_btn.addEventListener('click',()=>{
    if(expense_amount.value  && expense_catagory.value && expense_decsript){
        let obj ={
            expense_amount: expense_amount.value,
            expense_decsript:expense_decsript.value,
            expense_catagory :expense_catagory.value,
        }
        axios.post(`${api}/users`,obj)
        .then(res => console.log(res))
        .catch(err => console.log(err));

        setTimeout(() => {
            expense_amount.value =""
            expense_decsript.value =""
            expense_catagory.value =""
        }, 1000);
    }else{
        alert('dont left blank filled value into input field')
    }
});

    // making myJsonData variable for storing the all the crud value
    // axios.get will get data from the crudcrud
     const getDatafromAxios= async ()=>{
       try{
        let res = await axios.get(`${api}/users`);
        let  resData= await res.data;
 
         
         for(let i =0 ;i < resData.length;i++){
             let output = `
             <div class="item" key='${resData[i]._id}'>
             <li><span>expense amount :</span> <span>${resData[i].expense_amount}</span> </li>
             <li><span>expense description :</span> <span>${resData[i].expense_decsript}</span></li>
             <li><span>expense catagory :</span> <span>${resData[i].expense_catagory}</span></li>
             <div id="edit-delete-btn">
             <button type="button" id="delete-btn" value='${resData[i]._id}'>delete</button>
             <button type="button" id="update-btn" value='${resData[i]._id}'>update</button>
           </div>
         </div>
             `
               document.querySelector('.display_area').insertAdjacentHTML('afterbegin',output)
         }
       }
       catch(err){
        console.error(err);
       }
     }
     getDatafromAxios()
     
     
  
        setTimeout(() => {
            let btn = document.querySelectorAll('#delete-btn')
            let updateBtn = document.querySelectorAll('#update-btn')
    
            for(let i =0 ;i < btn.length;i++){
                btn[i].addEventListener('click',()=>{
                     axios.delete(`${api}/users/${btn[i].getAttribute('value')}`)
                     .then(res => console.log(res))
                     .catch(err=> console.log(err))
                   
                })
            }     
            
            // update btn
            for(let i =0 ;i < updateBtn.length;i++){
                updateBtn[i].addEventListener('click',()=>{
                    axios.put(`${api}/users/${updateBtn[i].getAttribute('value')}`,{
                        expense_amount: expense_amount.value,
                        expense_decsript:expense_decsript.value,
                        expense_catagory :expense_catagory.value,
                    })
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
                })
            }
         }, 1000);

 