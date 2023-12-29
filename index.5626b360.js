var t=globalThis,e={},o={},a=t.parcelRequired7c6;async function s(t){return'<li class="category-item js-current-category" data-category="All Categories">All Categories</li>'+t.data.map(({list_name:t})=>`<li class="category-item" data-category="${t}">${t}</li>`).join("")}async function n(t){return await Promise.all(t.map(async({list_name:t,books:e})=>`
    <div class="book-category-container">
    <h3 class="js-book-category">${t}</h3>
    <ul class='books-list'>${await r(e)}</ul>
    <button class="button see-more" data-js="${t}" aria-label="See more">See more</button>
    </div>
    `))}function i(){let t=window.screen.width;return t<768?"mobile":t<1280?"tablet":t<1440?"desktop":"desktopXl"}null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in o){var a=o[t];delete o[t];var s={id:t,exports:{}};return e[t]=s,a.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){o[t]=e},t.parcelRequired7c6=a),a.register,a("3gP5N");const r=async function(t){return"mobile"===i()?c(t.slice(0,1)):"tablet"===i()?c(t.slice(0,3)):"desktop"===i()?c(t.slice(0,4)):c(t)};async function l(t,e){let o=t.split(" "),a=Math.ceil(o.length/2),s=o.slice(0,a).join(" "),n=o.slice(a).join(" ");return`
  <h2 class="books-title">${s} <span class="books-colortitle">${n}</span></h2>
  <ul class="books-list">${await c(e)}</ul>
  <button class="button all-categories__btn" data-js="All Categories" aria-label="All categories">All Categories</button>
`}async function c(t){return t.map(({author:t,book_image:e,title:o,description:a,_id:s})=>`
    <li class="books__item" id=${s}>
      <div class="books__wrapper">
        <img class="books__image" src="${e}"  alt="${a}" loading="lazy"  />
        <div class="books__overlay">
          <p class="books__overlay-text">QUICK VIEW</p>
        </div>
      </div>
      <div class="books__info">
        <p class="books__info-title">${o}</p>
        <p class="books__info-author">${t}</p>
      </div>
    </li>
    `).join("")}async function d(t){let e=document.querySelector(".js-current-category");e&&e.classList.remove("js-current-category");let o=document.querySelector(`li[data-category="${t}"]`);o?o.classList.add("js-current-category"):console.error(`Element with category "${t}" not found.`)}var u=(a("3gP5N"),a("3gP5N"));const g=document.getElementById("bookImage"),y=document.getElementById("bookTitle"),p=document.getElementById("bookAuthor"),m=document.getElementById("bookDescription"),b=document.querySelector(".link-amazon"),k=document.querySelector(".link-apple");async function f(t){let{data:e}=await (0,u.getBookByID)(t);g.attributes.src.value=e.book_image,y.textContent=e.title,p.textContent=e.author,m.textContent=e.description,b.attributes.href.value=e.buy_links[0].url,k.attributes.href.value=e.buy_links[1].url;let o=document.getElementById("toggleShoppingList"),a=JSON.parse(localStorage.getItem("shoppingListArray")),s=!1;a&&(s=-1!==a.indexOf(t)),o.textContent=s?"Remove from the shopping list":"Add to the shopping list",o.onclick=()=>{a?((s=-1!==a.indexOf(t))?(a.splice(a.indexOf(t),1),localStorage.setItem("shoppingListArray",JSON.stringify(a)),o.textContent="Add to the shopping list"):(a.push(t),localStorage.setItem("shoppingListArray",JSON.stringify(a)),o.textContent="Remove from the shopping list"),0===a.length&&localStorage.removeItem("shoppingListArray")):(o.textContent="Remove from the shopping list",(a=[]).push(t),localStorage.setItem("shoppingListArray",JSON.stringify(a)))}}function h(){document.getElementById("myModal").style.display="none"}function v(){window.scrollTo({top:0,left:0,behavior:"smooth"})}document.querySelector(".link-book-shop"),document.addEventListener("DOMContentLoaded",()=>{let t=document.getElementById("myModal");document.querySelector(".close").onclick=()=>h(),window.onclick=e=>{e.target===t&&h()}});const _=document.querySelector(".books-container"),L=document.querySelector(".category-list");!async function(){try{let t=await (0,u.getCategoryList)();L.insertAdjacentHTML("beforeend",await s(t))}catch(t){}try{let t=await (0,u.getTopBooks)();_.insertAdjacentHTML("afterbegin",'<h2 class="books-title">Best Sellers<span class="books-colortitle"> Books</span></h2>'),_.insertAdjacentHTML("beforeend",(await n(t.data)).join(""))}catch(t){}}();const w=async function(t){if(t.preventDefault(),t.target.classList.contains("category-item")){if(_.innerHTML="","All Categories"===t.target.dataset.category){try{let e=await (0,u.getTopBooks)();_.insertAdjacentHTML("afterbegin",'<h2 class="books-title">Best Sellers<span class="books-colortitle"> Books</span></h2>'),_.insertAdjacentHTML("beforeend",(await n(e.data)).join("")),d(t.target.dataset.category)}catch(t){}return}try{let{data:e}=await (0,u.getOneCategory)(t.target.dataset.category);_.insertAdjacentHTML("beforeend",await l(t.target.dataset.category,e)),d(t.target.dataset.category)}catch(t){}}},S=async function(t){t.preventDefault();let e=t.target.closest(".books__item");e&&(f(e.attributes.id.value),document.getElementById("myModal").style.display="flex");let o=t.target.classList.contains("see-more"),a=t.target.classList.contains("all-categories__btn"),s=t.target.dataset.js;if(o){v(),_.innerHTML="";try{let{data:t}=await (0,u.getOneCategory)(s);_.insertAdjacentHTML("beforeend",await l(s,t)),d(s)}catch(t){}}else if(a){v(),_.innerHTML="";try{_.insertAdjacentHTML("afterbegin",'<h2 class="books-title">Best Sellers<span class="books-colortitle"> Books</span></h2>');let t=await (0,u.getTopBooks)();_.insertAdjacentHTML("beforeend",(await n(t.data)).join("")),d(s)}catch(t){}}};L.addEventListener("click",w),_.addEventListener("click",S),a("5Q9Pd"),a("3WmGK"),a("8sdLw"),a("8h5e4");const j=document.querySelector(".form-wrapper"),A=document.querySelector(".sign-up"),B=document.querySelector(".au-modal-close");document.querySelector("#name"),document.querySelector('input[type="email"]'),document.querySelector('input[type="password"]'),j.style.display="none",A.onclick=()=>void(j.style.display="block"),B.onclick=()=>void(j.style.display="none");
//# sourceMappingURL=index.5626b360.js.map
