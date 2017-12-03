function getCoordinates(tileNum){
    var intRoot=Math.floor(Math.sqrt(tileNum));
    
    var x=(Math.round(intRoot/2)*Math.pow(-1,intRoot+1))+(Math.pow(-1,intRoot+1)*(((intRoot*(intRoot+1))-tileNum)-Math.abs((intRoot*(intRoot+1))-tileNum))/2);
        
    var y=(Math.round(intRoot/2)*Math.pow(-1,intRoot))+(Math.pow(-1,intRoot+1)*(((intRoot*(intRoot+1))-tileNum)+Math.abs((intRoot*(intRoot+1))-tileNum))/2);
                
    return [x,y];
 }
          
                    
 var cordinates=getCoordinates(1024);
 
 var ans=Math.abs(cordinates[0])+Math.abs(cordinates[1]); 

 console.log(ans-1);                            
                                        
                                                  
                                                            
                                         