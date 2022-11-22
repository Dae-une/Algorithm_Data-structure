// Q1. 문자열 유형이 있는 개체의 모든 값 배열을 반환하는 collectStrings라는 함수 작성
const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

function collectStrings(obj) {
  let result =[]
  
  function getString(o){
      for(let key in o){
          if(typeof o[key] === 'string'){
              result.push(o[key])
          }else if(typeof o[key] ==='object'){
              return getString(o[key])
          }
      }
  }    
  getString(obj)
      
  
  return result
}

collectStrings(obj) // ["foo", "bar", "baz"])


//Q2.  단어 배열이 주어지면 각 단어가 대문자로 표시된 새 배열을 반환합니다.

function capitalizeWords(arr){
  if(arr.length ===1) return [arr[0].toUpperCase()]
  
  let res = capitalizeWords(arr.slice(0,-1))
  res.push(arr.slice(arr.length-1)[0].toUpperCase())
  return res
}

//Q3. 문자열 배열에서 각 문자열의 첫 글자를 대문자로 표시 합니다.

function capitalizeFirst (array) {
  if(array.length ===1) return [array[0][0].toUpperCase() + array[0].substr(1)]
  
  const res = capitalizeFirst(array.slice(0,-1))
  const result = array.slice(array.length-1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1)
  res.push(result)
  return res
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
