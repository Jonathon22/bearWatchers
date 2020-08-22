const buildBearCard = (array) => {
  array.forEach((item) => {
 $("#bearCard").append( `<div class="card" style="width: 18rem;">
  <img src="${item.bearImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.bearName}</h5>
</div>`)
  });
  
}

export { buildBearCard }