const express = require('express');
const route = express.Router();
// const accounts = require('./database');
const render = require('./handlebars');

// route.get('/accounts', (req,res)=>{
//     try{
//         console.log(":::::::::::");
//         res.json({userData:accounts})
//     }catch(error){
//         console.log("===========");
//         console.log(error);
//     }
// })

// {{else}}
//                                     <td style="border: none; border-right: 1px solid;"></td>
//                                     <td style="border: none; border-right: 1px solid;"></td>
//                                     <td style="border: none; border-right: 1px solid;"></td>
//                                     <td style="border: none; border-right: 1px solid;"></td>

route.post('/accounts', (req,res)=>{
    try{
        // console.log(';;;;;;;;;;;;;', accounts);
        // var lengthSpan = req.body.payload.members.length;
        // var dataArray = [];
        // dataArray.push(req.body.payload);
        // dataArray[0].members[0].noOfMembers = lengthSpan;
        // dataArray = dataArray[0];
        //dataArray[0].members.unshift(lengthSpan);
        const template = req.body.templateId;
        const filePath = './' + template + '.html'
        const userDetails = req.body.payload.name;
        console.log(userDetails);
        // accounts.push(userDetails);
        // const finalHtml = render('./htmlProject.html', userDetails)
        const finalHtml = render(filePath,  req.body.payload)
        res.send("Dynamic Html Generated");
        route.get('/dynamic', (req,res)=>{
            res.send(finalHtml)
        })
    }catch(error){
        console.log('------------');
        console.log(error);
    }
})

module.exports = route;