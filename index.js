const express = require('express'); // vamos trocar o HTTP pelo uso do Express
const app = express();
app.use(express.static('assets'));

app.set('view engine','ejs'); 

app.get('/',function(req,res){   
   res.render("index")  
});

app.get('/sobre',function(req,res){
   let about = {
     pUm: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper turpis sit amet leo hendrerit, porttitor ultrices dui iaculis. Curabitur ut nisi vel lorem fermentum maximus ut et nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent pellentesque lacus sit amet nulla tincidunt laoreet. Sed dapibus ligula id tortor ullamcorper vestibulum. Proin sollicitudin, nunc eu faucibus pulvinar, lacus ligula viverra dui, efficitur varius elit eros vel justo. Maecenas euismod ultricies ultrices. Nullam massa mi, bibendum ut mattis nec, pharetra porttitor ex. Aliquam eget lacus et nunc auctor feugiat." ,
     pDois: "Etiam volutpat ut enim a varius. Aliquam sit amet gravida diam, eu auctor justo. Curabitur auctor tincidunt turpis, eget rutrum justo ornare posuere. Sed eu facilisis ligula, id tempor elit. Nullam lacus dolor, posuere eu maximus at, commodo ac erat. Etiam lorem nisl, rhoncus eget urna eu, dignissim rutrum nisi. Sed ut justo mollis, interdum lorem at, sodales elit. Aliquam tincidunt nibh eget dui finibus hendrerit. Quisque viverra convallis nunc nec pellentesque. Morbi varius ut sapien ut luctus. Nulla sollicitudin, velit quis mattis pulvinar, enim felis ornare nisi, sit amet dictum felis tellus at purus. Integer ut viverra nulla. Ut viverra risus et est pretium tristique."
   }
   res.render("about",  {about: about})  
});

app.get('/eventos',function(req,res){
  let dados = [
    {
      cidade: "Gravataí",
      date: "18/08/2018",
      hour: "14h",
      local: "Ulbra Gravataí"
    },
    {
      cidade: "Florianópolis",
      date: "18/08/2018",
      hour: "16h30",
      local: "Feevale "
    },
    {
      cidade: "Porto Alegre",
      date: "18/08/2018",
      hour: "14h",
      local: "Saque e Pague"
    },
    {
      cidade: "Belo Horizonte",
      date: "18/08/2018",
      hour: "14h",
      local: "Senac"
    }
  ]
   res.render("event", {result: dados})  
});


app.listen(3000,function(){
   console.log("servidor rodando");
});