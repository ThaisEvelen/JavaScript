const feed = document.getElementById("feed");
const form = document.getElementById("form-post");
const postText = document.getElementById("post-text");
const usernameInput = document.getElementById("username");

let posts = [];

function loadPosts() {
  const saved = localStorage.getItem("posts");
  if (saved) {
    posts = JSON.parse(saved);
  }
}

function savePosts() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

async function getCatImage() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await res.json();
  return data[0].url;
}

function renderFeed() {
  feed.innerHTML = "";
  posts.forEach((post, index) => {
    const div = document.createElement("div");
    div.classList.add("post");

    div.innerHTML = `
      <div class="user-info">
        <img src="${post.avatar}" alt="avatar" class="avatar">
        <span class="username">${post.username}</span>
      </div>
      <p>${post.text}</p>
      <img src="${post.catImg}" class="cat-img" alt="Gatinho">
      <button class="like-btn">Curtir (${post.likes})</button>
    `;

    const likeBtn = div.querySelector(".like-btn");
    likeBtn.addEventListener("click", () => {
      posts[index].likes++;
      savePosts(); 
      renderFeed();
    });

    feed.appendChild(div);
  });
}


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = postText.value.trim();
  const username = usernameInput.value.trim();
  if (!text || !username) return;

  const catImg = await getCatImage();

  const newPost = {
    date: new Date(),
    username: username,
    avatar: "https://i.pravatar.cc/40", 
    text: text,
    catImg: catImg,
    likes: 0
  };

  posts.unshift(newPost);

  postText.value = "";
  savePosts();
  renderFeed();
});

loadPosts();
renderFeed();
