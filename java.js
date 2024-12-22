import XLSX from 'xlsx';



let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');
let nameInput = document.querySelector('.name');
let emailInput = document.querySelector('.email');
let pasInput = document.querySelector('.pass');

signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
})

signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
})

submit.addEventListener('click',()=>{
  const formData = {
    name: document.getElementById('nameInput').value,
    email: document.getElementById('emailInput').value,
    password: document.getElementById('pasInput').value,
  };
  
  // Create a new Excel workbook
  const workbook = XLSX.utils.book_new();
  
  // Create a worksheet
  const worksheet = XLSX.utils.json_to_sheet([formData]);
  
  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
  // Save workbook to Excel file
  XLSX.writeFile(workbook, 'formData.xlsx');
  
  // Read stored data from Excel file
  const storedWorkbook = XLSX.readFile('storedData.xlsx');
  const sheetName = storedWorkbook.SheetNames[0];
  const storedData = XLSX.utils.sheet_to_json(storedWorkbook.Sheets[sheetName]);
  
  // Match given data with stored data
  const matchedData = storedData.filter((row) => {
    return row.name === formData.name && row.email === formData.email;
  });
  
  if (matchedData.length > 0) {
    alert('Match found!');
  } else {
    alert('No match found!');
  }
  
})
