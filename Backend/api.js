const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sha1 = require('sha1');
const mongoose = require('mongoose');
const multer = require('multer');
//multer code start
const path = "./attach";
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,path)
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + file.originalname.split('.')[file.originalname.split('.').length-1])
    }
})
let upload = multer({storage: storage }).single('Image');
//multer code end
// define api
mongoose.connect("mongodb://localhost/project",{
    useCreateIndex: true,
    useNewUrlParser: true,
     useUnifiedTopology: true
})
let adminModel = require('./database/admin');
let catModel = require('./database/category');
let newsModel = require('./database/news');
 let feedModel = require('./database/feed');
const app  = express();
// for send email
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aditiagarwal.aec.cs16@sgei.org',
    pass: 'aditi1316'
  }
});
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// end
app.use(cors());
app.use(bodyParser.json());
app.use('/images',express.static('attach'));
//search 
app.get('/api/search/:ser',function(req,res){
    let ser= req.params.ser
    res.json({'msg':ser});
})
//end 
//for feedback 
app.post('/api/feedback',function(req,res){
    let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let message = req.body.message; 
    // use npm installer nodemailer --save
    var mailOptions = {
        from: 'aditiagarwal.aec.cs16@sgei.org',
        to: 'aditipayalagarwal@gmail.com',
        subject: 'Sending feedback',
        text : 'Student Enqiry\n Name is ' + name + '\n Email is ' + email + '\n Mobile no is ' + mobile + '\n Message is ' + message 
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.json({'msg':'Email sent: ' + info.response});
        }
      });


    
})
//define api's
app.post('/api/adminpanel',function(req,res){
    let email = req.body.email;
    let password = req.body.password;
    adminModel.find({'email':email,'password':password},function(err,data){
        if(err){
            res.json({'err':1,'msg':'Problem in login'});
        }
        else if(data.length == 0){
            res.json({'err':1,'msg':'Email or Password is not correct'});
         }
         else{
             res.json({'err':0,'msg':'Login Success','ulogin':email});
         }
    })
})
//api for add category 
app.post('/api/addcategory',function(req,res){
    upload(req,res,function(err){
        if(err){}
        else{
            let cname = req.body.cname;
            let description = req.body.description;
            let fname = req.file.filename;
            let ins = new catModel({'cname':cname,'description':description,'image':fname});
            ins.save(function(err){
                if(err){}
                else
                {
                    res.json({'err':0,'msg':'category saved'});
                }
            })
        }
    })
})
//fetch category
app.get('/api/fetchcategory',function(req,res){
    catModel.find({},function(err,data){
        if(err){}
        else{
            res.json({'err':0,'cdata':data});
        }
    })
})
app.get('/api/deletecat/:id',function(req,res){
    let cid = req.params.id;
    catModel.remove({'_id':cid},function(err){
        if(err){}
        else
        {
            res.json({'err':0,'msg':'Category Deleted'});
        }
    })
})
//fetch category by id
app.get('/api/fetchcategorybyid/:id',function(req,res){
    let cid = req.params.id;
    catModel.find({'_id': cid},function(err,data){
        if(err){}
        else{
            res.json({'err':0,'cdata':data});
        }
    })
})
app.post('/api/updatecategory/:id',function(req,res){
    upload(req,res,function(err){
            let cid = req.params.id;
            let cname = req.body.cname;
            let description = req.body.description;
            let fname = req.file.filename;
            catModel.updateOne({'_id':cid},{$set:{'cname':cname,'description':description,'image':fname}},function(err){
                if(err){}
                else{
                    res.json({'err':0,'msg':'Category Updated'});
                }
            })
    })
})
// end of Category 
// news category
app.post('/api/addnews',function(req,res){
    upload(req,res,function(err){
        if(err){}
        else{
            let cname = req.body.cname;
            let title = req.body.title;
            let body  = req.body.body;
            let fname = req.file.filename;
            let ins = new newsModel({'cname':cname,'title':title,'body':body,'image':fname});
            ins.save(function(err){
                if(err){}
                else
                {
                    res.json({'err':0,'msg':'news saved'});
                }
            })
        }
    })
})
//fetch latest news
app.get('/api/latestnews',function(req,res){
    newsModel.find({},function(err,data){
        if(err){}
        else{
            res.json({'err':0,'ndata':data});
        }
    })
})
//fetch  news by category
 app.get('/api/newsbycategory/:cn',function(req,res){
     let cn = req.params.cn;
    newsModel.find({'cname': cn},function(err,data){
        if(err){}
        else{
            res.json({'err':0,'ndata':data});
        }
    })
})
app.get('/api/fetchnews',function(req,res){
    newsModel.find({},function(err,data){
        if(err){}
        else{
            res.json({'err':0,'cdata':data});
        }
    })
})
app.get('/api/deletenews/:id',function(req,res){
    let cid = req.params.id;
    newsModel.remove({'_id':cid},function(err){
        if(err){}
        else
        {
            res.json({'err':0,'msg':'News Deleted'});
        }
    })
})
//fetch news by id
app.get('/api/fetchnewsbyid/:id',function(req,res){
    let cid = req.params.id;
    newsModel.find({'_id': cid},function(err,data){
        if(err){}
        else{
            res.json({'err':0,'cdata':data});
        }
    })
})
app.post('/api/updatenews/:id',function(req,res){
    upload(req,res,function(err){
            let cid = req.params.id;
            let cname = req.body.cname;
            let title = req.body.title;
            let body = req.body.body;
            let fname = req.file.filename;
            newsModel.updateOne({'_id':cid},{$set:{'cname':cname,'title':title,'body':body,'image':fname}},function(err){
                if(err){}
                else{
                    res.json({'err':0,'msg':'News Updated'});
                }
            })
    })
})
// End of news Category
// fetch feedback
app.post('/api/feed',function(req,res){
    upload(req,res,function(err){
        if(err){}
        else{
            let name = req.body.name;
            let email = req.body.email;
            let mobile = req.body.mobile;
            let message = req.body.message; 
            let ins = new feedModel({'name':name,'email':email,'mobile': mobile,'message':message});
            ins.save(function(err){
                if(err){}
                else
                {
                    res.json({'err':0,'msg':'category saved'});
                }
            })
        }
    })
})
app.get('/api/fetchfeed',function(req,res){
    feedModel.find({},function(err,data){
        if(err){}
        else{
            res.json({'err':0,'fdata':data});
        }
    })
})
//End of Feedback
app.post('/api/changeadminpass',function(req,res){
    let op = sha1(req.body.oldpass);
    let np = sha1(req.body.newpass);
    let uid = req.body.uid;
    adminModel.updateOne({'id':uid},{$set:{'password':np}},function(err){
            if(err){}
            else{
                res.json({'err':0, 'msg': 'Password Changed'});
            }
    })
})
    
app.listen(8899,function(){
    console.log("Work on 8899");
})