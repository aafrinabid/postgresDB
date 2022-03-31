(async function main(){
const pg=require('pg')
const connectionString='postgressql://postgres:newPassword@localhost:5432/mydb'
var c = new pg.Client(connectionString);
c.connect((err)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log('poli');
    }
});


console.log("about to query");
console.log('aayooo')
var res = await c.query("SELECT * FROM weather");
res.rows.forEach(row=>{
    console.log(row);
});
await c.end();
})()