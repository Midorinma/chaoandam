
    var grap=document.getElementById('id_grab');
    grap.addEventListener('click',function(){
        this.classList.toggle('add');
    });
    

/*----------------Drag-----------*/
const container=document.querySelector('.posts-columns-5');
const cards=document.querySelector('.cards');

let isPressedDown=false;
let cursorXSpace;

container.addEventListener("mousedown",function(e){
    isPressedDown=true;
    cursorXSpace=e.offsetX-cards.offsetLeft;
    container.style.cursor='grabbing';
});

container.addEventListener("mouseup",function(){
    container.style.cursor='grab';
});

window.addEventListener("mouseup",function(){
    isPressedDown=false;
});

container.addEventListener("mousemove",function(e){
    if(!isPressedDown){
        return;
    }
    e.preventDefault();
    cards.style.left=`${e.offsetX-cursorXSpace}px`;
    boundCards();
});

function boundCards(){
    const container_rect=container.getBoundingClientRect();
    const cards_rect=cards.getBoundingClientRect();

    if(parseInt(cards.style.left)>0){
        cards.style.left=0;
    }else if(cards_rect.right < container_rect.right){
        cards.style.left=`-${cards_rect.width-container_rect.width}px`;
    }
}
/*---Search------*/
function timkiem(){
    var tk=document.getElementsByClassName('search-post');
    tk[0].style.display="block";
}
function thoat(){
    var tk=document.getElementsByClassName('search-post');
    tk[0].style.display="none";
}
/*--PAGE2--*/
function openshow1(evt, spName){
    var i, tabcontent, tab;
    tabcontent=document.getElementsByClassName("sp2");
    for(i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }
    tab=document.getElementsByClassName("dang1");
    for(i=0; i<tab.length; i++){
        tab[i].className=tab[i].className.replace("active", "");
    }
    document.getElementById(spName).style.display="block";
    evt.currentTarget.className +=" active";
}
  //Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen1").click();
/*--Tin tức--*/
/*----Next & previous buttons----*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex+=n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    let i;
    let slides=document.getElementsByClassName("mySlides");
    let dots=document.getElementsByClassName("btn1");
    if(n > slides.length){
        slideIndex=1;
    }
    if(n<1){
        slideIndex=slides.length;
    }
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    for(i=0; i<dots.length; i++){
        dots[i].className=dots[i].className.replace("active2","");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className+=" active2";
}
/*---Tabs Menu---*/
function openCity(evt, menu){
    var i, tabcontent;
    tabcontent=document.getElementsByClassName("tabcontent");
    for(i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }
    document.getElementById(menu).style.display="block";
}
document.getElementById("normal").click();
/*--PAGE3--*/
/*SEARCH*/
function search(){
    const searchbox=document.getElementById("tk").value.toLowerCase();
    const storeitems=document.getElementById("posts-columns-3");
    const product=document.querySelectorAll(".post-wrapper6");
    const pname=document.getElementsByTagName("b");

    for(var i=0; i<pname.length; i++){
        let match=product[i].getElementsByTagName("b")[0];

        if(match){
           let textvalue= match.textContent || match.innerHTML
           /*
           Phương thức này indexOf()trả về chỉ mục đầu tiên mà tại đó có thể tìm thấy phần tử đã 
           cho trong mảng hoặc -1 nếu không có phần tử đó.
           */
           if(textvalue.toLowerCase().indexOf(searchbox) > -1){
                product[i].style.display="";
           }else{
                product[i].style.display="none";
           }
        }
    }
}
/*ADD && REMOVE GIO HANG*/
let list=document.querySelectorAll(".posts-row-4 .post-wrapper2");
list.forEach(item=>{
    item.addEventListener("click",function(event){
        if(event.target.classList.contains('mua-hang')){
            var itemNew=item.cloneNode(true);
            let checkIsset=false;

            let listCart=document.querySelectorAll(".cart .post-wrapper2");
            listCart.forEach(cart=>{
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    },1000)
                }
            })
            if(checkIsset == false){
                document.querySelector('.listCart').appendChild(itemNew);
            }
        }
    })
})
function Remove($key){
    let listCart = document.querySelectorAll('.cart .post-wrapper2');
    listCart.forEach(item => {
        if(item.getAttribute('data-key') == $key){
            item.remove();
            return;
        }
    })
}
/*----RESPONSIVE---*/
function navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/*---VALIDATE FORM login---*/
    // Lấy giá trị của một input
    function getValue(id){
        return document.getElementById(id).value.trim();
    }

    // Hiển thị lỗi
    function showError(key, mess){
        document.getElementById(key + '_error').innerHTML = mess;
    }

function validate()
{
    var flag = true;
    // 2. password
    var password = getValue('password');
    if (password == '' || password.length < 8){
        flag = false;
        showError('password', 'Vui lòng kiểm tra lại Password');
    }

    // 4. Email
    var email = getValue('email');
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!mailformat.test(email)){
        flag = false;

        showError('email', 'Vui lòng kiểm tra lại Email');
    }
    return flag;
}
/*VALIDATE FORM Signup*/
function getValue1(id){
    return document.getElementById(id).value.trim();
}

function showError1(key, mess){
    document.getElementById(key + '_error').innerHTML = mess;
}

function validate1()
{
    var flag = true;

    // 2. password
    var password = getValue1('password1');
    var repassword = getValue1('repassword');
    if (password == '' || password.length < 8 || password != repassword){
        flag = false;
        showError1('password1', 'Vui lòng kiểm tra lại Password');
    }

    // 4. Email
    var email = getValue1('email1');
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!mailformat.test(email)){
        flag = false;

        showError1('email1', 'Vui lòng kiểm tra lại Email');
    }

    return flag;
}

