function loadItems(){
    return fetch('data.json')//Response로자료를 받아오고
    .then(result=>result.json())//REsponse 내부에 object가져오고
   
    .then(json=>json.sub)//오브젝트 내부에 sub인배열 가져오고
   
}
function displayItems(item){
    const container=document.querySelector('.sub');//어느곳에 넣을것이냐
    
 
    container.innerHTML=item.map(item=>createHtmlString(item)).join('');//배열인것으로 활용하여html공간을 채워놓고 그것을 배열로 만들고 (이게 map의 역할),join은 그걸 글자로 변경join('')여기 괄호를 빈칸을 넣으면 콤마가 드가서 공간이 넓어짐
    
}
function createHtmlString(item){
    return `<div class="blue_p"><img height="50px" src="${item.image}" alt="">${item.gender},${item.size}</div>`;
}
/*function updateItems(item, key, value) {
    item.forEach(item => {
    if (item.dataset[key] === value) {
        item.classList.remove('invisible');
    } else {
        item.classList.add('invisible');
    }
    });
}*/
function onButtonClick(event,item){
    const dataset=event.target.dataset;////이미지를 넣으면 dataa-key data-value는 이미지 <img> 여기에 넣기
    const value=dataset.value;
    const key=dataset.key;
    if(key==null || value==null){
        return;
    }

    
    displayItems(item.filter(item=>item[key]===value));//5번재 줄에서 나온것중에 json에서 "key":"값' 이런식을로 되있는거 그 값이 value 랑 같은 거 출력

}



function setEventListener(item){
    const logo=document.querySelector('.shop')//어디에 적용
    const button=document.querySelector('.search')//어디에 적용
    logo.addEventListener('click',()=>displayItems(item));//어떤이벤트가 일어났을때
    button.addEventListener('click',event=>onButtonClick(event,item));//어떤이벤트가 일어났을때

}



loadItems()
    .then(item=>{
        displayItems(item);
        setEventListener(item);
    })

//.shop:hover, //마우스 올렸으때 크기 커지는거 hover=마우스 올렸을때 transform:scale(1.1); 이거는 크기 커지는거
//.search button:hover{
//    transform:scale(1.1);
//}
