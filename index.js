const express =require ('express');
const cors=require('cors')
const app = express();

app.use(cors())
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Wow!I am learning Node.')
  })
  
  const users =[
    {id:1,name:'sabana',email:'sabana@gmail.com', phone:'0154581'},
    {id:2,name:'soniya',email:'soniya@gmail.com', phone:'0154581'},
    {id:3,name:'hridoy',email:'hridoy@gmail.com', phone:'0154581'},
    {id:4,name:'sabonti',email:'sabonti@gmail.com', phone:'0154581'},
  ]

  app.get('/users',(req,res)=>{
    const search = req.query.search;
    //use query parameter
    if(search){
        const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
      else{
          res.send(users)
      }
  });

//   app method
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log('hiting the',req.body);
    // res.send('post got hitted')
    res.json(newUser)
})
//   dynamic api
  app.get('/users/:id',(req,res)=>{
      const id=req.params.id;
      const user = users[id];
     res.send(user);
  })

  app.get('/fruits/mangoes/fazli',(req,res)=>{
      res.send("Yummy tok marka fazli")
  })
  
  app.listen(port, () => {
    console.log("Listening to port",port)
  })