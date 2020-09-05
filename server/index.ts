import app from './server';

const PORT:number = 8080;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
