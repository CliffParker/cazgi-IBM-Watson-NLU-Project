const express = require('express');
const app = new express();
const dotenv = require("dotenv");

dotenv.config();


function newNLUInstance(){
    let api_key = process.env.API_KEY;
    let api_url = process.env.API_URL;

    const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
    const { IamAuthenticator } = require('ibm-watson/auth');

    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1(
        {
      version: '2021-03-25',
      authenticator: new IamAuthenticator({
        apikey: api_key,
      }),
      serviceUrl: api_url,
    });
    
    
      return  naturalLanguageUnderstanding;

}

// app.use(newNLUInstance());

app.use(express.static('client'));

const cors_app = require('cors');
app.use(cors_app());



// INDEX

app.get("/",(req,res)=>{
    res.render('index.html');
     });





// URL/EMotion

app.get("/url/emotion", (req,res) => {

    var analyzeParams = {
        'url': 'https://www.bbc.com/news/world-asia-57682290',
        'features': {
          'emotion': {
            'limit': 3
          }
        }
      };


    var ret1 = newNLUInstance();
    var ret2 = ret1.analyze(analyzeParams);

  ret2.then( (analysisResults) => {
    console.log(JSON.stringify(analysisResults.result, null, 2));
    return res.send(JSON.stringify(analysisResults.result.emotion, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

    

});






// app.get("", (req,res) => {
//     return res.send("url sentiment for "+req.query.url);
// });



app.get("/url/sentiment", (req,res) => {

    var analyzeParams = {
        'url': 'https://www.bbc.com/news/world-asia-57682290',
        'features': {
          'sentiment': {
            'limit': 3
          }
        }
      };


    var ret1 = newNLUInstance();
    var ret2 = ret1.analyze(analyzeParams);

  ret2.then( (analysisResults) => {
    console.log(JSON.stringify(analysisResults.result, null, 2));
    return res.send(JSON.stringify(analysisResults.result.sentiment, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

    

});






// app.get("/text/emotion", (req,res) => {
//     return res.send({"happy":"10","sad":"90"});
// });


app.get("/text/emotion", (req,res) => {

    var analyzeParams = {
        'url': 'https://www.bbc.com/news/world-asia-57682290',
        'features': {
          'emotion': {
            'limit': 3
          }
        }
      };


    var ret1 = newNLUInstance();
    var ret2 = ret1.analyze(analyzeParams);

  ret2.then( (analysisResults) => {
    console.log(JSON.stringify(analysisResults.result, null, 2));
    return res.send(JSON.stringify(analysisResults.result.emotion.document, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

    

});


// app.get("/text/sentiment", (req,res) => {
//     return res.send("text sentiment for "+req.query.text);
// });


app.get("/text/sentiment", (req,res) => {

    var analyzeParams = {
        'url': 'https://www.bbc.com/news/world-asia-57682290',
        'features': {
          'sentiment': {
            'limit': 3
          }
        }
      };


    var ret1 = newNLUInstance();
    var ret2 = ret1.analyze(analyzeParams);

  ret2.then( (analysisResults) => {
    console.log(JSON.stringify(analysisResults.result, null, 2));
    return res.send(JSON.stringify(analysisResults.result.sentiment.document, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

    

});





let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})




