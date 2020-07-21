const express = require("express");
const app = express();

PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ADD ROUTES FOR BOTH API AND VIEW
//Test my connection is working
app.get("/api/config", (req,res) =>{
    res.json({
        error: false,
        data: null,
        message: "Success",
    })
});

// TODO MONGOOSE CONNECTION


app.listen(PORT, function(){
    console.log(`🌎  ==> App is running on http://localhost:${PORT}`);
})