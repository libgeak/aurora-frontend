const app = express();

app.use(express.static(__dirname+'/dist/aurora-frontend'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/aurora-frontend/index.html'));
});

app.listen(process.env.PORT || 8080);
