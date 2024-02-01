import { cn } from '@/lib/utils';
import { CheckCircledIcon, CircleIcon } from '@radix-ui/react-icons';

function DialogSidebarStrip({
  checked,
  title,
  current,
  onClick,
}: {
  checked?: boolean;
  title?: string;
  current?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={cn(
        'w-full px-2 py-1.5 border rounded-full  flex gap-2 items-center cursor-pointer select-none transition-all outline-2',
        checked ? 'border-violet-500/40 text-violet-500 bg-violet-100' : '',
        current ? 'border-violet-700 border text-black/80 bg-white outline-none' : ''
      )}
      onClick={onClick}
    >
      {!checked && <CircleIcon />}
      {checked && <CheckCircledIcon />}
      <p
        className={cn(
          'text-xs text-black/50 transition-all',
          checked && 'text-violet-600',
          current && 'text-black'
        )}
      >
        {title}
      </p>
    </div>
  );
}

export default DialogSidebarStrip;
