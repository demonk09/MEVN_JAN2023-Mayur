function findMajority(arr, n)
{
    let maxCount = 0;
    let index = -1; 
      
    for(let i = 0; i < n; i++) 
    {
        let count = 0;
        for(let j = 0; j < n; j++) 
        {
            if (arr[i] == arr[j])
                count++;
        }
  
       
        if (count > maxCount) 
        {
            maxCount = count;
            index = i;
        }
    }
  
   
    if (maxCount > n / 2)
    console.log(arr[index]);
     
    else
    console.log("arr[index]");
}
  

let arr = [ 1, 1, 2, 1, 3, 5, 1,5,8,5,5,5,5,5,5,5,55,5, ];
let n = arr.length;
  

findMajority(arr, n);