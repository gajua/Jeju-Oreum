const pagination = document.querySelector(".pagination");
const pageNumber = pagination.querySelectorAll(".pageNumber");

export function initPage(oreumList) {
  pageNumber.forEach((e) => {
    e.addEventListener("click", async(e) => {
      await paging(oreumList, e)
    });
  });
}

async function paging(oreumList, e) {
  e.preventDefault();

  for (let i = 0; i < pageNumber.length; i++) {
    pageNumber[i].classList.remove("active");
  }
  e.currentTarget.classList.add("active");

  let pageNum = e.currentTarget.textContent;
  console.log(pageNum);

  oreumList.oreumList.innerHTML = ``

  await oreumList.setup(pageNum)
}
// console.dir(oreumList.oreumList.children);