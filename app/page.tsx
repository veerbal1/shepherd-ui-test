import UIDialog from '@/components/dialog';
import './style.css';

export default function Home() {
  return (
    <div className="w-full h-full max-w-screen-2xl mx-auto relative">
      <div className="bg w-full h-full bg-[url('/images/bg.png')] bg-cover">
        &nbsp;
      </div>

      <UIDialog />
    </div>
  );
}
