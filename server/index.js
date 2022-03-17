const express = require('express');
const app = express();

app.get('/posts', function(req, res) {
	res.type('text').send('Hello World');
});

app.use(express.static('public'));
const PORT = process.env.PORT || 3001;
app.listen(PORT);