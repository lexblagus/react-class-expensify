const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const pubPath = path.join(__dirname, '..', 'public');
app.use(express.static(pubPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(pubPath, 'index.html'));
});

app.listen(port, ()=>{
	console.log('Server up at ' + port);
});