function order() {
  let fn1 = document.getElementById('fname').value;
  let ln1 = document.getElementById('lname').value;
  let add1 = document.getElementById('address').value;
  let size1 = document.getElementById('sizes').value;
  let qty1 = document.getElementById('quantity').value;
  let con1 = document.getElementById('contact').value;
  let pay1 = document.getElementById('payment').value;

  if (fn1 == "" || ln1 == "" || add1 == "" || size1 == "" || qty1 == "" || con1 == "" || pay1 == "") {
    alert("Please full fill all the needed information,THANKYOU!");
    return false;
  }
  else {
    location.href = "thanks.html";
  }
}