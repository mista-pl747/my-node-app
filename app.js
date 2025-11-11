import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from my Node.js app!');
});

// istanbul ignore next
const startServer = () => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

// istanbul ignore if
if (process.argv[1] && process.argv[1].endsWith('app.js')) {
  startServer();
}

export default app;