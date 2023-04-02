require('dotenv').config(); //keep this line on top...

/**
 * dotenv file is a simple text file for security purposes........... 
 * In .env just pass the datas which should be super private.
 */

console.log((process.env.SECRET_KEY));

// const express=require('express');
// const app=express();
// const ejs=require('ejs');
// const path=require('path'); 
// const hbs=require('hbs');
// const bcrypt=require('bcryptjs');
// const jwt=require('jsonwebtoken');
// const port=process.env.PORT||9000;

// require('./db/conn');
// const User=require('./models/users');
// const { log } = require('console');

// app.use(express.json());
// app.use(express.urlencoded({extended:false}));//get form data

// // const staticPath=path.join(__dirname,'../public/');
// // app.use(express.static(staticPath));

// app.set("views", path.join(__dirname, "./templates/views/"));
// app.set('view engine','hbs');

// app.get('/register',(req,res)=>{
//     // res.send('abcd');
//     res.render('register');
// });

// app.get('/login',(req,res)=>{
//     // res.send('abcd');
//     res.render('login');
// });

// const securePassword=async(password)=>{
//     const passwordHash=await bcrypt.hash(password,10);
//     // const passwordMatch=await bcrypt.compare(password,passwordHash);
//     return passwordHash;
//     // console.log(passwordMatch);
// }
// //  securePassword(password);

// /**
//  * Notes--> statics are methods defined on models. methods are defined on the document(instance).
//  * Use .statics for static methods, .methods for instance methods. 
//  */

// //create a new user in our database

// // let generateToken=async(id)=>{
// //     try {
// //         const token=await jwt.sign({_id:id},
// //         "mynameisthefullstackjavascriptdeveloper");
// //         console.log(token);
// //     } catch (error) {
// //         res.send("Error: "+error);
// //         console.log("Error: "+error);
// //     }
// // }
 
// app.post('/register',async(req,res)=>{           
//     try {
//         // console.log(req.body.name);
//         const pass=req.body.password;
//         const pass1=req.body.password1; 

//         const hashPassword=await securePassword(pass);

//         if(pass===pass1){
//             const regUser=new User({
//                 name:req.body.name,
//                 email:req.body.email,
//                 phone:req.body.phone,
//                 password:hashPassword,
//                 // password1:req.body.password1
//             });

//             // console.log(req.params.id);
            
//             const token=await regUser.generateToken(req.params.id,res);

//             const user=await regUser.save(); 
//             res.render('login');
//         }
//         else{
//             res.send('unmatched passwords');
//         }
//         // res.send('login');
//     } catch (error) {
//         console.log(error);
//         res.send(error);
//     }
// });

// /**
//  * Note-> Example of middleware, suppose I give an exam and while exam is going on, invigilator
//  * comes to check my roll no, id, etc......... this is middleware.
//  */

// /*         Differences between Encryption and Hacking
//          ---------------------------------------------------
//          Encryption is 2-way, so less secured. Example,  abcd<--> xvcdaou. So , hacker can decode the real
//          one from it's encoded version easily.

//          Hashing is 1-way. Example, abcd--> aosicadof.asdnas   .This, cannot be decoded.  bcrypt.js is 
//          used widely for this purpose.  

//          npm i bcryptjs

//          ... hash() function is used.
// */


// app.post('/login',async(req,res)=>{
//     try{
//         const email=req.body.email;
//         const password=req.body.password;

        

//         const hashPassword=await securePassword(password);
//         const passwordMatch=await bcrypt.compare(password,hashPassword);

        
//         console.log(passwordMatch);
//         const findEmail=await User.findOne({email:email}); // check email presence in database

//         const token=await findEmail.generateToken(req.params.id,res);
//         // console.log(token);

//         console.log(typeof(findEmail));
//         // res.send(findEmail.password);
//         // res.send(findEmail);
//         // if(findEmail.password===password){
//         if(!findEmail){
//             res.send('Invalid Email');
//         }
//         else if(passwordMatch==true){ //check password is matching or not
//             // console.log(passwordHash);
//             res.render('index');
//         }
//         else{
//             res.send('Invalid Password...');
//         }
//     }
//     catch(error){
//         console.log(error);
//         res.send(error);
//     }
// });


// ///////////////    
// /*

// JWT(JSON Web Token) ==>  Standard used to create accessw tokens for an application.

// The server creates a token that certifies the user identity, and sends it to the client.The client will
// send the token back to the server for every subsequent request, so the server knows the request comes from
// a particular identity.  In simple words, to authenticate the user it is used.

// npm i jsonwebtoken

// */ //////////////////////////////

// const createToken=async()=>{
//     const token=await jwt.sign({_id:"6425de32eea0a30a306688a3"},"abcdaucsoaucascisacsasodusdsdozgihdfogidzg");
//     //the second argument is secretkey and should be min 32 characters as per jwt.
//     console.log(token);//we get our token id
//     //see there are 3 parts of the token..... first part is header (decode the jwt using decoder to see...)
//     //second part has payload (body data)
//     /*the token remains with user, not with server.... when user requests the server with jwt, server 
//     verifies it (using jwt.verify(...)) and provides the necessary data. */

//     const userVer=jwt.verify(token,"abcdaucsoaucascisacsasodusdsdozgihdfogidzg");
//     console.log(userVer);  //returns an object


// }
// // createToken();

// const createToken1=async()=>{
//     /* So, jwt keeps an user logs in. We can also set time for which the user will be kept logged in. */
//     const token=await jwt.sign({_id:"6425dee0d4a1a0fdf5c941d4"},"aosugcasoaslofigaspofiasf",
//     {expiresIn:"20 seconds"}
//     //the token expires after 20 seconds
//     );
//     console.log(token);
//     console.log(jwt.verify(token,"aosugcasoaslofigaspofiasf"));
// }

// // createToken1(); 


// app.listen(port,()=>{
//     console.log('connected successfully');
// });