let colors=["#34e8eb",'#abeb34',"#eb3440","#ebd334","#eb8c34"]

function addNoteToList()
{
let newnote=document.getElementById("textbox");
let list=document.getElementById("list");
let color;
document.getElementsByName("color").forEach((item,ind)=> {if(item.checked) {color=colors[ind]}});
list.innerHTML=list.innerHTML+ `<li style=background-color:${color};>${newnote.value}</li>`;
}