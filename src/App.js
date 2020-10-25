import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        {people.length} Birthdays Today
        <List people={people} />
        <button onClick={() => { setPeople([]) }} className='btn'>clear all</button>
      </section>

    </main>
  )

}

export default App;
