const template = document.getElementById('card-template');
  const clone = template.content.cloneNode(true);
  clone.querySelector('.title').textContent = "Título dinámico";
  document.getElementById('clone-block').appendChild(clone);