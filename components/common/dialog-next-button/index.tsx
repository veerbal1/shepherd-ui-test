import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';

function NextButton({ onClick }: { onClick?: () => void }) {
  return (
    <Button
      onClick={onClick}
      className="w-full bg-violet-600 hover:bg-violet-700 flex items-center justify-between relative"
    >
      <div className="flex-1">Continue</div>
      <ArrowRightIcon />
    </Button>
  );
}

export default NextButton;
