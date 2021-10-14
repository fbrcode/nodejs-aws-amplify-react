/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/sensor/:sensorUUID', function(req, res) {
  // Add your code here
  //res.json({success: 'get call succeed!', url: req.url});
  res.json({
    uuid: '31d42f54-ef12-4c83-a5be-19a87368b648',
    qrCode: 'qr##code##sample##data',
    sensorData: {
      lastTimestamp: '2021-02-01 00:00:00',
      score: 90.8,
      scoreUnit: 'device',
      temperature: 77.9,
      temperatureUnit: 'F',
      humidity: 33.9,
      humidityUnit: 'g/m3',
      co2: 408.8,
      co2Unit: 'ppm',
      voc: 148,
      vocUnit: 'ppm',
      pm25: 2.7,
      pm25Unit: '2.5 micrometers',
      light: 12.8,
      lightUnit: 'lumens',
      noise: 62.2,
      noiseUnit: 'dB',
    },
    location: {
      street: '123 Main Street',
      city: 'Miami',
      state: 'FL',
      zip: '33132',
    },
    category: {
      id: 1,
      name: 'Basic Type',
    },
    status: 'active',
  });
});

app.get('/sensor/:sensorUUID/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/sensor/:sensorUUID', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/sensor/:sensorUUID/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/sensor/:sensorUUID', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/sensor/:sensorUUID/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/sensor/:sensorUUID', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/sensor/:sensorUUID/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
