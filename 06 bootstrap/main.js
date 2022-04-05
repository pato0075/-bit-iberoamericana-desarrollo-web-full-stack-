var getData = function (){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
       if (name=="") {
           document.getElementById("name").focus();
       } else {
           if (password == "") {
            document.getElementById("password").focus();
       } else
            console.log(name+""+password);
            document.getElementById("name").value ="";
            document.getElementById("password").value ="";
            document.getElementById("password").focus();
       }
       

    
}