import UIDialog from '@/components/dialog';
import './style.css';

export default function Home() {
  return (
    <div className="w-full h-full max-w-screen-2xl mx-auto relative">
      <div className="bg w-full h-full bg-[url('/images/bg.png')] bg-cover">
        &nbsp;
      </div>

      <UIDialog />

      {/* <div className="hidden model-wrapper w-full h-full backdrop-blur-sm absolute top-0 left-0 z-10 flex justify-center items-center bg-black/15">
        
      </div> */}
    </div>
  );
}
