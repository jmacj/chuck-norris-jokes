const express = require('express');
const cors = require('cors');
const categoriesRouter = require('./routes/categories');
const jokesRouter = require('./routes/jokes');

const app = express();

app.use(cors({
    origin: ['http://localhost:8000'] // Add your allowed origins here
}));


app.use('/api/categories', categoriesRouter);
app.use('/api/jokes', jokesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
