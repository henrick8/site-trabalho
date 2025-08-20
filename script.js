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
    <p>Seu sexo é <strong>${sexo}</strong>, seu tipo sanguineo é <strong>${sangue}</strong> e você <strong>${trabalhando}</strong> está trabalhando.</p>
    <p>Além disso você é uma pessoa <strong>${pele}</strong> que fala <strong>${idiomas}</strong> idiomas.</p>
  `;

  const fichaDiv = document.getElementById("ficha");
  fichaDiv.innerHTML = fichaHTML;
  fichaDiv.style.display = "block";

  // Oculta o formulário
  form.style.display = "none";
});
