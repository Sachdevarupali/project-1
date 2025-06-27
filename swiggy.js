let icon=document.querySelector(".icons #one");

icon.addEventListener("click",work);

let items=document.querySelectorAll(".items div");

function work()
{
    for(let i=0;i<6;i++)
    {
     items[i].style.background='url("Pizza.jpg")';
    }
}


