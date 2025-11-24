let story = document.querySelectorAll(".profile");

story.forEach((ele)=>{
    let timelap = ele.childNodes[1].childNodes[1].childNodes[1];
    ele.addEventListener("click",()=>{
        ele.childNodes[1].style.visibility="visible";
        let counter = 0;
        let meter = setInterval(function(){
            counter++;
            timelap.style.width=`${counter}%`;
        },79);

        
        setTimeout(function(){
            ele.childNodes[1].style.visibility = "hidden";
            timelap.style.width="0%";
            clearInterval(meter);
            ele.style.background="none";
            ele.style.backgroundColor="black";
            ele.style.border="2px solid rgba(180, 180, 180, 0.471)";

        },8000)
    })
})
















let post = document.querySelector("#post_cont");
let like_overlay = document.querySelector("#like_overlay");
let like_btn_div = document.querySelector("#bottom_left div:nth-child(1)");
let like_btn = document.querySelector("#like_btn");
let follow_btn = document.querySelector("#follow_btn");
let indicator = document.querySelector("#follow_indi");
let flag = 0;

follow_btn.addEventListener("click",()=>{
    if(flag==0){
        indicator.innerHTML = "(Following)";
        follow_btn.innerHTML = "Unfollow";
        follow_btn.style.backgroundColor = "white";
        follow_btn.style.color = "#4A5DF9";
        follow_btn.style.border = "2px solid #4A5DF9";
        indicator.style.color="lightseagreen";
        flag=1;
    }
    else{
        indicator.innerHTML = "(Not Following)";
        follow_btn.innerHTML = "Follow";
        follow_btn.style.backgroundColor = "#4A5DF9";
        follow_btn.style.color = "white";
        follow_btn.style.border = "none";
        indicator.style.color="crimson";
        flag=0;

    }
})

post.addEventListener("dblclick", () => {
    like_overlay.style.opacity = "1";
    let ran = (Math.floor(Math.random() * 56)) - 25;
    like_overlay.style.transform = `scale(2) rotate(${ran}deg) translateY(0%)`;
    like_btn_div.innerHTML = `<i id="like_btn"class="ri-heart-fill"></i></i><p>3.4M</p>`;
    like_btn = document.querySelector("#like_btn");
    like_btn.style.color = "rgb(233, 38, 38)";

    setTimeout(() => {
        like_overlay.style.transform = "scale(1.5) rotate(0deg) translateY(-200%)";
    }, 400);

    setTimeout(() => {
        like_overlay.style.opacity = "0";

    }, 500);

    setTimeout(() => {
        like_overlay.style.transform = "scale(2) rotate(0deg) translateY(0%)";

    }, 700);
})

like_btn.addEventListener("click", () => {
    like_btn_div.innerHTML = `<i id="like_btn"class="ri-heart-fill"></i></i><p>3.4M</p>`;
    like_btn = document.querySelector("#like_btn");
    like_btn.style.color = "rgb(233, 38, 38)";

})