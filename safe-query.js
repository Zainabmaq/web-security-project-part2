// VULNERABLE code (never do this)
// const query = `SELECT * FROM users WHERE id = '${userId}'`;

// SAFE code - parameterised query
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'dvwa',
  password: 'password',
  database: 'dvwa'
});

// Safe parameterised query
function safeQuery(userId) {
  const query = 'SELECT * FROM users WHERE user_id = ?';
  db.execute(query, [userId], (err, results) => {
    if (err) throw err;
    console.log(results);
  });
}
