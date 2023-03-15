const fs = require('fs');
fs.writeFile('employees.json',' {"name": "Employee 1 Name", "salary": 2000, "startDate":1990}','utf-8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})
fs.readFile('employees.json','utf-8',(err,data)=>{
    if (err) throw err
    console.log(data)
    console.log('dosya okundu');
    
   
})

fs.appendFile('employees.json','\n"status":"working"','utf-8', (err)=>{
    console.log('Veri Eklendi')
    if (err) console.log(err)
})

fs.unlink('employees.json',(err)=>{
    console.log('dosya silindi')
    if(err) console.log(err)
})
