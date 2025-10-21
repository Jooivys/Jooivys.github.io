document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    const obstacle = document.getElementById('obstacle');
    const jumpButton = document.getElementById('jumpButton');
    const startButton = document.getElementById('startButton');
    const scoreDisplay = document.getElementById('score');
    const gameContainer = document.querySelector('.game-container');

    let isJumping = false;
    let isGameOver = true;
    let score = 0;
    let obstacleAnimationDuration = 2000; // Duração inicial em ms
    let obstacleTimeoutId; // Para gerenciar o aparecimento de obstáculos e a pontuação
    let collisionDetectionIntervalId; // Para verificar colisões

    // Função para lidar com o pulo do personagem
    function jump() {
        if (!isJumping && !isGameOver) {
            isJumping = true;
            character.classList.add('jump');
            setTimeout(() => {
                character.classList.remove('jump');
                isJumping = false;
            }, 600); // Corresponde à duração da animação de pulo no CSS
        }
    }

    // Função para criar e animar obstáculos
    function createObstacle() {
        if (isGameOver) return;

        // Reseta a posição e a animação do obstáculo
        obstacle.style.animation = 'none'; // Limpa a animação anterior
        obstacle.style.right = '-20px'; // Começa fora da tela
        void obstacle.offsetWidth; // Força a re-renderização para aplicar 'none' antes de definir a nova animação

        obstacle.style.animation = `moveObstacle ${obstacleAnimationDuration / 1000}s linear forwards`;

        // Agenda a atualização da pontuação e a criação do próximo obstáculo após o atual passar
        obstacleTimeoutId = setTimeout(() => {
            if (!isGameOver) { // Só atualiza a pontuação se o jogo ainda estiver ativo
                score++;
                scoreDisplay.textContent = `Pontuação: ${score}`;
                // Aumenta a dificuldade tornando os obstáculos mais rápidos, mas não muito
                obstacleAnimationDuration = Math.max(1000, obstacleAnimationDuration - 50);
            }
            createObstacle(); // Agenda o próximo obstáculo
        }, obstacleAnimationDuration);
    }

    // Função para verificar colisões
    function checkCollision() {
        if (isGameOver) return;

        const characterRect = character.getBoundingClientRect();
        const obstacleRect = obstacle.getBoundingClientRect();
        const gameContainerRect = gameContainer.getBoundingClientRect();

        // Calcula as posições relativas ao canto inferior esquerdo do contêiner do jogo
        // charBottom: distância da parte inferior do personagem até a parte inferior do contêiner do jogo
        const charBottom = gameContainerRect.height - (characterRect.bottom - gameContainerRect.top);
        // charLeft: distância da esquerda do personagem até a esquerda do contêiner do jogo
        const charLeft = characterRect.left - gameContainerRect.left;
        // obstacleLeft: distância da esquerda do obstáculo até a esquerda do contêiner do jogo
        const obstacleLeft = obstacleRect.left - gameContainerRect.left;

        // Lógica de detecção de colisão
        // Verifica se o alcance horizontal do personagem se sobrepõe ao do obstáculo
        // E se o alcance vertical do personagem se sobrepõe ao do obstáculo (ao nível do chão)
        if (
            charLeft < obstacleLeft + obstacleRect.width && // A borda direita do personagem passa a borda esquerda do obstáculo
            charLeft + characterRect.width > obstacleLeft && // A borda esquerda do personagem está antes da borda direita do obstáculo
            charBottom < obstacleRect.height // O personagem está no nível do chão (ou um pouco acima) do obstáculo
        ) {
            endGame();
        }
    }

    // Função para iniciar o jogo
    function startGame() {
        isGameOver = false;
        score = 0;
        scoreDisplay.textContent = `Pontuação: ${score}`;
        obstacleAnimationDuration = 2000; // Reseta a dificuldade

        startButton.disabled = true;
        jumpButton.disabled = false;

        // Limpa quaisquer timeouts/intervals de jogos anteriores
        clearTimeout(obstacleTimeoutId);
        clearInterval(collisionDetectionIntervalId);

        createObstacle(); // Inicia o primeiro obstáculo
        collisionDetectionIntervalId = setInterval(checkCollision, 10); // Inicia a verificação de colisões
    }

    // Função para terminar o jogo
    function endGame() {
        isGameOver = true;
        clearInterval(collisionDetectionIntervalId);
        clearTimeout(obstacleTimeoutId);
        obstacle.style.animation = 'none'; // Para a animação do obstáculo
        startButton.disabled = false;
        jumpButton.disabled = true;
        alert(`Fim de Jogo! Sua pontuação: ${score}`);
    }

    // Escutadores de Eventos
    jumpButton.addEventListener('click', jump);
    startButton.addEventListener('click', startGame);
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space' && !isGameOver) { // Se a tecla for Espaço e o jogo não tiver acabado
            event.preventDefault(); // Impede a rolagem da página
            jump();
        }
    });

    // Configuração do estado inicial
    jumpButton.disabled = true;
});
