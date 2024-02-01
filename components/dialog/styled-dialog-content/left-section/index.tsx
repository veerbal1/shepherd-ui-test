import DialogSidebarStrip from '@/components/common/dialog-sidebar-strip';
import { cn } from '@/lib/utils';

function DialogLeftSection({ progress }: { progress: number }) {
  return (
    <div className="left w-64 bg-white rounded-tl-2xl rounded-bl-2xl hidden md:flex p-5 items-center gap-3 self-start">
      <ProgressBar progress={progress} />
      <div className="w-full flex flex-col gap-2">
        <DialogSidebarStrip title="Get Started" checked={true} />
        <DialogSidebarStrip title="Select your platform" checked={true} />
        <DialogSidebarStrip title="Connect your product" current={true} />
        <DialogSidebarStrip title="Listen for events" />
        <DialogSidebarStrip title="Add Payment Method" />
        <DialogSidebarStrip title="Done" />
      </div>
    </div>
  );
}

const ProgressBar = ({ progress }: { progress: number }) => {
  const Circle = ({ checked }: { checked?: boolean }) => {
    return (
      <div
        className={cn(
          'circle w-2 h-2 rounded-full border z-10 bg-white',
          checked && 'bg-violet-700'
        )}
      ></div>
    );
  };

  let height = 0;
  if (progress === 1) {
    height = 0;
  } else if (progress === 2) {
    height = 20.3333;
  } else if (progress === 3) {
    height = 41;
  } else if (progress === 4) {
    height = 59.6667;
  } else if (progress === 5) {
    height = 79.3333;
  } else if (progress === 6) {
    height = 100;
  }

  return (
    <div className="w-4 self-stretch my-3 flex flex-col justify-between items-center relative">
      <Circle checked />
      <Circle checked />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <div className="dotted-line h-full border absolute z-0 border-dashed border-l-0">
        <div
          className={cn(
            'moving-line bg-violet-700 w-[2px] rounded-3xl ml-[-1px] absolute transition-all'
          )}
          style={{
            height: `${height}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default DialogLeftSection;
