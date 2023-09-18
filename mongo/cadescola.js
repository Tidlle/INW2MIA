//configurar a conexão com mongodb e o banco de dados 

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 20000
});

const db = mongoose.connection;

db.on('error ', console.error.bind(console, 'connection error :'));

db.once('open', function(){
    console.log("Estamos conectados ao mongoDB");
});


//criando uma collection dentro do mongodb

const alunoSchema = new mongoose.Schema({
    matricula : String,
    nome : String, 
    idade : Number, 
    turma : String
});

const Alunos = mongoose.model("Alunos", alunoSchema);

const Paulo = new Alunos({
    matricula : 'rm201',
    nome : "Paulo da Silva",
    idade : 18,
    turma : '2MIA'   
})
Paulo.save();

const Maria = new Alunos({
    matricula : 'rm202',
    nome : "Maria Carla",
    idade : 18,
    turma : '2MIA'   
})
Maria.save();

Alunos.findOne({nome : 'Maria Carla'}, function(err, aluno){
    console.log(Alunos)
})
