import React , {useState} from 'react';
import value from "./data"
import Question from './Components/Question';

function App() {
  
  const [datas , setDatas] = useState(value);


  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
         {datas.map((data) =>
          <Question {...data} />
         )}
        </section>
      </div>
    </main>
  );
}

export default App;
