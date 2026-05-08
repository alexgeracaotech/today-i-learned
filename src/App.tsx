// function Button(props) {
//   return <button>{props.text}</button>;
// };

// export default function App() {
//   return (
//     <>
//       <Button text='Click' />
//       <Button text='Send' />
//       <Button text='Cancel' />
//     </>
//   );
// };

// import { useState } from 'react';

// export default function App() {
//   let counter = 0;

//   const [copyCounter, setCopyCounter] = useState(counter);

//   function count() {
//     setCopyCounter(copyCounter + 1);
//   };

//   return (
//     <>
//       <span>{copyCounter}</span>
//       <button onClick={count}>+1</button>
//     </>
//   );
// };

// export default function App() {
//   const aluno = {
//     id: 1,
//     nome: 'Alex Bessa',
//     curso: 'Desenvolvimento Web Full Stack',
//     estado: ''
//   };

//   return (
//     <>
//       {aluno.estado && (
//         `O aluno ${aluno.nome} está ${aluno.estado}.`
//       )}
//     </>
//   );
// };

// export default function App() {
//   const aluno = {
//     id: 1,
//     nome: 'Alex Bessa',
//     curso: 'Desenvolvimento Web Full Stack',
//     estado: false
//   };

//   return (
//     <>
//       {aluno.estado ? 'Aluno ativo.' : 'Aluno passivo.'}
//     </>
//   );
// };

function NewFact(props) {
  return (
    <>
      <p>{props.text}</p>
      <a href={props.source}>Fonte</a>
    </>
  );
};

import type { Fact } from "./types";

export default function App() {
  const facts: Fact[] = [
    {
      id: 1,
      text: 'Digital College é nomeada a melhor escola de tecnologia de Fortaleza.',
      source: 'https://opovo.com',
      category: 'Tecnologia',
      votes_interesting: 2,
      votes_mindblowing: 0,
      votes_false: 5,
      created_at: '2026-05-07 19:35:03 GMT-3'
    },
    {
      id: 2,
      text: 'Neymar agride criança negra e pobre de comunidade filho de detento mundialmente conhecido.',
      source: 'https://g1.com',
      category: 'Esportes',
      votes_interesting: 5,
      votes_mindblowing: 13,
      votes_false: 2,
      created_at: '2026-05-05 13:45:07 GMT-3'
    }
  ];

  return (
    <>
      {facts.map((fact) => {
        return <NewFact key={fact.id} text={fact.text} source={fact.source}/>
      })}
    </>
  );
};
