// GET REQUEST
function getTodos() {
    axios.get('https://jsonplaceholder.typicode.com/posts',{
      params: {_limit:7},
    }).then(res => showOutput(res))
    .catch(err => console.log(err))
  }

  
  // POST REQUEST
  function addTodo() {
    axios.post('https://jsonplaceholder.typicode.com/posts',{
        title : 'i am very exited to use axios' ,
        body:'this is my body' 
    }).then(post => showOutput(post))
    .catch(err => console.log(err))
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios.patch('https://jsonplaceholder.typicode.com/posts/3',{
      title : ' this is the put mehtod ' ,
        body:' i updated the value just at 5:25 pm' 
    }).then(post => showOutput(post))
    .catch(err => console.log(err))
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/posts/3',{

    }).then(post => showOutput(post))
    .catch(err => console.log(err))
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    // get 2 api simultaneuslu
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/posts',{ params: {_limit:5}}),
      axios.get('https://jsonplaceholder.typicode.com/todos',{ params: {_limit:5}})
    ]).then(axios.spread((todos,post)=>{
      console.log(post);
      console.log(todos);
    }))
    .catch(err => console.log(err))
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    const config= {
      headers :{
        'Content-Type' :'application/json',
        Athorizatoin:'sometaken'
      }
    }
    axios.post('https://jsonplaceholder.typicode.com/posts',{
        title : 'i am very exited to use axios' ,
        body:'this is my body' 
    },
    config
    )
    .then(post => showOutput(post))
    .catch(err => console.log(err))
  }
  
  // TRANSFORMING REQUESTS & RESPONSES // devoloper not use that much;
  function transformResponse() {
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    axios.get('https://jsonplaceholder.typicode.com/pos',{
      params: {_limit:7},
    }).then(res => showOutput(res))
    .catch((err)=>{
      if(err.response){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }
      if(err.response.status == 404){
        alert('404 page not found')
      }else if( err.request){
        console.log(err.request);
      }else{
        console.log(err.message);
      }
    })
  }
  

  // axios global
  axios.defaults.headers.common['X-Auth_token']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  // CANCEL TOKEN
  function cancelToken() {
    const source = axios.cancelToken.source()
    axios.get('https://jsonplaceholder.typicode.com/posts',{
      params: {_limit:7},
      cancelToken :source.token,
    }).then(res => showOutput(res))
    .catch(thrown=>{
      if(axios.isCancel(thrown)){
        console.log(`axios is canceled ${thrown.message}`);
      }
    })
    if(true){
      source.cancel('request is cancelled', thrown.message)
    }
  }

  
  // INTERCEPTING REQUESTS & RESPONSES
  axios.interceptors.request.use(config=>{
    console.log(`${config.method.toUpperCase()} send to ${config.url} at ${new Date().getTime()}`);
    return config
  },error => {
    return Promise.reject(error)
  })
  // AXIOS INSTANCES
  const axiosInstances = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
  })
  axiosInstances.get('/comments?_limit:5').then(res=> showOutput(res))
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);
  