// espera a execução completa do site
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('.icon');

    // verificando qual o padrão de tema que o usuário utiliza 
    // no sistema operacional
    const savedTheme = localStorage.getItem('theme') 
        || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    debugger;

    if (savedTheme === 'dark')
    {
        
        body.classList.replace('light-theme', 'dark-theme');
        icon.textContent = '🌞';
    }
    else 
    {
        body.classList.replace('dark-theme', 'light-theme');
        icon.textContent = '🌑';
    }

    themeToggle.addEventListener('click', () => {
        if(body.classList.contains('light-theme'))
        {
            body.classList.replace('light-theme', 'dark-theme');
            icon.textContent = '🌞';
            localStorage.setItem('theme', 'dark');
        }
        else
        {
            body.classList.replace('dark-theme', 'light-theme');
            icon.textContent = '🌑';
            //salva a ultima opção de tema no histórico local
            // do navegador
            localStorage.setItem('theme', 'light');
        }
    });
});