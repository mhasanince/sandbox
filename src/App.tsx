import { useState } from 'react';

import { Button, range } from '@/lib';
import { Header } from '@/src/components/Header';

function App() {
  const [count, setCount] = useState(() => range(0, 10));

  return (
    <main>
      <Header />
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
