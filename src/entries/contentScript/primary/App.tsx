import { Button } from '@/components/ui/button';
import useMessages from '@/hooks/useMessages';
import '@/index.css'
import { IceCream } from 'lucide-react';

function App() {

  const _message = useMessages();
  return (
    <div className='fx-fixed fx-bottom-8 fx-right-2' >
      <Button variant={'destructive'} onClick={() => {
        alert('Hello World')
      }}>
        <IceCream size={24} />
        <span className="fx-absolute fx-right-0 fx-top-0 fx-flex fx-h-3 fx-w-3">
          <span className="fx-animate-ping fx-absolute fx-inline-flex fx-h-full fx-w-full fx-rounded-full fx-bg-sky-400 fx-opacity-75"></span>
          <span className="fx-relative fx-inline-flex fx-rounded-full fx-h-3 fx-w-3 fx-bg-sky-500"></span>
        </span>
      </Button>
    </div>
  );
}

export default App;
