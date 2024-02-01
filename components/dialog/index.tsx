import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import StyledDialogContent from './styled-dialog-content';

function UIDialog() {
  return (
    <div className="absolute bottom-0 right-0 m-16">
      <Dialog>
        <DialogTrigger>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="bg-transparent border-none max-w-5xl overflow-scroll max-h-[90vh] no-scrollbar">
          <StyledDialogContent />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UIDialog;
