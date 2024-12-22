import time as t
from pyscript import display
from pyscript import document

text= document.querySelector('.text')
btn = document.querySelector('.btn')

text.innerHTML = "MY LOVE"
for i in range(1,10):
    btn.innerHTML = i
    display("ajeet")
