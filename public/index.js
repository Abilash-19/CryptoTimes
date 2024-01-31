const newscontainer = document.querySelector(".container");
function rendernews(data) {
  const html = `
  
  <div class="content p-4   flex flex-col md:flex-row  justify-around gap-10 items-center">
  <div class="flex flex-col gap-4 md:w-[80%] w-full ">
  <h2 class="text-3xl font-extrabold text-heading">${data.title}</h2>
  <p class="font-bold text-caption text-md">${data.categories}</p>
  <p class=" text-md font-normal text-heading text-start md:text-justify text-[#353b48]  para">${data.body}</p>
  <a class="font-semibold text-[#FF7F50] underline decoration-[#1f121a] hover:text-[#1f121a] hover:decoration-[#ff7f50]  decoration-3 underline-offset-4 text-xl font-bold" href=${data.url} target="_blank" >Read more...</a>
</div>
  <div class="img   w-[full] md:w-[30%]   ">
      <img src=${data.imageurl} class="object-cover h-full w-full align-left" alt="">
  </div>


  
</div>

`;
  newscontainer.insertAdjacentHTML("beforeend", html);
}
const request = fetch(
  `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`
).then(function (response) {
  return response.json().then(function (data) {
    for (i = 1; i <= 25; i++) {
      rendernews(data["Data"][i]);
    }
  });
});
