

(function(module) {
    // Exporting all the Functions 
    module.exports.len=len;
    module.exports.push=push;
    module.exports.pop=pop;
    module.exports.sortkeys=sortkeys;
    module.exports.keys=keys;
    module.exports.values=values;
    module.exports.entries=entries;
    
    function keys(obj){
        var a=[]
        for  (key in obj){
            a.push(key)
        }
        return a
    }
    function values(obj){
        var a=[]
        for  (key in obj){
            a.push(obj[key])
        }
        return a
    }
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
        console.log(obj)
        var  keys=Object.keys(obj)
        
        if(arg[1]=='d'){
            keys.sort()
            keys.reverse()
            
        }
        else if(arg[1]=='a'){
            keys.sort()
        }
        console.log(keys)

        var obj1={}

        keys.forEach(element => {
            console.log(element)
            console.log(obj[element])
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

    function pop(obj,pos){
        var position=0
       for (key in obj){
           console.log(key)
           if(pos==position){

               delete obj[key];
           }
           position++;
       }
       return obj

    }

})(module)

