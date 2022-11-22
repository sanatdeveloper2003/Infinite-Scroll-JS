function multiplyAll(
  values:number[]|undefined,
  factor: number
) : number[] | undefined {
  if(!values){
    return values
  }else{
    return values.map((x)=>x*factor)
  }
}

function example(x:string|number, y:string|boolean){
  if(x===y){
    x.toUpperCase();
    y.toLowerCase();
  }else{
    console.log(x);
    console.log(y)
  }
}

function printAll(strs: string|string[]|null){
  if(strs!==null){
    if(typeof strs === 'object'){
      for(const s of strs){
        console.log(s)
      }
    }else if(typeof strs === 'string'){
      console.log(strs)
    }
  }
}

interface Container{
  value: number|null|undefined
}

function multiplyValue(container:Container, factor: number){
  if(container.value != null){
    console.log(container.value);
    container.value *= factor
  }
}