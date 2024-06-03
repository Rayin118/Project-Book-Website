const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'assets')));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'password', // Replace with your MySQL password
    database: 'book_club'
}); 

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'index.html'));
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(`Login attempt with email: ${email}`); // Debug log

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send(err);
        }

        if (results.length > 0) {
            // User exists, check password
            const user = results[0];
            if (user.password === password) {
                console.log('Login successful'); // Debug log
                res.json({ success: true, user_id: user.user_id, message: "Log in successfully." });
            } else {
                console.log('Incorrect password'); // Debug log
                res.status(401).json({ success: false, message: "Incorrect email or password." });
            }
        } else {
            // User doesn't exist, create new user
            console.log('Creating new user'); // Debug log
            db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (err, results) => {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).send(err);
                }
                res.json({ success: true, user_id: results.insertId, message: "Log in successfully." });
            });
        }
    });
});


// Logout route
app.post('/logout', (req, res) => {
    // If using sessions:
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send({ success: false, message: 'Failed to logout' });
        }
        res.send({ success: true, message: 'Logged out successfully' });
    });
});

// Fetch books
app.get('/books', (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Like a book
app.post('/like', (req, res) => {
    const { userId, bookId } = req.body;
    console.log("Received user_id:", userId, "book_id:", bookId); // Ensure these values are received correctly
    if (!userId || !bookId) {
        return res.status(400).json({ error: 'Both user_id and book_id are required' });
    }
    db.query('INSERT INTO likes (user_id, book_id) VALUES (?, ?)', [userId, bookId], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error', details: err });
        }
        res.json({ status: 'success' });
    });
});


// Fetch liked books 
app.get('/liked-books/:userId', (req, res) => {
    const { userId } = req.params;
    db.query('SELECT b.* FROM books b JOIN likes l ON b.id = l.book_id WHERE l.user_id = ?', [userId], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Unlike a book
app.post('/unlike', (req, res) => {
    const { userId, bookId } = req.body;
    db.query('DELETE FROM likes WHERE user_id = ? AND book_id = ?', [userId, bookId], (err, results) => {
        if (err) {
            // It's a good idea to send back a specific error message depending on what went wrong.
            console.error(err);
            res.status(500).json({ status: 'error', message: 'Database error occurred while trying to remove the like.' });
        } else {
            res.json({ status: 'success' });
        }
    });
});

// Fetch book details
app.get('/book/:id', (req, res) => {
    const bookId = req.params.id;
    db.query('SELECT title, author, description FROM books WHERE id = ?', [bookId], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            const bookDetails = results[0];
            bookDetails.image = `img/book-${bookId}.png`;
            res.json(bookDetails);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    });
});

// Route to get book details
app.get('/api/book/:id', (req, res) => {
    const bookId = req.params.id;
    db.query('SELECT title, author, description, image_url FROM books WHERE book_id = ?', [bookId], (err, results) => { // Use book_id
        if (err) throw err;
        if (results.length > 0) {
            const bookDetails = results[0];
            res.json(bookDetails);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
