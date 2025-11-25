let reel = document.querySelector(".reel");
let body = document.body;
let reels = document.querySelector("#reels");
let arr = [
  {
    content: "https://i.pinimg.com/736x/37/02/ec/3702ecc4417474e634d0f0b8cff15761.jpg",
    username: "shadow_realm_07",
    user_pfp: "https://i.pinimg.com/474x/51/92/14/519214435c14257e6348d331e157074d.jpg",
    caption: "Some places feel like they were never meant to be found.",
    likes: "389K",
    comments: "143K",
    shares: "57K"
  },
  {
    content: "https://i.pinimg.com/736x/8c/a4/8c/8ca48ce07e9afa182c7d13233cd633e4.jpg",
    username: "aesthetic.vibes",
    user_pfp: "https://i.pinimg.com/736x/df/f9/22/dff92224d58fbeedcf2860b21aaa3615.jpg",
    caption: "soft lights • soft dreams • soft feelings ✨",
    likes: "472K",
    comments: "265K",
    shares: "102K"
  },
  {
    content: "https://i.pinimg.com/736x/37/63/18/376318cc112f1d6f582a878d165d217b.jpg",
    username: "dreamy_pixels",
    user_pfp: "https://i.pinimg.com/736x/c5/fd/cd/c5fdcdab391dd9957a6c7fd863bda6f9.jpg",
    caption: "When reality looks like a painting 💗",
    likes: "157K",
    comments: "89K",
    shares: "41K"
  },
  {
    content: "https://i.pinimg.com/1200x/ae/a3/b9/aea3b9bcbc85aa9e3dae3b94a6b2069d.jpg",
    username: "nightcrawler_x",
    user_pfp: "https://i.pinimg.com/736x/76/e9/ad/76e9ad2dc5f89a155d22669e3fd355da.jpg",
    caption: "Night walks hit different when your mind is loud.",
    likes: "396K",
    comments: "178K",
    shares: "73K"
  },
  {
    content: "https://i.pinimg.com/736x/28/8c/6b/288c6b66ccb534dd68c5448c4e794db3.jpg",
    username: "wildheart_journey",
    user_pfp: "https://i.pinimg.com/1200x/86/96/9b/86969ba232459a39661baab85b6304a7.jpg",
    caption: "Chasing moments that feel like freedom.",
    likes: "221k",
    comments: "102k",
    shares: "35k"
  },
  {
    content: "https://i.pinimg.com/736x/86/92/26/869226d1fea8c8fb2a81f838527a9c88.jpg",
    username: "solitude_soul",
    user_pfp: "https://i.pinimg.com/736x/09/62/5a/09625a102a159c70ed6d858dca069531.jpg",
    caption: "In another universe, I hope it's still you and me.",
    likes: "509K",
    comments: "307K",
    shares: "128K"
  },
  {
    content: "https://i.pinimg.com/736x/11/1a/9d/111a9df36d5e9ad6bad6e99f727d3760.jpg",
    username: "lostin_artifacts",
    user_pfp: "https://i.pinimg.com/1200x/c2/25/b5/c225b56fac54ae28ce68f9b328ee8efa.jpg",
    caption: "Every corner hides a story.",
    likes: "167K",
    comments: "7K",
    shares: "24K"
  }
];
let acc = ``;
arr.forEach((ele) => {
  acc += `  <div class="reel_cont">
    <div class="reel"><img src="${ele.content}">
      <div class="reel_disc_overlay"></div>
      <div class="reel_disc">
                  <div class="user_profile">
                      <img class="user_pfp" src="${ele.user_pfp}">
                      <h4>${ele.username}</h4>
                      <button>Follow</button>
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
      </div>
      <div class="reactions_div">
      <div>
      <i class="ri-heart-line"></i>
      <p>${ele.likes}</p>
      </div>
      <div>
      <i class="ri-chat-3-line"></i>
      <p>${ele.comments}K</p>
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

