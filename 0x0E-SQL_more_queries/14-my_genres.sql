--  lists all genres of the show Dexter
SELECT tv_genres.name
FROM tv_genres RIGHT JOIN tv_shows
ON tv_shows.id = tv_genres.id
WHERE tv_shows.title = 'Dexter';
