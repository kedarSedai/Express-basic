const express = require ('express');
const bodyparser = require ('body-parser');

const app = express();

const port = process.env.PORT || 3000;

//Middleware 
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//They are used to serve the static file in express
app.use('/login', express.static(__dirname + '/public'));

//defining get routes
app.get('/', (req, res) => res.send('Hello world'));
//res.send is used to send message in the browser 

//whereas we can also render page in express using render method
 app.get('/user', (req, res) => res.render('index'));
//res.rendr is used to render page in the browser 

//we can use patch to update
app.patch('/user', (req, res) => res.send('got a update request'));

//we can use delete to delete
app.delete('/user', (req, res) => res.send('got a delete request'));


//Generally post route is send while submitting the form
//we need to add /submittingForm to our form action='/submittingForm' and method='post'
//then only this route works
app.post('/submittingForm', (req, res) => {
    res.send('This is post route');
});


// the app start a server and listen to a port 3000 and respond with 'hello world'
//  to the root route (/) elesewhere it send 404 to other route
app.listen(port, () => console.log(`Server is running at port ${port}`));