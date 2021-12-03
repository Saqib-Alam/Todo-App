
function addTodo(){
    var inp=document.getElementById('input');
    if(inp.value.length>=1){
    var ulList=document.getElementById('list');

    var todoLi=document.createElement('li')
    var liTxt=document.createTextNode(inp.value);
    todoLi.appendChild(liTxt)

    inp.value="";

    // creating Edit btn
    var editBtn=document.createElement('button');
    editBtn.setAttribute('onclick','editList(this)');
    editBtn.setAttribute('class','liBtn fas fa-edit')


    // creating Del btn
    var delBtn=document.createElement('button');
    delBtn.setAttribute('onclick','delList(this)');
    delBtn.setAttribute('class','liBtn fas fa-trash-alt')

    // todoLi.appendChild(delBtn)

    var liBtnDiv=document.createElement('span');
    liBtnDiv.appendChild(editBtn);
    liBtnDiv.appendChild(delBtn)

    liBtnDiv.setAttribute('class','liBtnBox')
    todoLi.appendChild(liBtnDiv)
    ulList.appendChild(todoLi);
    }

    else{
        alert("Don't leave the field Empty")
    }
}


function delAll(){
    var list=document.getElementById('list')
    list.innerHTML="";
}

function delList(e){
    e.parentNode.parentNode.remove();
}

function editList(e){
    var editLi=prompt('Edit todo');
    e.parentNode.previousSibling.nodeValue=editLi;
    }