var e=globalThis,o={},i={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in i){var r=i[e];delete i[e];var s={id:e,exports:{}};return o[e]=s,r.call(s.exports,s,s.exports),s.exports}var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,o){i[e]=o},e.parcelRequired7c6=r),r.register;var s=r("3gP5N");r("5Q9Pd"),r("3WmGK"),r("8sdLw"),r("8h5e4");const t=document.querySelector(".shopping-list"),a=document.querySelector(".shopping-list-block"),n=async function(e){return console.log(e),t.innerHTML=e.map(({author:e,book_image:o,title:i,description:r,_id:s,buy_links:t,list_name:a})=>`
  <li class="books__item" id=${s}>
    <div class="books__wrapper">
      <img class="books__image" src="${o}"  alt="${r}" loading="lazy"  />
    </div>
    <div class="books__info">
      <p class="books__info-title">${i}</p>
      <p class="books__info-author">${e}</p>
      <p>${r}</p>
      <p>${t[0].name}</p>
      <p>${t[1].name}</p>
      <p>${t[4].name}</p>
      <p>${a}</p>
      

    </div>
  </li>
  `).join("")};(async()=>{a.hidden=!0;let e=JSON.parse(localStorage.getItem("shoppingListArray"));if(!e){a.hidden=!1,console.log("Shopping list EMPTY!!!");return}let o=e.map(async e=>(await (0,s.getBookByID)(e)).data);n(await Promise.all(o))})();
//# sourceMappingURL=shopping-list.d6650d33.js.map