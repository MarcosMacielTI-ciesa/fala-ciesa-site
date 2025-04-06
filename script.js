
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuButton = document.getElementById('menu-button');
    
    const searchContainer = document.getElementById('search-container');
    const searchBtn = document.getElementById('search-btn');
    
  
  
    // Expande a barra ao clicar na lupa
    searchBtn.addEventListener('click', function() {
      searchContainer.classList.toggle('active');
    });

    // Fecha a barra de busca se clicar fora
     document.addEventListener('click', function(event) {
      if (!searchContainer.contains(event.target) && searchContainer.classList.contains('active')) {
          searchContainer.classList.remove('active');
        }
    });


    menuButton.addEventListener('click', () => {
      sidebar.classList.add('open');
      overlay.classList.add('show');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    });