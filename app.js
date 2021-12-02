
function addTodo(){
    var inp=document.getElementById('input');
    var ulList=document.getElementById('list');
    console.log(inp.value)

    var todoLi=document.createElement('li')
    var liTxt=document.createTextNode(inp.value);
    todoLi.appendChild(liTxt)


    // creating Edit btn
    var editBtn=document.createElement('button');
    editBtn.setAttribute('onclick','editList(this)');
    editBtn.setAttribute('class','liBtn fas fa-edit')

    // todoLi.appendChild(editBtn)

    // creating Del btn
    var delBtn=document.createElement('button');
    delBtn.setAttribute('onclick','delList(this)');
    delBtn.setAttribute('class','liBtn fas fa-trash-alt')

    // todoLi.appendChild(delBtn)

    var liBtnDiv=document.createElement('div');
    liBtnDiv.appendChild(editBtn);
    liBtnDiv.appendChild(delBtn)

    liBtnDiv.setAttribute('class','liBtn')
    todoLi.appendChild(liBtnDiv)
    // todoLi.firstChild.style.width=40+"px";
    // console.log(todoLi.firstChild)
    ulList.appendChild(todoLi);
}