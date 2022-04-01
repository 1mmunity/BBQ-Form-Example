function onRadioChange(cb) {
  const inputs = document.getElementsByTagName("input")
  for (input of inputs) {
    if (input.type === "radio") {
      input.addEventListener("change", function() {
        cb(input, inputs)
      })
    }
  }
}

const price = document.getElementById("price")
function formSubmit() {
  // const form = new FormData(document.getElementById("selections"))
  window.alert(price.innerText)
  // do anything you want here, like send the form data to the server,
  // on this example i'll just log the value of the expenses,
  // though YOU DO NOT WANT TO DO THIS IF IT'S FOR ACTUAL PAYMENTS!
  // generally you'd want to send all the form data to the server
  // and let the server process it, don't just send the price!

  return false // return true if you want to refresh this
}

onRadioChange((input, inputs) => {
  let priceValue = 0
  for (inp of inputs) {
    if (inp.checked) {
      console.log(inp.value)
      priceValue += parseInt(inp.value)
    }
  }

  price.innerText = priceValue
})
