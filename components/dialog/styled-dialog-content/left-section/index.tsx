import DialogSidebarStrip from '@/components/common/dialog-sidebar-strip';
import { cn } from '@/lib/utils';
import styles from './style.module.css';

function DialogLeftSection({
  progress,
  setStates,
}: {
  progress: number;
  setStates: (state: number) => void;
}) {
  const data = [
    {
      title: 'Get Started',
      checked: progress >= 1,
      current: progress === 1,
      onClick: () => {
        setStates(1);
      },
    },
    {
      title: 'Select your platform',
      checked: progress >= 2,
      current: progress === 2,
      onClick: () => {
        setStates(2);
      },
    },
    {
      title: 'Connect your product',
      checked: progress >= 3,
      current: progress === 3,
      onClick: () => {
        setStates(3);
      },
    },
    {
      title: 'Listen for events',
      checked: progress >= 4,
      current: progress === 4,
      onClick: () => {
        setStates(4);
      },
    },
    {
      title: 'Add Payment Method',
      checked: progress >= 5,
      current: progress === 5,
      onClick: () => {
        setStates(5);
      },
    },
    {
      title: 'Done',
      checked: progress >= 6,
      current: progress === 6,
      onClick: () => {
        setStates(6);
      },
    },
  ];

  return (
    <div
      className={cn(
        'left w-64 bg-white rounded-tl-2xl rounded-bl-2xl hidden md:flex p-5 items-center gap-3 self-start',
        styles.box
      )}
    >
      <ProgressBar progress={progress} />
      <div className="w-full flex flex-col gap-2">
        {data.map((item) => (
          <DialogSidebarStrip
            title={item.title}
            checked={item.checked}
            current={item.current}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
}

const ProgressBar = ({ progress }: { progress: number }) => {
  const Circle = ({ checked }: { checked?: boolean }) => {
    return (
      <div
        className={cn(
          'circle w-2 h-2 rounded-full border z-10 bg-white transition-colors',
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
      <Circle checked={progress >= 1} />
      <Circle checked={progress >= 2} />
      <Circle checked={progress >= 3} />
      <Circle checked={progress >= 4} />
      <Circle checked={progress >= 5} />
      <Circle checked={progress >= 6} />
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
