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

function createUsers(user, callback) {

    setTimeout(()=> {
        users.push(user);
        callback();
    }, 3000)
    
}

const user = {name: 'Rajesh', profession: 'actor'};





createUsers(user, getUsers);
