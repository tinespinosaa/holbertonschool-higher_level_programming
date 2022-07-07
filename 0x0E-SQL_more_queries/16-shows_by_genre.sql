-- Script to show all genres linked to show on database
SELECT tv_shows.title AS title, tv_genres.name AS name
FROM tv_genres
LEFT JOIN tv_show_genres
ON tv_genres.id = tv_show_genres.genre_id
RIGHT JOIN tv_shows
ON tv_shows.id = tv_show_genres.show_id
ORDER BY tv_shows.title, tv_genres.name;
