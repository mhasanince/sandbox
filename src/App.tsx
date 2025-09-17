import { useState } from 'react';

import { Button, Card, range } from '@/lib';
import Header from '@/src/components/Header';

function App() {
  const [count, setCount] = useState(() => range(0, 10));

  return (
    <main>
      <Header />
      <Card
        title='Lorem ipsum dolor sit amet.'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga, repellat saepe numquam eligendi eius impedit? Placeat alias corrupti consequuntur ab impedit? Excepturi ipsa placeat totam alias accusamus illo expedita?'
      />
      <Button
        className='bg-blue-500 text-white'
        onClick={() => setCount((prev) => [...prev, prev.length])}
      >
        Click me
      </Button>
      <div className='flex gap-2'>
        {count.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </main>
  );
}

export default App;
