document.addEventListener('DOMContentLoaded', () => {
    // Elementos do Tema
    const themeToggleButton = document.getElementById('theme-toggle');

    // --- Lógica do Modo Escuro ---

    // Função para aplicar o tema
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggleButton.textContent = '☀️'; // Ícone de sol
        } else {
            document.body.classList.remove('dark-mode');
            themeToggleButton.textContent = '🌙'; // Ícone de lua
        }
    }

    // Escutador de evento para o botão de alternar tema
    themeToggleButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const newTheme = isDarkMode ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme); // Salva a preferência
        applyTheme(newTheme);
    });

    // Verifica a preferência salva ou a preferência do sistema ao carregar a página
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);
});