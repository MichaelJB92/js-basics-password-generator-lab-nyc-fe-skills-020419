window.addEventListener("load", () => {
  
  //start your code here
  
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
  const specialSymbol ='!@#$%^&*()'
  const numbers = '1234567890'
  
  function onSubmit(event){
    event.preventDefault()
    const input = document.getElementById("passwordLength")
    const howMany = input.value
    let startingString=''
    
    
    
    for (let i=0; i <howMany; i++){
      
    if (startingString.length < howMany){
    let randomIndex = Math.floor(Math.random() * lowerCase.length)
    startingString += lowerCase[randomIndex]
  }
  
     if (startingString.length < howMany){
  randomIndex = Math.floor(Math.random() * upperCase.length)
    startingString += upperCase[randomIndex]
  }
  

    if (startingString.length < howMany){
    randomIndex = Math.floor(Math.random() * numbers.length)
    startingString += numbers[randomIndex]
  }
  
  if (startingString.length < howMany){
    randomIndex = Math.floor(Math.random() * specialSymbol.length)
    startingString += specialSymbol[randomIndex]
  }
    }
  console.log(startingString)
  const output = document.getElementById('result')
  output.innerHTML = startingString
  }
  document.addEventListener('submit', onSubmit)
});
