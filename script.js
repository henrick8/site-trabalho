document.getElementById("questionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const sexo = form.sexo.value;
  const pele = form.pele.value;
  const idiomas = form.idiomas.value;
  const sangue = form.sangue.value;
  const trabalhando = form.trabalhando.value;

  const fichaHTML = `
    <h2>Ficha do Usuário</h2>
    <p><strong>Sexo:</strong> ${sexo}</p>
    <p><strong>Cor da pele:</strong> ${pele}</p>
    <p><strong>Idiomas falados:</strong> ${idiomas}</p>
    <p><strong>Tipo sanguíneo:</strong> ${sangue}</p>
    <p><strong>Está trabalhando:</strong> ${trabalhando}</p>
  `;

  const fichaDiv = document.getElementById("ficha");
  fichaDiv.innerHTML = fichaHTML;
  fichaDiv.style.display = "block";

  // Oculta o formulário
  form.style.display = "none";
});
