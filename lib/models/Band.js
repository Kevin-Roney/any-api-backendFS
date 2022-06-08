const pool = require ('../utils/pool');

module.exports = class Band {
  id;
  name;
  url;
  genre;
  subgenre;
  year;
  
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.url = row.url;
    this.genre = row.genre;
    this.subgenre = row.subgenre;
    this.year = row.year;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM bands;');
    return rows.rows.map(row => new Band(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM bands WHERE id = $1;', [id]);
    if (!rows[0]) {
      return null;
    }
    return new Band(rows[0]);
  }
};
