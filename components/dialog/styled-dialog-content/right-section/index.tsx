import { Button } from '@/components/ui/button';
import GetStarted from './content/get-started';
import Platform from './content/platform';
import Product from './content/product';
import Events from './content/events';
import Payment from './content/payments';
import Done from './content/done';

function DialogRightSection({
  incrementState,
  decrementState,
  currentStage,
}: {
  incrementState: () => void;
  decrementState: () => void;
  currentStage: number;
}) {
  return (
    <div className="right w-full flex-1 bg-white rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-2xl md:rounded-tl-none shadow-2xl p-5">
      {currentStage === 1 && <GetStarted />}
      {currentStage === 2 && <Platform />}
      {currentStage === 3 && <Product />}
      {currentStage === 4 && <Events />}
      {currentStage === 5 && <Payment />}
      {currentStage === 6 && <Done />}
      <div className="absolute bottom-0 hidden">
        <Button onClick={incrementState}> Increment</Button>
        {currentStage}

        <Button onClick={decrementState}> Decrement</Button>
      </div>
    </div>
  );
}

export default DialogRightSection;
