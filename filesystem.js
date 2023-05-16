var fs = require('fs');

// # Reading a file
//reading data from a file
fs.readFileSync('textfile.txt', function(err,data){
    if (err)
    throw errconsole.log(data);
});


//reading file synchronously
var data = fs.readFileSync('textfile.txt','utf8');
console.log(data);

// # Writing a file
//writing data into a file
fs.writeFile('test.txt','New file created',function(err,data){
    if (err) 
    throw err
    console.log(err);
    console.log(data+'\n'+'Write op suxxes');
})


//addpend operation
var fs = require('fs');

fs.appendFile('test.txt', 'Hello World!', function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Append operation complete.');
});