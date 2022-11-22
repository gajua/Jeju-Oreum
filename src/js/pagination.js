 const pagination = document.querySelector(".pagination");
const pageNumber = pagination.querySelectorAll(".pageNumber");

pageNumber.forEach(e => {
  e.addEventListener('click',paging)
});
function paging(e) {
  e.preventDefault()
  for (let i = 0; i < pageNumber.length; i++) {
    pageNumber[i].classList.remove('active')
  }
  e.currentTarget.classList.add('active')


  let first = e.currentTarget.textContent
  let last = (e.currentTarget.textContent)*10
  console.log(first, last);
}
