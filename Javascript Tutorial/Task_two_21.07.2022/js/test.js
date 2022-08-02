
    function test3(a,b){
        var a = document.getElementById("tboxone").value;
        var b = document.getElementById("tboxtwo").value;
        for(var i = 0; i < a; i++)
        {
            for(var j = 0; j < b; j++)
            {
                var newelement = document.createElement("input");
                document.getElementById("demo").appendChild(newelement);
            }
            var newelementtwo = document.createElement("br");
            document.getElementById("demo").appendChild(newelementtwo);
        }
        var newelementone = document.createElement("br");
        document.getElementById("demo").appendChild(newelementone);


        var newelementthree = document.createElement("button");
        var newelementfour = document.createTextNode("sum");
        newelementthree.appendChild(newelementfour);
        document.getElementById("demo").appendChild(newelementthree);
    }
    
    function sum_tbox(){
        var sum = 0;
        var c = parseInt(document.getElementById("tbox").value);
        sum = sum + c;
            
        document.write(sum);
        console.log(sum);
    }