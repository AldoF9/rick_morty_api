function getPersonajes(done) {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => {
        const cincoPersonajes = data.results.slice(0, 5);
        done(cincoPersonajes);
      });
  }
  
  getPersonajes(data => {
    data.forEach(residente => {
      const article = document.createRange().createContextualFragment(/*html*/`
        <article class="${residente.id < 50 ? 'verde' : ''}">
          <div class="image-container">
            <img src="${residente.image}" alt="foto">
          </div>
          <h2>${residente.name}</h2>
          <h3>${residente.status}</h3>
          <h3>${residente.species}</h3>
          <h3>${residente.origin.name}</h3>
          <ul>
            ${getEpisodios(residente.episode)}
          </ul>
        </article>
      `);
  
      const main = document.querySelector("main");
      main.append(article);
    });
  });
  
  function getEpisodios(episodios) {
    let episodiosHTML = '';
    for (let i = 0; i < 3 && i < episodios.length; i++) {
      episodiosHTML += `<li>${episodios[i]}</li>`;
    }
    return episodiosHTML;
  }