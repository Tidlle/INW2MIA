const firebaseConfig = {
    apiKey: "AIzaSyAwkp1QqsoTyRWW3MvGG1cfP7XVsdS0ivQ",
    authDomain: "projeto2miateste-ec92a.firebaseapp.com",
    projectId: "projeto2miateste-ec92a",
    storageBucket: "projeto2miateste-ec92a.appspot.com",
    messagingSenderId: "424791020851",
    appId: "1:424791020851:web:d9ff89a5e52cd96bc75a46"
  };

  firebase.initializeApp(firebaseConfig);
  
  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', ()=>{
    const email = emailField.value;
    const password = passwordField.value;

    firebase.auth().singInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log("Usuário logado : ", user)
    })
    .catch((error)=>{
      const errorMessage = error.massage;
      console.error("Erro de autenticação : ", errorMassage)
    });
  });

