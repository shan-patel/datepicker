//count for localstorage key  and we pass lenght because if any data in storage than data not merge in one array
localdata=Object.keys(localStorage);
console.log(localdata.length);
count=localdata.length+100;

//submit call
let submit=document.getElementById("submit");
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    address=document.getElementById("address").value;
    select=document.getElementById("select").value;
    skills=document.getElementsByClassName("checkbox");
    src=[]
    for(let i=0;i<skills.length;i++){
        if(skills[i].checked == true){
            console.log(skills[i].value);
            src.push("true");
        }
        else{
            src.push("false");
        }
    }
    gender=document.getElementsByClassName("gender");
    gen=[] 
    for(let i=0;i<gender.length;i++){
    if(gender[i].checked ==true){
        console.log(gender[i].value);
        gen.push("true");
        }
        else{
        gen.push("false");
            }
        }

    count++;
    get=localStorage.getItem(`${count}`);
        if(get== null){
        arr=[]
        }
        else{
        arr=JSON.parse(get)
        }
    //object in which we pass the form data ,and then we pass object direct to localstorage
    localobject={
        name:name,
        email:email,
        address:address,
        select:select,
        skills:src,
        gender:gen
    }
    console.log(localobject);
    localStorage.setItem(`${count}`,JSON.stringify(localobject));
   
});

    //passing  localstorage data to html dom
localdata.forEach((element,index) => {
    getlocaldata=JSON.parse(localStorage.getItem(`${index+101}`));
    console.log(getlocaldata)
    tbody=document.getElementById("tbody");
    tabletr=document.createElement('tr')
    tabletd1=document.createElement('td');
    tabletd2=document.createElement('td');
    tabletd3=document.createElement('td');
    tabletd4=document.createElement('td');
    tabletd5=document.createElement('td');
    tabletd6=document.createElement('td');  
    tabletd7=document.createElement('td');  

    
    tabletd1.innerHTML=getlocaldata.name;
    tabletd2.innerHTML=getlocaldata.email;
    tabletd3.innerHTML=getlocaldata.address;
    tabletd4.innerHTML=getlocaldata.select;
    tabletd5.innerHTML=getlocaldata.skills;
    tabletd6.innerHTML=getlocaldata.gender;
    btn=`<button type="button" id="update${index+101}" onclick="updateData(${index})">Edit</button>
    <button type="button" id="delete${index+1}" onclick="deleteData(${index})">Delete</button>`
    tabletd7.innerHTML=btn;
    tabletr.appendChild(tabletd1);
    tabletr.appendChild(tabletd2);
    tabletr.appendChild(tabletd3);
    tabletr.appendChild(tabletd4);
    tabletr.appendChild(tabletd5);
    tabletr.appendChild(tabletd6);
    tabletr.appendChild(tabletd7);
    tbody.appendChild(tabletr);

    });
   



//delete event on html dom data which passing by localastorage 
function deleteData(index){
    let deletebtn=document.getElementById(`delete${index+1}`);
    localStorage.removeItem(`${index+101}`);
    
}

//update function for edit form data 
function updateData(index){
    let updatebtn=document.getElementById(`update${index+101}`);
    updatedata=JSON.parse(localStorage.getItem(`${index+101}`))
    console.log(updatedata);
    name=document.getElementById("name").value=updatedata.name;
    email=document.getElementById("email").value=updatedata.email;
    address=document.getElementById("address").value=updatedata.address;
    select=document.getElementById("select").value=updatedata.select;
    // console.log(updatedata.skills.length)
    for(let i=0;i<updatedata.skills.length;i++){
        if(updatedata.skills[i]=="true"){
        skills=document.getElementById(`check${i+1}`).checked=true;
        }
    }
    for(let i=0;i<updatedata.gender.length;i++){
        if(updatedata.gender[i]=="true"){
        gender=document.getElementById(`gen${i+1}`).checked=true;
        console.log(gender)
        }
    }
    
}