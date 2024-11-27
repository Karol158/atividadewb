const express = require('express');
const app = express();
let pessoas=[];
 
app.get('/pessoa',(req,res)=> {
res.json();

});
app.get('/pessoa/:id',(req,res)=>{
let pessoa={
    id:req.params.id,
}
pessoas.push(pessoa);

});
app.post('/pessoa',(req,res)=>{
  const { id, nome } = req.body; 
  let novapessoa = { id, nome };
  objetos.push(novapessoa);   
});

app.delete('/pessoa',(req , res)=>{
    objetos.pop()
    res.json(objetos)
  
  });
  app.listen(3000,()=>{
    console.log('Servidor em execução...')
    
    });



    
