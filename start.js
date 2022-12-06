function addExpense(){
    let amount=amountInput.value
    let desc=descInput.value
    let catg=catgInput.value

    if (amount=="" || amount==0 || isNaN(amount) || parseFloat(amount)<1){
        alert("Enter a valid amount!")
        return
    }

    else if (desc=="" || catg==""){
        alert("Enter valid description and category!")
        return
    }

    let expensesArray=JSON.parse(localStorage.getItem('allExpenses'))
    if (!expensesArray || expensesArray.length==0 || expensesArray==undefined){
        expensesArray=[{
            amount: amount,
            desc: desc,
            catg:catg
        }]
        localStorage.setItem('allExpenses', JSON.stringify(expensesArray))
        location.reload() 
    }
    else{
        let expenseDetails={
            amount:amount,
            desc:desc,
            catg:catg
        }
        expensesArray.push(expenseDetails)
        localStorage.removeItem('allExpenses')
        localStorage.setItem('allExpenses', JSON.stringify(expensesArray))
        location.reload()
    }
}
//function for Deleting Expense
function deleteExpense(event){
    let expensesArray=JSON.parse(localStorage.getItem('allExpenses'))
    expensesArray.splice(event.target.id, 1)
    localStorage.removeItem('allExpenses')
    localStorage.setItem('allExpenses', JSON.stringify(expensesArray))
    location.reload()
}
function editExpense(event){
    addBtn.removeEventListener('click', addExpense)
    addBtn.addEventListener('click', update)
    let expensesArray=JSON.parse(localStorage.getItem('allExpenses'))
    amountInput.value=expensesArray[event.target.id].amount
    descInput.value=expensesArray[event.target.id].desc
    catgInput.value=expensesArray[event.target.id].catg
    
    function update(){
        let amount=amountInput.value
        let desc=descInput.value
        let catg=catgInput.value
        let expenseDetails={
            amount:amount,
            desc:desc,
            catg:catg
        }
        localStorage.removeItem('allExpenses')
        expensesArray[event.target.id]=expenseDetails
        localStorage.setItem('allExpenses', JSON.stringify(expensesArray))
        addBtn.removeEventListener('click', update)
        location.reload()
    }
    
}
function displayList() {
    let listGroup=document.getElementById('list')
    let expensesArray=JSON.parse(localStorage.getItem('allExpenses'))
    if(!expensesArray || expensesArray.length==0 || expensesArray==undefined){
        document.querySelector('h3').style.visibility="hidden"
        return
    }
    else{
        let total=0
        expensesArray.map((expenseDetails, index)=>{
            total+=parseFloat(expenseDetails.amount)
            let listItem=document.createElement('li')
            let span=document.createElement('span')
            let amountItem=document.createTextNode(`-₹${expenseDetails.amount}`)
            let descItem=document.createTextNode(`${expenseDetails.desc}`)
            let catgItem=document.createTextNode(`${expenseDetails.catg}`)
            let delBtn=document.createElement('button')
            delBtn.className="delete-btn"
            delBtn.id=index
            delBtn.append(document.createTextNode('x'))
            let editBtn=document.createElement('button')
            editBtn.className="edit-btn"          
            editBtn.id=index
            editBtn.append(document.createTextNode('Edit'))
            listItem.className="minus"
            listItem.append(delBtn)
            listItem.append(amountItem)
            span.appendChild(descItem)
            listItem.append(span)
            listItem.append(catgItem)
            listItem.append(editBtn)
            listGroup.appendChild(listItem)
        })
        document.getElementById('money-minus').textContent=`-₹${parseFloat(total)}`
    }
}
//Global variables
let amountInput=document.getElementById('amount')
let descInput=document.getElementById('desc')
let catgInput=document.getElementById('catg')
//button
let addBtn=document.getElementById('addBtn')
//Event Listeners
addBtn.addEventListener('click', addExpense)
//Display the List of Expenses
displayList()
let delBtn=document.querySelectorAll('.delete-btn')
for (let i=0; i<delBtn.length; i++){
    delBtn[i].addEventListener('click', deleteExpense)
}
let editBtn=document.querySelectorAll('.edit-btn')
for (let i=0; i<delBtn.length; i++){
    editBtn[i].addEventListener('click', editExpense)
}
