function CreateEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth(),CreateUserWithEmailAndPassword(email,password)
    .then(user =>{
    console.log('usuario', user); 
    alert('Usuario criado e logado')
    })
}

function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth(),signInWithEmailAndPassword(email,password)
    .then(()=>{
        alert('Usuário logado');
    }).catch(error=>{
        console.log('error', error)
    })
}

