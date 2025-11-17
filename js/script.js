// Lógica das Abas (Tabs)
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;

        // Remove a classe 'active' de todos os botões
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Adiciona 'active' apenas ao botão clicado
        button.classList.add('active');
        
        // Esconde todos os conteúdos
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });

        // Mostra o conteúdo correspondente
        const activeContent = document.getElementById(`content-${tabId}`);
        if (activeContent) {
            activeContent.classList.remove('hidden');
        }
    });
});