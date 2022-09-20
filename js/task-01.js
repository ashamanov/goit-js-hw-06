const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);

list.forEach((item) => {
  let h2 = item.querySelector("h2").textContent;
  let quantity = item.querySelectorAll("li").length;
  console.log(`Category: ${h2} \nElements: ${quantity}`);
});
