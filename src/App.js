import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <React.Fragment>
      <main>
        <section className='container'>
          <h4>{people.length} birthday today</h4>
          <List people={people} />
        <button className='btn' onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
