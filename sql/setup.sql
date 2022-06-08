-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists bands;

CREATE table bands (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  url VARCHAR NOT NULL,
  genre VARCHAR NOT NULL,
  subgenre VARCHAR NOT NULL,
  year INTEGER NOT NULL
);

INSERT INTO bands (name, url, genre, subgenre, year) VALUES

('Veil of Maya', 'https://en.wikipedia.org/wiki/File:Veil_of_Maya.jpg', 'Metal', 'Deathcore', 2004),
('The Chieftains', 'https://en.wikipedia.org/wiki/File:Chieftains-anoriant2008.png', 'Folk', 'Traditional Irish', 1962),
('Taraf de Haïdouks', 'https://en.wikipedia.org/wiki/File:Tarafdeha%C3%AFdouks.jpg', 'Folk', 'Romani', 1990),
('Weather Report', 'https://en.wikipedia.org/wiki/File:Weather_Report_19810611_shinjuku_fn23.jpg', 'Jazz', 'Fusion Funk', 1970),
('Rings of Saturn', 'https://en.wikipedia.org/wiki/File:Ringsofsaturnband.jpg', 'Metal', 'Technical Deathcore', 2009),
('Tatsuro Yamashita', 'https://en.wikipedia.org/wiki/File:Tatsuro_Yamashita_(4to3).png', 'Rock', 'Pop', 1976),
('Saint Pepsi', 'https://diy-magazine.s3.amazonaws.com/d/diy/Artists/S/Saint-Pepsi/_900x506_crop_center-center_41_line/saint-pepsi-print-credit-daniel-dorsa-1200x800.jpg.webp',
'Electronic', 'Future Funk', 2012),
('マクロス82-99', 'https://i.discogs.com/rElQQaeI4EFNJCqsoEX3b4IWXDmx_qOT6Iw_t8kr-WY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTMzOTk4/MDctMTUwMjkzNjE5/OC0zNzM0LmpwZWc.jpeg', 'Electronic', 'Future Funk', 2012);