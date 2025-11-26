let reel = document.querySelector(".reel");
let body = document.body;
let reels = document.querySelector("#reels");
let sound_btn = document.querySelectorAll(".sound_btn");
let arr = [
  {
    content: "videos/5b72196d076913517e1813c2bce3f4c3.mp4",
    username: "shadow_realm_07",
    user_pfp: "https://i.pinimg.com/474x/51/92/14/519214435c14257e6348d331e157074d.jpg",
    caption: "Some places feel like they were never meant to be found.",
    likes: "389K",
    comments: "143K",
    shares: "57K",
    isLiked: false,
    isFollowed: false
  },
  {
    content: "videos/6d9d5279aee445983ef9d031cee2a9ea189e76f286511ef73eafe2d9004f0242.mp4",
    username: "aesthetic.vibes",
    user_pfp: "https://i.pinimg.com/736x/df/f9/22/dff92224d58fbeedcf2860b21aaa3615.jpg",
    caption: "soft lights • soft dreams • soft feelings ✨",
    likes: "472K",
    comments: "265K",
    shares: "102K",
    isLiked: false,
    isFollowed: false
  },
  {
    content: "videos/43bb9bd719d25039c3ed87f5cc1300d0.mp4",
    username: "dreamy_pixels",
    user_pfp: "https://i.pinimg.com/736x/c5/fd/cd/c5fdcdab391dd9957a6c7fd863bda6f9.jpg",
    caption: "When reality looks like a painting 💗",
    likes: "157K",
    comments: "89K",
    shares: "41K",
    isLiked: false,
    isFollowed: false
  },
  {
    content: "videos/57674fb2e1700af8ba71ff92da499fb6b0f282b2ec9bdf1c782561ed4373328c.mp4",
    username: "nightcrawler_x",
    user_pfp: "https://i.pinimg.com/736x/76/e9/ad/76e9ad2dc5f89a155d22669e3fd355da.jpg",
    caption: "Night walks hit different when your mind is loud.",
    likes: "396K",
    comments: "178K",
    shares: "73K",
    isLiked: false,
    isFollowed: true
  },
  {
    content: "videos/4646329-uhd_2160_4096_25fps.mp4",
    username: "wildheart_journey",
    user_pfp: "https://i.pinimg.com/1200x/86/96/9b/86969ba232459a39661baab85b6304a7.jpg",
    caption: "Chasing moments that feel like freedom.",
    likes: "221k",
    comments: "102k",
    shares: "35k",
    isLiked: false,
    isFollowed: false
  },
  {
    content: "videos/6491491c4026b13ec6cbc4085e5af7f6a2fd5fee362791f22daa4bc24a019aa6.mp4",
    username: "solitude_soul",
    user_pfp: "https://i.pinimg.com/736x/09/62/5a/09625a102a159c70ed6d858dca069531.jpg",
    caption: "In another universe, I hope it's still you and me.",
    likes: "509K",
    comments: "307K",
    shares: "128K",
    isLiked: false,
    isFollowed: false
  },
  {
    content: "videos/17243368-uhd_1296_2304_24fps.mp4",
    username: "lostin_artifacts",
    user_pfp: "https://i.pinimg.com/1200x/c2/25/b5/c225b56fac54ae28ce68f9b328ee8efa.jpg",
    caption: "Every corner hides a story.",
    likes: "167K",
    comments: "7K",
    shares: "24K",
    isLiked: false,
    isFollowed: false
  }
];

function render() {
  let acc = ``;
  arr.forEach((ele, i) => {
    acc += `<div class="reel_cont">
                <div class="reel"><video autoplay muted loop src="${ele.content}"></video>
                    <div class="reel_disc_overlay"></div>
                    <div class="reel_disc">
                        <div class="user_profile">
                            <img class="user_pfp" src="${ele.user_pfp}">
                            <h4>${ele.username}</h4>
                            <button id="${i}" class="reel_follow_btn">${ele.isFollowed ? "Unfollow" : "Follow"}</button>
                        </div>
                        <div class="caption">
                            <p>
                                ${ele.caption}
                            </p>
                            <div>
                                <i class="ri-more-line"></i>
                                <p>more</p>
                            </div>
                        </div>
                    </div>
                    <div class="sound_btn">
                    <i class="ri-volume-down-fill"></i>
                    </div>
                </div>
                <div class="reactions_div">
                    <div class="like_btn" id="${i}" data-like="${ele.likes}">
                        ${ele.isLiked ? `<i class="ri-heart-fill liked"></i>` : `<i class="ri-heart-line"></i>`}
                        <p>${ele.likes}</p>
                    </div>
                    <div>
                        <i class="ri-chat-3-line"></i>
                        <p>${ele.comments}</p>
                    </div>
                    <div>
                        <i class="ri-share-forward-line"></i>
                        <p>${ele.shares}</p>
                    </div>
                    <div>
                        <i class="ri-more-line"></i>
                    </div>
                </div>
            </div>`;
  })
  reels.innerHTML = acc;
}
render();



reels.addEventListener("click",function(dets){
  let objid = dets.target.id;
  
  if(dets.target.className === "like_btn"){
      arr[objid].isLiked?arr[objid].isLiked = false:arr[objid].isLiked = true;
      render();
    }
    if(dets.target.className === "reel_follow_btn"){
      arr[objid].isFollowed?arr[objid].isFollowed = false:arr[objid].isFollowed = true;
      render();   
    }
  })
  
  














// let likeBtn = document.querySelector(".like_btn");

// likeBtn.forEach((ele) => {
//   let num = ele.dataset.like;
//   ele.addEventListener("click", () => {
//     if (isliked == 0) {
//       // ele.innerHTML = `<i class="ri-heart-fill"></i><p>${num}</p>`;
//       ele.style.color = "red";
//       ele.childNodes[1].style.color = "white";
//       isliked = true;
//     }
//     else {
//       // ele.innerHTML = `<i class="ri-heart-line"></i><p>${num}</p>`;
//       ele.style.color = "white";
//       isliked = false;
//     }

//   })
// })

// let reel_follow_btn = document.querySelectorAll(".reel_follow_btn");
// reel_follow_btn.forEach((ele) => {
//   ele.addEventListener("click", () => {
//     let isfollowed = ele.dataset.isFollowed === "true";
//     console.log(isfollowed);
//     isfollowed == false ? isfollowed = true : isfollowed = false
//   })
// })
