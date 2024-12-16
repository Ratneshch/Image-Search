const accesskey="rUMQvWwfArfAN3e9cQvbC5M7wDCQb_vSPlfnXUPFiUc"

const searchForm=document.querySelector("#search-form");
const searchInput=document.querySelector("#searchInput");
const searchResult=document.querySelector("#search-result");
const showMore=document.querySelector("#show-more");

let keyword="";
let page = 1 ;

async function searchImage(){
    keyword=searchInput.value;
    const url= `https://api.unsplash.com/search/photos?page=${page}1&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response= await fetch (url);
    const data= await response.json();
    
    if(page===1){
        searchResult.innerHTML="";
    }

    const results=data.results;

   

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank"
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMore.style.display="block";
}
searchForm.addEventListener("submit",(elem)=>{
    elem.preventDefault();
    page=1;
    searchImage();
 })
 showMore.addEventListener("click",()=>{
    page++;
    searchImage();
 })