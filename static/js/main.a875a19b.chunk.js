(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],Array(28).concat([function(e,t,a){e.exports=a.p+"static/media/witcher-3.6f71f916.svg"},function(e,t,a){e.exports=a.p+"static/media/gta-v.75226c7e.svg"},function(e,t,a){e.exports=a.p+"static/media/the-legend-of-zelda-breath-of-the-wild.efa1e465.svg"},function(e,t,a){e.exports=a.p+"static/media/resident-evil-4.7993fd3f.svg"},function(e,t,a){e.exports=a.p+"static/media/skyrim.03aeaf16.svg"},function(e,t,a){e.exports=a.p+"static/media/metal-gear-5.35bde5cb.svg"},,function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),l=(a(40),a(13)),m=a(2);a(41),a(42),a(43);function o(){return r.a.createElement("div",null,r.a.createElement("div",{className:"logo"},"Games-Store.yourcountry"),r.a.createElement("div",{className:"logo-mobile"},"Logo"))}var u=a(20),s=a(4);a(48);var d=Object(s.b)(null,(function(e){return{filterItems:function(t){e(function(e){return{type:"FILTER_ITEMS",title:e}}(t))}}}))((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),i=(a[0],a[1]);return r.a.createElement("div",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"search",id:"search-input",placeholder:"Search...",onChange:function(t){var a;i(t.target.value),a=t.target.value,e.filterItems(a)}})))}));a(49);function p(){return r.a.createElement("div",{className:"basket"},r.a.createElement("img",{src:"https://simpleicon.com/wp-content/uploads/basket-4.png",alt:"Basket Icon"}))}function f(){return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{to:"/"},r.a.createElement(o,null)),r.a.createElement(d,null),r.a.createElement(l.b,{to:"/cart"},r.a.createElement(p,null)))}a(51);var E=a(19),v=a.n(E),b=a(9);a(14),a(52);var h=Object(s.b)((function(e){return{items:e.items}}),(function(e){return{addToCart:function(t){e(function(e){return{type:"ADD_TO_CART",id:e}}(t))}}}))((function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-wrapper"},r.a.createElement("div",{className:"card-wrapper-image"},r.a.createElement("img",{src:e.image,height:"278",width:"190",alt:e.title})),r.a.createElement("div",{className:"card-wrapper-description"},r.a.createElement("span",null,"Title: ",e.title),r.a.createElement("br",null),r.a.createElement("span",null,"Platform: ",e.platform),r.a.createElement("br",null),r.a.createElement("span",null,"Price: ",e.price," dollars"))),r.a.createElement("div",{className:"card-buyButton"},r.a.createElement(b.AwesomeButton,{onPress:function(){var t,a;t=e.id,a=e.title,e.addToCart(t),v.a.fire({title:"Item added!",text:a+" was added to the cart",icon:"success",confirmButtonText:"Cool"})},type:"primary",size:"medium"},"Add to cart")))}));a(53);var g=Object(s.b)(null,(function(e){return{changePlatform:function(t){e(function(e){return{type:"CHANGE_PLATFORM",platform:e}}(t))}}}))((function(e){return r.a.createElement("div",{className:"platform"},r.a.createElement(b.AwesomeButton,{onPress:function(){var t;t=e.platform,e.changePlatform(t)},type:"secondary",size:"large"},e.platform))}));var y=Object(s.b)((function(e){return{items:e.items}}))((function(e){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content-genre"},r.a.createElement(g,{platform:"PS4"}),r.a.createElement(g,{platform:"XBOX"}),r.a.createElement(g,{platform:"SWITCH"}),r.a.createElement(g,{platform:"ALL"})),r.a.createElement("div",{className:"content-midText"},"Popular"),r.a.createElement("div",{className:"content-popular"},e.items.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,title:e.title,platform:e.platform,price:e.price,image:e.image})}))))}));a(54),a(55);var O=Object(s.b)(null,(function(e){return{removeItem:function(t){e(function(e){return{type:"REMOVE_ITEM",id:e}}(t))},addItem:function(t){e(function(e){return{type:"ADD_ITEM",id:e}}(t))},subtractItem:function(t){e(function(e){return{type:"SUBTRACT_ITEM",id:e}}(t))}}}))((function(e){function t(){e.update()}return r.a.createElement("div",{className:"item-outerWrapper"},r.a.createElement("hr",null),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"item-image"},r.a.createElement("img",{src:e.image,height:"278",width:"190",alt:e.title})),r.a.createElement("div",{className:"item-innerWrapper"},r.a.createElement("div",{className:"item-innerWrapper-upperText"},"Description"),r.a.createElement("div",{className:"item-innerWrapper-description"},r.a.createElement("span",null,"Title: ",e.title),r.a.createElement("br",null),r.a.createElement("span",null,"Platform: ",e.platform)),r.a.createElement("div",{className:"item-innerWrapper-counter"},r.a.createElement("label",null,"Amount"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){var a;a=e.id,e.subtractItem(a),t()}},"-"),r.a.createElement("input",{type:"number",min:"1",max:"999",placeholder:e.quantity,readOnly:"readOnly"}),r.a.createElement("button",{onClick:function(){var a;a=e.id,e.addItem(a),t()}},"+")),r.a.createElement("div",{className:"item-innerWrapper-removeButton"},r.a.createElement(b.AwesomeButton,{onPress:function(){var t,a;t=e.id,a=e.title,e.removeItem(t),v.a.fire({title:"Item removed!",text:a+" was removed from the cart",icon:"warning",confirmButtonText:"Ok"})},type:"secondary",size:"small"},"Remove")),r.a.createElement("div",{className:"item-innerWrapper-itemPrice"},"Price: ",e.price*e.quantity," dollars"))),r.a.createElement("hr",null))}));var T=Object(s.b)((function(e){return{items:e.addedItems,total:e.total}}))((function(e){var t=Object(n.useReducer)((function(e){return e+1}),0),a=Object(u.a)(t,2),i=(a[0],a[1]);return r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"cart-description"},"You have ordered:"),r.a.createElement("div",{className:"cart-items"},void 0!==e.items&&e.items.length>0?e.items.map((function(e){return r.a.createElement(O,{key:e.id,id:e.id,image:e.image,title:e.title,platform:e.platform,price:e.price,quantity:e.quantity,update:function(){i()}})})):r.a.createElement("span",null,"Nothing is here")),r.a.createElement("div",{className:"cart-total"},r.a.createElement("div",{className:"cart-total-amount"},"The total amount is: ",e.total," dollars"),r.a.createElement(b.AwesomeButton,{onPress:function(){alert("Placeholder")},type:"primary",size:"medium"},"Pay now")))}));var I=function(){return r.a.createElement(l.a,{basename:"/"},r.a.createElement("div",{className:"outer-wrapper"},r.a.createElement(f,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:y}),r.a.createElement(m.a,{path:"/cart",component:T}))))},N=a(18),j=a(34),w=a(3),P=a(28),A=a.n(P),C=a(29),S=a.n(C),x=a(30),B=a.n(x),L=a(31),M=a.n(L),_=a(32),R=a.n(_),k=a(33),W=a.n(k),q={items:[{id:1,title:"The Witcher 3: Wild Hunt",platform:"PS4",price:110,image:A.a},{id:2,title:"GTA V",platform:"PS4",price:80,image:S.a},{id:3,title:"The Legend of Zelda: Breath of the Wild",platform:"SWITCH",price:120,image:B.a},{id:4,title:"Resident Evil 4",platform:"XBOX",price:260,image:M.a},{id:5,title:"The Elder Scrolls V: Skyrim",platform:"PS4",price:160,image:R.a},{id:6,title:"Metal Gear Solid V: The Phantom Pain",platform:"PS4",price:90,image:W.a}],addedItems:[],total:0};var D=Object(N.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;if("ADD_TO_CART"===t.type){var a=e.items.find((function(e){return e.id===t.id})),n=e.addedItems.find((function(e){return t.id===e.id}));if(n)return a.quantity+=1,Object(w.a)(Object(w.a)({},e),{},{total:e.total+a.price});a.quantity=1;var r=e.total+a.price;return Object(w.a)(Object(w.a)({},e),{},{addedItems:[].concat(Object(j.a)(e.addedItems),[a]),total:r})}if("REMOVE_ITEM"===t.type){var i=e.addedItems.find((function(e){return t.id===e.id})),c=e.addedItems.filter((function(e){return t.id!==e.id})),l=e.total-i.price*i.quantity;return Object(w.a)(Object(w.a)({},e),{},{addedItems:c,total:l})}if("FILTER_ITEMS"===t.type){var m=t.title,o=e.items.filter((function(e){return e.title.toLowerCase().includes(m.toLowerCase())}));return""===m?Object(w.a)(Object(w.a)({},e),{},{items:q.items}):Object(w.a)(Object(w.a)({},e),{},{items:o})}if("CHANGE_PLATFORM"===t.type){var u=q.items.filter((function(e){return e.platform.toLowerCase().includes(t.platform.toLowerCase())}));return"ALL"===t.platform?Object(w.a)(Object(w.a)({},e),{},{items:q.items}):Object(w.a)(Object(w.a)({},e),{},{items:u})}if("ADD_ITEM"===t.type){var s=e.items.find((function(e){return e.id===t.id}));s.quantity+=1;var d=e.total+s.price;return Object(w.a)(Object(w.a)({},e),{},{total:d})}if("SUBTRACT_ITEM"===t.type){var p=e.items.find((function(e){return e.id===t.id}));if(1===p.quantity){var f=e.addedItems.filter((function(e){return e.id!==t.id})),E=e.total-p.price;return Object(w.a)(Object(w.a)({},e),{},{addedItems:f,total:E})}p.quantity-=1;var v=e.total-p.price;return Object(w.a)(Object(w.a)({},e),{},{total:v})}return e}));c.a.render(r.a.createElement(s.a,{store:D},r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null))),document.getElementById("root"))}]),[[35,1,2]]]);
//# sourceMappingURL=main.a875a19b.chunk.js.map