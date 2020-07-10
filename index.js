let recentI = 0;
const data = [{
    imgUrl: "./images/image-tanya.jpg",
    p: '“ I’ve been interested in coding for a while but never taken the jump,\
          until now.I couldn’t recommend this course enough.I’m now in the job\
          of my dreams and so excited about the future.”',
    name: 'Tanya Sinclair',
    post: 'UX Engineer',

}, {
    imgUrl: "./images/image-john.jpg",
    p: '“ If you want to lay the best foundation possible I’d recommend taking this course. \
  The depth the instructors go into is incredible.I now feel so confident about \
  starting up as a professional developer.”',

    name: 'John Tarkpor',
    post: 'Junior Front-end Developer',

}];
const cardElement = document.querySelector(".card");
const iconElement = document.querySelector(".image-btn-flex")
const renderData = () => {
    const i = Math.abs(recentI % data.length);
    const recentData = data[i]
    cardElement.innerHTML = `<p>${recentData.p}</p >
<div class="title">
    <b class="name">${recentData.name}</b>
    <b class="post">${recentData.post}</b>
</div>`
    iconElement.style.backgroundImage = `url(${recentData.imgUrl})`
}

renderData();
const nextElement = document.querySelector(".next")
const prevElement = document.querySelector(".prev")

nextElement.addEventListener("click", ()=>{
    recentI+=1;
    renderData();
})

prevElement.addEventListener("click", ()=>{
    recentI-=1;
    renderData();
})