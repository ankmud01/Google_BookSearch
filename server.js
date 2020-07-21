const express = require("express");
const app = express();

PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.listen(PORT, function(){
    console.log(`🌎  ==> App is running on http://localhost:${PORT}`);
})