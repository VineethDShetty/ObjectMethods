
(function(module) {
    // Exporting all the Functions 
    module.exports.len=len;
    module.exports.push=push;
    module.exports.pop=pop;
    module.exports.sortkeys=sortkeys;
    module.exports.keys=keys;
    module.exports.values=values;
    module.exports.entries=entries;
    
    // Function to Return all the keys
    function keys(obj){
        var a=[]
        for  (key in obj){
            a.push(key)
        }
        return a
    }
    // Function to return the values
    function values(obj){
        var a=[]
        for  (key in obj){
            a.push(obj[key])
        }
        return a
    }
    // Function to return all the entries
    function entries(obj){
        var a=[]
        
        for  (key in obj){
            let k=[]
            k.push(key)
            k.push(obj[key])
            a.push(k)

        }
        
        return a
    }

    // Find the length of the Object
    function len(obj){
    
    var length=0
    for (key in obj){
        length++
    }
    return length
    }
    

    // Sort the Object based on Keys

    function sortkeys(...arg){
        let obj=arg[0]
       
        var  keys=Object.keys(obj)
        
        if(arg[1]=='d'){
            keys.sort()
            keys.reverse()
            
        }
        else if(arg[1]=='a'){
            keys.sort()
        }
        

        var obj1={}

        keys.forEach(element => {
            
            obj1[element]=obj[element]
        });

    
        return obj1;
    }

    

    // Adding a Key value Pair in between a object

    function push(obj,key,value,pos){
        var position=0;
        var obj1={}
        for (k in obj){
          if(pos==position){
           obj1[key]=value
          }
          obj1[k]=obj[k]
          position++;

        }
        return obj1
    }
    // Popping element from random postition (pos)
    function pop(obj,pos){
        var position=0
       for (key in obj){
          
           if(pos==position){

               delete obj[key];
           }
           position++;
       }
       return obj

    }

})(module)

