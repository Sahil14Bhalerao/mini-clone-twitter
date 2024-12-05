import db from "./firebase.js";

//Creating a new Tweet
const postForm = document.querySelectorAll(".post-sender .post-form");
const postCont = document.querySelector(".posts-container");

function btnsEffects() {
  //Change the post header button icon color when hover it
  const postHeaderBtn = document.querySelectorAll(".post .post-header button");
  const btnSvgPath = document.querySelectorAll(
    ".post .post-header button svg path"
  );

  postHeaderBtn.forEach((btn, i) => {
    btn.addEventListener("mouseover", () => {
      btnSvgPath[i].style.fill = "rgb(29, 161, 242)";
    });
  });

  postHeaderBtn.forEach((btn, i) => {
    btn.addEventListener("mouseout", () => {
      btnSvgPath[i].style.fill = "#5b7083";
    });
  });

  //effects on the post-btns
  const postBtns = document.querySelectorAll(".feed .post-btns button");

  postBtns.forEach((btn) => {
    const btnImgBox = btn.children[0];
    const btnSvgPath = btn.children[0].children[0].children[0];
    const btnSvgPath1 = btn.children[0].children[0].children[1];
    const btnSpan = btn.children[1];

    btn.addEventListener("mouseover", () => {
      if (btn.className == "comment-btn") {
        btnImgBox.style.backgroundColor = "rgba(29, 161, 242, 0.1)";
        btnSvgPath.style.fill = "rgb(29, 161, 242)";
        btnSpan.style.color = "rgb(29, 161, 242)";
      } else if (btn.className == "retweet-btn") {
        btnImgBox.style.backgroundColor = "rgba(23, 191, 99, 0.1)";
        btnSvgPath.style.fill = "rgb(23, 191, 99)";
        btnSpan.style.color = "rgb(23, 191, 99)";
      } else if (btn.className == "like-btn") {
        btnImgBox.style.backgroundColor = "rgba(224, 36, 94, 0.1)";
        btnSvgPath.style.fill = "rgb(224, 36, 94)";
        btnSpan.style.color = "rgb(224, 36, 94)";
      } else if (btn.className == "send-btn") {
        btnImgBox.style.backgroundColor = "rgba(29, 161, 242, 0.1)";
        btnSvgPath.style.fill = "rgb(29, 161, 242)";
        btnSvgPath1.style.fill = "rgb(29, 161, 242)";
      }
    });

    btn.addEventListener("mouseout", () => {
      btnImgBox.style.backgroundColor = "";
      btnSvgPath.style.fill = "#5b7083";

      if (btn.className != "send-btn") {
        btnSpan.style.color = "#5b7083";
      } else if (btn.className == "send-btn") {
        btnSvgPath1.style.fill = "#5b7083";
      }
    });
  });
}
btnsEffects();

function createPost(content, time) {
  //creating the post
  let newPost = document.createElement("div");
  newPost.setAttribute("class", "post");
  newPost.innerHTML = `
  <div class="profile-img">
    <img
      src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
      alt="profile image"
    />
  </div>
  <div class="post-middle">
    <div class="post-header">
      <h2>Jeff Richards</h2>
      <span class="username">@jeffrichards</span>
      <span class="dot">.</span>
      <span class="time">${time}</span>
      <button>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#5b7083"
            d="M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="post-content">
      ${content}
    </div>
    <div class="post-btns">
      <button class="comment-btn">
        <div class="img-container">
          <svg viewBox="0 0 24 24">
            <path
            d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
            ></path>
          </svg>
        </div>
        <span>1.2k</span>
    </button>
    <button class="retweet-btn">
      <div class="img-container">
        <svg viewBox="0 0 24 24">
          <path
            d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
          ></path>
        </svg>
      </div>
      <span>10k</span>
    </button>
    <button class="like-btn">
      <div class="img-container">
        <svg viewBox="0 0 24 24">
          <path
            d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
          ></path>
        </svg>
      </div>
      <span>23k</span>
    </button>
    <button class="send-btn">
      <div class="img-container">
        <svg viewBox="0 0 24 24">
          <path
            d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"
          ></path>
          <path
            d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"
          ></path>
        </svg>
      </div>
    </button>
  </div>
</div>`;
  postCont.appendChild(newPost);

  const popupCont = document.querySelector(".popup-container");
  const feedSec = document.querySelector(".feed");
  feedSec.style.display = "";

  btnsEffects();
}

postForm.forEach((form, index) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const twitterInp = document.querySelectorAll(
      ".post-sender .post-form textarea"
    );

    //get the twitter content
    const textArr = twitterInp[index].value.split(/\n/);
    let postText = "";
    for (let i = 0; i < textArr.length; i++) {
      postText += `<p>${textArr[i]}</p>`;
    }

    //get the time of the tweet
    let postId;
    function genTime() {
      const date = new Date();
      postId = `${date.getFullYear()}_${
        date.getMonth() + 1
      }_${date.getDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;
    }
    genTime();
    db.collection("posts").doc(postId).set({ id: postId, content: postText });

    popupCont.style.display = "none";
    form.reset();
  });
});

db.collection("posts").onSnapshot((snapshot) => {
  let changes = snapshot.docChanges();
  changes.forEach((change) => {
    if (change.type == "added") {
      const content = change.doc.data().content;
      const postId = change.doc.data().id;
      let idSplited = postId.split("_");

      const date = new Date();
      let nowTime = `${date.getFullYear()}_${
        date.getMonth() + 1
      }_${date.getDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;
      let nowTimeArr = nowTime.split("_");

      //transform the array elements into numbers
      for (let i = 0; i < idSplited.length; i++) {
        idSplited.splice(i, 1, Number(idSplited[i]));
        nowTimeArr.splice(i, 1, Number(nowTimeArr[i]));
      }

      const months = {
        1: "jan",
        2: "feb",
        3: "mar",
        4: "apr",
        5: "may",
        6: "jun",
        7: "jul",
        8: "aug",
        9: "sep",
        10: "oct",
        11: "nov",
        12: "dec",
      };

      let time;
      if (nowTimeArr[0] == idSplited[0]) {
        if (nowTimeArr[1] == idSplited[1]) {
          if (nowTimeArr[2] == idSplited[2]) {
            if (nowTimeArr[3] == idSplited[3]) {
              if (nowTimeArr[4] == idSplited[4]) {
                time = `${nowTimeArr[5] - idSplited[5]}s`;
              } else {
                time = `${nowTimeArr[4] - idSplited[4]}m`;
              }
            } else if (
              nowTimeArr[3] - idSplited[3] == 1 &&
              nowTimeArr[4] - idSplited[4] < 0
            ) {
              time = `${60 - idSplited[4] + nowTimeArr[4]}`;
            } else {
              time = `${nowTimeArr[3] - idSplited[3]}h`;
            }
          } else if (
            nowTimeArr[2] - idSplited[2] == 1 &&
            nowTimeArr[3] - idSplited[3] < 0
          ) {
            time = `${24 - idSplited[3] + nowTimeArr[3]}h`;
          } else {
            time = `${nowTimeArr[2] - idSplited[2]}d`;
          }
        } else {
          time = `${months[nowTimeArr[1]]} ${nowTimeArr[2]}`;
        }
      } else {
        time = `${nowTimeArr[0]} ${months[nowTimeArr[1]]} ${nowTimeArr[2]}`;
      }
      createPost(content, time);
    }
  });
});
