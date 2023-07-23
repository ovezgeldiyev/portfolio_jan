// lazyload start
// =============================================
if (
    window.addEventListener &&
    window.requestAnimationFrame &&
    document.getElementsByClassName
  )
    window.addEventListener(
      "load",
      function () {
        let pItem = document.getElementsByClassName("lazy rep"),
          timer;
        window.addEventListener("scroll", scroller, false);
        window.addEventListener("resize", scroller, false);
        inView();
        function scroller(e) {
          timer =
            timer ||
            setTimeout(function () {
              timer = null;
              requestAnimationFrame(inView);
            }, 300);
        }
        function inView() {
          let wT = window.pageYOffset,
            wB = wT + window.innerHeight,
            cRect,
            pT,
            pB,
            p = 0;
          while (p < pItem.length) {
            cRect = pItem[p].getBoundingClientRect();
            pT = wT + cRect.top;
            pB = pT + cRect.height;
  
            if (wT < pB && wB > pT) {
              loadFullImage(pItem[p]);
              pItem[p].classList.remove("rep");
            } else p++;
          }
        }
        function loadFullImage(item) {
          if (!item || !item.href) return;
          let img = new Image();
          if (item.dataset) {
            img.srcset = item.dataset.srcset || "";
            img.sizes = item.dataset.sizes || "";
          }
          img.src = item.href;
          img.className = "rev";
          if (img.complete) addImg();
          else img.onload = addImg;
          function addImg() {
            item.addEventListener(
              "click",
              function (e) {
                e.preventDefault();
              },
              false
            );
            item.appendChild(img).addEventListener("animationend", function (e) {
              var pImg = item.querySelector && item.querySelector("img.prev");
              if (pImg) {
                e.target.alt = pImg.alt || "";
                item.removeChild(pImg);
                e.target.classList.remove("rev");
              }
            });
          }
        }
      },
      false
    );
  // lazyload end
  // =============================================
  