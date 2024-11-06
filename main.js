let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit  = document.getElementById('submit');
let search = document.getElementById('search');
let searchtitle = document.getElementById('searchtitle');
let searchcategory = document.getElementById('searchcategory');
let mood ='create';
let tmp;

//get total
 function gettotal(){
    if (price.value !=''){
        let result = +price.value + +taxes.value + +ads.value - +discount.value;
        total.innerHTML=result;
        total.style.backgroundColor = 'rgb(18, 160, 18) ';
    }
    else{
        total.innerHTML='';
        total.style.backgroundColor = 'rgb(230, 53, 65)';
    }
    }
 //create product
 let datapro;
 if (localStorage.product != null){
    datapro = JSON.parse(localStorage.product);
 }
 else{datapro=[]}

submit.onclick=function(){
    let pro = {
        title:title.value,
        price: price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    if(title.value!=''&& price.value!=''&& category.value !='' && count.value <100 ){
    if(mood=='create'){if(pro.count >1){
        for(let i=0;i< pro.count;i++){
            datapro.push(pro);
        }
    }
    else{ datapro.push(pro);}
}
   else{
    datapro[tmp] = pro;
    mood ='create';
    count.style.display='block';
    submit.innerHTML='create';
   }
   cleardatainput();
}
    localStorage.setItem('product',JSON.stringify(datapro)); 
    showdata();
    total.style.backgroundColor = 'rgb(230, 53, 65)';

}

function cleardatainput(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
    
}


function showdata(){
    let table = '';
    for(let i=0;i< datapro.length;i++){
        table +=`<tr><td>${i}</td>
        <Td>${datapro[i].title}</Td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].total}</td>
        <td>${datapro[i].category}</td>
        <td><button onclick="updatedata(${i})" id="update">Update</button></td>
        <td><button onclick="deletedata(${i})" id="delete">Delete</button></td>
         </tr>`;
    }
    document.getElementById('tbody').innerHTML=table;
    let deleteall = document.getElementById('deleteall');
    if (datapro.length > 0){
        deleteall.innerHTML=` <button onclick="deleteall()">Delete All (${datapro.length})</button> `
    }
    else{
        deleteall.innerHTML=``;
    }
}
showdata()


function deletedata(i){
    datapro.splice(i,1);
    localStorage.product=JSON.stringify(datapro);
    showdata();
    
}
function deleteall(){
    localStorage.clear();
    datapro.splice(0);
    showdata();
}
function updatedata(i) {
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    taxes.value = datapro[i].taxes;
    ads.value = datapro[i].ads;
    discount.value = datapro[i].discount;
    gettotal();
    count.style.display='none';
    category.value = datapro[i].category;
    submit.innerHTML='update';
    mood='update';
    tmp=i;
}
let searchmood ='title';
function getsearchmood(id){
    if (id=='searchtitle'){
        searchmood ='title';
        search.placeholder='Search By Title';
    }
    else{
        searchmood ='category';
        search.placeholder='Search By Category';
    }
    search.focus();
    search.value='';
    showdata();
}
let value ='';
function searchdata(value){
    let table='';
       if(searchmood =='title'){
        for(let i=0;i<datapro.length;i++){
            if (datapro[i].title.toLowerCase().includes(value.toLowerCase())){
                table +=`<tr><td>${i}</td>
                <Td>${datapro[i].title}</Td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="updatedata(${i})" id="update">Update</button></td>
                <td><button onclick="deletedata(${i})" id="delete">Delete</button></td>
                 </tr>`;

            }
        }
       }
    else{
        for(let i=0;i<datapro.length;i++){
            if (datapro[i].category.toLowerCase().includes(value.toLowerCase())){
                table +=`<tr><td>${i}</td>
                <Td>${datapro[i].title}</Td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="updatedata(${i})" id="update">Update</button></td>
                <td><button onclick="deletedata(${i})" id="delete">Delete</button></td>
                 </tr>`;

            }

       }
    }
    document.getElementById('tbody').innerHTML=table;

}