document.addEventListener('DOMContentLoaded', () => {
  // Menu Mobile
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Checklist Functionality
  const checklistItems = document.getElementById('checklist-items');
  const checkboxes = checklistItems.querySelectorAll('input[type="checkbox"]');
  const savedChecklist = localStorage.getItem('checklistState');
  if (savedChecklist) {
    const state = JSON.parse(savedChecklist);
    checkboxes.forEach((checkbox, index) => {
      checkbox.checked = state[index] || false;
      if (checkbox.checked) checkbox.nextElementSibling.style.color = '#34d399';
    });
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const state = Array.from(checkboxes).map(cb => cb.checked);
      localStorage.setItem('checklistState', JSON.stringify(state));
      if (checkbox.checked) {
        checkbox.nextElementSibling.style.color = '#34d399';
        checkbox.nextElementSibling.style.fontWeight = '600';
      } else {
        checkbox.nextElementSibling.style.color = '';
        checkbox.nextElementSibling.style.fontWeight = '';
      }
    });
  });

  window.resetChecklist = () => {
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
      checkbox.nextElementSibling.style.color = '';
      checkbox.nextElementSibling.style.fontWeight = '';
    });
    localStorage.removeItem('checklistState');
  };

  // Quiz Functionality
  const quizForm = document.getElementById('quiz-form');
  const quizResult = document.getElementById('quiz-result');
  quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;
    const answers = {
      q1: 'c',
      q2: 'a',
      q3: 'a'
    };
    for (let q in answers) {
      const selected = document.querySelector(`input[name="${q}"]:checked`);
      if (selected && selected.value === answers[q]) score++;
    }
    quizResult.textContent = `Pontuação: ${score} de 3`;
    quizResult.style.display = score === 3 ? 'block' : 'block';
  });
});