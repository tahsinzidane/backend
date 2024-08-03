import express from 'express';

const app = express();

const port = 3000;

app.use(express.static('dist'));

const jokeArr = [
  {
    id: 1,
    title: 'Why do backend developers prefer dark mode?',
    content: 'Because he used too many cache!'
  },
  {
    id: 2,
    title: 'Why did the backend developer go broke?',
    content: 'Because he used too many cache!'
  },
  {
    id: 3,
    title: 'How many backend developers does it take to change a light bulb?',
    content: 'None. Its a hardware problem!'
  },
  {
    id: 4,
    title: 'Why don’t backend developers need to be worried about procrastination?',
    content: 'Because their code always gets scheduled!'
  },
  {
    id: 5,
    title: 'What do you call a backend developer whos great at sports?',
    content: 'A data athlete!'
  },
  {
    id: 6,
    title: 'Why did the backend developer get stuck in the shower?',
    content: 'Because he couldn’t find the exit!'
  },
  {
    id: 7,
    title: 'Why was the database administrator always calm?',
    content: 'Because he had plenty of tables to keep him organized!'
  }
];

// app.get('/', (req, res) => {
//   res.send('welcome buddy')
// })

app.get('/api/jokes', (req, res) => {
  res.send(jokeArr);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
