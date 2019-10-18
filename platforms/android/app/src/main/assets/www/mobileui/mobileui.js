/*component-base*/var userAgent=navigator.userAgent||navigator.vendor||window.opera,SO={name:"unknown",code:0};/android/i.test(userAgent)&&(SO.name="Android",SO.class="platform-android",SO.code=1);/iPad|iPhone|iPod/.test(userAgent)&&!window.MSStream&&(SO.name="iOS",SO.class="platform-ios",SO.code=2);/windows phone/i.test(userAgent)&&(SO.name="Windows Phone",SO.class="platform-wp",SO.code=3);SO.class&&document.getElementsByTagName("body").length&&(document.getElementsByTagName("body")[0].className+=" "+SO.class);
/*component-button*/document.addEventListener("click",function(e){if(1!==SO.code)return!1;var t=e.target;if("button"!==t.tagName.toLowerCase())return!1;var o=t.getBoundingClientRect(),s=t.querySelector(".ripple");s||((s=document.createElement("span")).className="ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",t.appendChild(s)),s.classList.remove("show");var a=e.pageY-o.top-s.offsetHeight/2-document.body.scrollTop,l=e.pageX-o.left-s.offsetWidth/2-document.body.scrollLeft;return s.style.top=a+"px",s.style.left=l+"px",s.classList.add("show"),!1},!1);
/*component-popover*/window.openPopover=function(e){var t=event.target.getBoundingClientRect(),o=e,e=document.getElementById(e),n=document.createElement("div");n.className="backdrop backdrop-popover",e.parentNode.appendChild(n),n.addEventListener("click",function(e){window.closePopover(o)}),e.addEventListener("click",function(e){window.closePopover(o)});var i=document.body.offsetWidth-t.left,r=document.body.offsetWidth-i;if(i-=t.width,e.style+=r>250?";top: 110%;right: "+i+"px;transform-origin: right top 0px;transform: scale(1);":";top: 110%;left: "+r+"px;transform-origin: right top 0px;transform: scale(1);",e.classList.add("show"),2===SO.code){e.style.top=t.top+t.height+"px";var s=document.createElement("div");s.classList.add("popover-arrow"),e.parentNode.appendChild(s),s.setAttribute("style","top:"+(t.top+t.height-5)+"px;left:"+(t.left+t.width/2-7)+"px")}else{var d=e.clientHeight,a=e.clientWidth;e.style.height=0,e.style.width=0,e.style.top=t.top+"px",setTimeout(function(){var t=e.getAttribute("style");t+=" ;-webkit-transition: all 200ms ease;transition: all 200ms ease;",e.setAttribute("style",t),e.style.height=d+"px",e.style.width=a+"px"})}var p=new CustomEvent("popoverOpened");document.dispatchEvent(p)},window.closePopover=function(e){var e=document.getElementById(e),t=0;2!==SO.code&&(e.style.opacity=0,t=200),setTimeout(function(){var t=document.getElementsByClassName("popover-arrow");t.length&&t[0].parentNode.removeChild(t[0]),e.classList.remove("show");var o=e.parentNode.getElementsByClassName("backdrop-popover");o&&o.length&&(o=o[0])&&o.parentNode&&o.parentNode.removeChild(o);var n=new CustomEvent("popoverClosed");document.dispatchEvent(n)},t)};
