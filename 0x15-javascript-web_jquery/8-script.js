// The script fetches and list the titles for all movies using the URL provided

$(() => {
    $.get('https://swapi-api.hbtn.io/api/films/?format=json', (data, textStatus) => {
      if (textStatus === 'success') {
        const films = data.results;
        films.forEach(film => {
          $('#list_movies').append('<li>' + film.title + '</li>');
        });
      }
    });
  });
