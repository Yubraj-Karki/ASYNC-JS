const users = [
    {name: 'john', profession: 'developer'},
    {name: 'peter', profession: 'doctor'},
    {name: 'jane', profession: 'nurse'},
]


function getUsers() {

    setTimeout(()=>{  users.forEach((user)=> {
        console.log(user);
    })}, 2000)

    
}

function createUsers(user, ) {
    return new Promise((resolve, reject)=> {  
     setTimeout(()=> {
        users.push(user);

    const error = false;

    if(!error) {
        resolve();
    } else {
        reject('Error: Something went wrong.');
    }
      
    }, 3000)


    })
  
    
}


const user = {name: 'Rajesh', profession: 'actor'};


createUsers(user)
.then(getUsers)
.catch(err=> console.log(err))

