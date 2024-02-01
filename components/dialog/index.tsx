'use client';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import StyledDialogContent from './styled-dialog-content';
import { useEffect, useState } from 'react';

function UIDialog() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // To fix hydration issue
  if (!mounted) return null;

  return (
    <div className="absolute bottom-0 left-[50%] translate-x-[-50%] mb-10">
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
