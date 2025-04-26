const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/branches.db');
const { paginate } = require('../utils/paginator');

exports.getBranches = (req, res) => {
  const { searchBy, searchValue, sortBy, sortOrder = 'asc', page = 1, limit = 10 } = req.query;
  
  let query = 'SELECT * FROM branches';
  const params = [];

  // Filtering
  if (searchBy && searchValue) {
    query += ` WHERE ${searchBy} LIKE ?`;
    params.push(`%${searchValue}%`);
  }

  // Sorting
  if (sortBy) {
    query += ` ORDER BY ${sortBy} ${sortOrder.toUpperCase()}`;
  }

  // Pagination
  const { offset, adjustedLimit } = paginate(page, limit);
  query += ` LIMIT ? OFFSET ?`;
  params.push(adjustedLimit, offset);

  db.all(query, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};