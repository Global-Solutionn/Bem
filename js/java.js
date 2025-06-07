
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    const questions = [
        {
            id: 1,
            question: "Qual item é essencial em um kit de emergência para desastres climáticos?",
            options: [
                "Remédios e cosméticos",
                "Água potável e alimentos não perecíveis",
                "Joias e dinheiro em grande quantidade",
                "Roupas de festa e calçados novos"
            ],
            correctAnswer: "Água potável e alimentos não perecíveis"
        },
        {
            id: 2,
            question: "Em caso de enchente, qual destas ações é crucial para sua segurança?",
            options: [
                "Tentar salvar objetos de valor da casa.",
                "Buscar abrigo em locais altos e seguros.",
                "Dirigir o carro por ruas alagadas.",
                "Entrar em contato com a água para verificar o nível."
            ],
            correctAnswer: "Buscar abrigo em locais altos e seguros."
        },
        {
            id: 3,
            question: "Ao perceber sinais de deslizamento de terra (rachaduras, estalos), qual a primeira atitude?",
            options: [
                "Avisar apenas a família mais próxima.",
                "Tentar escorar a área afetada.",
                "Sair imediatamente do local e buscar abrigo em área segura.",
                "Esperar a Defesa Civil chegar para avaliar."
            ],
            correctAnswer: "Sair imediatamente do local e buscar abrigo em área segura."
        },
        {
            id: 4,
            question: "Durante uma tempestade severa com raios e ventos fortes, o que você deve fazer?",
            options: [
                "Filmar a tempestade de perto para as redes sociais.",
                "Ficar perto de janelas para observar.",
                "Desligar aparelhos eletrônicos e evitar contato com objetos metálicos.",
                "Abrigar-se debaixo de árvores altas."
            ],
            correctAnswer: "Desligar aparelhos eletrônicos e evitar contato com objetos metálicos."
        },
        {
            id: 5,
            question: "Em períodos de seca e onda de calor, qual é a principal recomendação para a saúde?",
            options: [
                "Realizar atividades físicas intensas ao ar livre.",
                "Esperar sentir sede para beber água.",
                "Manter-se hidratado bebendo bastante líquido e evitar exposição prolongada ao sol.",
                "Usar roupas escuras para absorver menos calor."
            ],
            correctAnswer: "Manter-se hidratado bebendo bastante líquido e evitar exposição prolongada ao sol."
        },
        {
            id: 6,
            question: "Se houver um incêndio florestal próximo e você for alertado, qual a ação prioritária?",
            options: [
                "Tentar apagar o fogo com baldes de água.",
                "Aguardar instruções por telefone fixo.",
                "Evacuar imediatamente seguindo as rotas de fuga.",
                "Correr para a área de onde a fumaça está vindo para ver melhor."
            ],
            correctAnswer: "Evacuar imediatamente seguindo as rotas de fuga."
        },
        {
            id: 7,
            question: "Durante a passagem do 'olho' de um ciclone, o que se deve ter em mente?",
            options: [
                "Que a tempestade acabou e é seguro sair.",
                "Que o vento pode retornar com força, vindo da direção oposta.",
                "É o momento ideal para fazer reparos externos na casa.",
                "Aproveitar para estocar mais água e alimentos."
            ],
            correctAnswer: "Que o vento pode retornar com força, vindo da direção oposta."
        },
        {
            id: 8,
            question: "Em uma nevasca intensa, qual é a principal preocupação com a saúde?",
            options: [
                "Dificuldade em encontrar entretenimento.",
                "Risco de hipotermia e congelamento.",
                "Falta de internet.",
                "Acúmulo de lixo na rua."
            ],
            correctAnswer: "Risco de hipotermia e congelamento."
        },
        {
            id: 9,
            question: "Se você estiver na costa e sentir um terremoto forte ou vir o mar recuar anormalmente, o que você deve fazer?",
            options: [
                "Correr para a praia para ver o fenômeno de perto.",
                "Esperar por um alerta oficial antes de se mover.",
                "Procurar terras altas imediatamente.",
                "Ligar para um amigo para avisar."
            ],
            correctAnswer: "Procurar terras altas imediatamente."
        },
        {
            id: 10,
            question: "Qual é a importância de ter um ponto de encontro familiar definido em caso de evacuação?",
            options: [
                "É apenas um detalhe burocrático.",
                "Ajuda a centralizar a comunicação e garantir que todos se encontrem após o desastre.",
                "É necessário apenas para quem mora sozinho.",
                "Serve para guardar objetos de valor."
            ],
            correctAnswer: "Ajuda a centralizar a comunicação e garantir que todos se encontrem após o desastre."
        },
        {
            id: 11,
            question: "Por que é importante manter documentos importantes em local seguro e à prova d'água?",
            options: [
                "Para evitar que se molhem com a chuva diária.",
                "Para facilitar a identificação e a recuperação em caso de perda ou dano da residência.",
                "Apenas para evitar que curiosos os vejam.",
                "Não é importante, pois cópias digitais são sempre suficientes."
            ],
            correctAnswer: "Para facilitar a identificação e a recuperação em caso de perda ou dano da residência."
        },
        {
            id: 12,
            question: "Por que é crucial saber desligar a energia e o gás da sua casa em caso de emergência?",
            options: [
                "Para economizar energia durante a catástrofe.",
                "Para evitar choques elétricos, incêndios e vazamentos de gás que podem agravar a situação.",
                "Porque é uma exigência legal.",
                "Para não danificar os aparelhos eletrônicos."
            ],
            correctAnswer: "Para evitar choques elétricos, incêndios e vazamentos de gás que podem agravar a situação."
        },
        {
            id: 13,
            question: "Em uma situação de desastre, por que um rádio a pilhas é um item importante no kit de emergência?",
            options: [
                "Para ouvir música e relaxar.",
                "Porque celulares e internet podem ficar sem sinal, e o rádio pode ser a única forma de obter informações e alertas.",
                "Para se comunicar com outras pessoas à distância.",
                "Não é mais útil na era dos smartphones."
            ],
            correctAnswer: "Porque celulares e internet podem ficar sem sinal, e o rádio pode ser a única forma de obter informações e alertas."
        },
        {
            id: 14,
            question: "Após um desastre, qual a atitude mais indicada em relação aos seus vizinhos, se for seguro?",
            options: [
                "Priorizar apenas a sua própria família.",
                "Ajudar vizinhos que possam estar em necessidade, como idosos ou pessoas com deficiência.",
                "Ficar isolado para não correr riscos.",
                "Esperar a chegada de equipes de resgate profissionais para qualquer tipo de ajuda."
            ],
            correctAnswer: "Ajudar vizinhos que possam estar em necessidade, como idosos ou pessoas com deficiência."
        }
    ];

    let currentQuestionIndex = 0;
    const questionItems = document.querySelectorAll('.question-item');
    const nextQuestionBtn = document.getElementById('next-question-btn');

    function displayQuestion(index) {
        questionItems.forEach(item => item.style.display = 'none');
        if (questionItems[index]) {
            questionItems[index].style.display = 'block';
        }

        const progress = ((index + 1) / questions.length) * 100;
        document.querySelector('.question-bar').style.width = `${progress}%`;

        if (index === questions.length - 1) {
            nextQuestionBtn.style.display = 'none';
        } else {
            nextQuestionBtn.style.display = 'none'; 
        }
    }

    displayQuestion(currentQuestionIndex);

    document.querySelectorAll('.quiz-form').forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const questionId = parseInt(form.dataset.questionId);
            const selectedOption = form.querySelector(`input[name="quizOption${questionId}"]:checked`);
            const resultParagraph = document.getElementById(`quiz-result-${questionId}`);

            if (selectedOption) {
                const userAnswer = selectedOption.value;
                const correct = questions.find(q => q.id === questionId).correctAnswer;

                if (userAnswer === correct) {
                    resultParagraph.textContent = "Resposta Correta! 😊";
                    resultParagraph.style.color = "green";
                    nextQuestionBtn.style.display = 'block'; 
                } else {
                    resultParagraph.textContent = `Resposta Incorreta. A resposta correta é: "${correct}" 😔`;
                    resultParagraph.style.color = "red";
                    nextQuestionBtn.style.display = 'none'; 
                }
            } else {
                resultParagraph.textContent = "Por favor, selecione uma opção.";
                resultParagraph.style.color = "orange";
            }
        });
    });

    nextQuestionBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(currentQuestionIndex);
            document.querySelectorAll('.quiz-result').forEach(p => p.textContent = '');
            nextQuestionBtn.style.display = 'none';
        } else {
            alert('Fim do quiz! Você respondeu todas as perguntas.');
            
            currentQuestionIndex = 0;
            displayQuestion(currentQuestionIndex);
            document.querySelectorAll('.quiz-result').forEach(p => p.textContent = '');
            nextQuestionBtn.style.display = 'none';
        }
    });
});