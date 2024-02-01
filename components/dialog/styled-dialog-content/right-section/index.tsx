import { Button } from '@/components/ui/button';

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
    <div className="right flex-1 h-[90vh] max-h-[900px] bg-white rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-2xl md:rounded-tl-none shadow-2xl p-5">
      <Button onClick={incrementState}> Increment</Button>
      <Button onClick={decrementState}> Decrement</Button>
      {currentStage}
    </div>
  );
}

export default DialogRightSection;
