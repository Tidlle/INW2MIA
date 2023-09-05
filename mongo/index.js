//mongodb://localhost:27017/

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exemplo',
    {useNewUrlParser : true, 
     useUnifiedTopology: true, 
     serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error : '));

db.once('open', function(){
    console.log("Estamos conecados ao banco")
})

const pessoaSchema = new mongoose.Schema({
    nome : String,
    idade : Number,
    Profissão : String
});

const pessoa = mongoose.model('pessoa', pessoaSchema);

const marcos = new pessoa({
    nome : 'Marcos', 
    idade : 25, 
    Profissão : "Estudante"
});

console.log(marcos.nome);
console.log(marcos.idade);
console.log(marcos.Profissão);

marcos.save();
