studentobj = {

	'yash': 26,

	'vaibhav': 24,

	'rajesh' : 25,

	}
    let count=0;

    function findaverageage(studentobj){
        let sum=0;

        const keyarr=Object.keys(studentobj);
        keyarr.forEach(key=>{
             sum=sum+studentobj[key];
            count++;

        })
        const averageAge=sum/count;
        
    
        
    
        return averageAge;
    
    }
    console.log(findaverageage(studentobj));
    
    