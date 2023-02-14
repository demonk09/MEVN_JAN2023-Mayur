/**
 * Three function example that i came across
 */
function OuterScope(){
    const result = [];
    function innerscope(){
        for(let i=0;i<15;i++){

            result[i] = (function inner(x){
                return function(){
                    console.log(x);
                };
            })(i);
        }
    }
    innerscope();
    for (let i=0;i<15;i++){
        result[i]();
    }
}
OuterScope();