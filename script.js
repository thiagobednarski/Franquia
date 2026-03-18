// =====================
// FORM (corrigido para 2 formulários)
// =====================
["leadForm", "leadFormTop"].forEach(id => {
  const form = document.getElementById(id);

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const msg = document.getElementById("msg");
      if (msg) {
        msg.innerText = "Recebido! Vamos te chamar no WhatsApp 🚀";
      }
    });
  }
});


// =====================
// CONTADOR (blindado)
// =====================
const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {
  counters.forEach(counter => {

    const target = +counter.getAttribute("data-target") || 0;

    const update = () => {
      let count = +counter.innerText.replace(/\./g, "") || 0;
      let increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment).toLocaleString('pt-BR');
        setTimeout(update, 20);
      } else {
        counter.innerText = target.toLocaleString('pt-BR');
      }
    };

    update();
  });
}


// =====================
// SIMULADOR (seguro)
// =====================
const range = document.getElementById("range");
const value = document.getElementById("value");

if (range && value) {
  range.addEventListener("input", () => {
    value.innerText = range.value;
  });
}


// =====================
// ANIMAÇÃO (corrigido e com fallback)
// =====================
const cards = document.querySelectorAll('.benefits .card');

if ("IntersectionObserver" in window && cards.length > 0) {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // evita repetir animação
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    observer.observe(card);
  });

} else {
  // fallback: mostra tudo se der erro
  cards.forEach(card => {
    card.classList.add('show');
  });
}