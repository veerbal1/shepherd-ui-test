import './style.css'

export default function Home() {
  return (
    <div className="w-full h-full max-w-screen-2xl mx-auto relative">
      <div className="bg w-full h-full bg-[url('/images/bg.png')] bg-cover">
        &nbsp;
      </div>
      <div className="model-wrapper w-full h-full backdrop-blur-sm absolute top-0 left-0 z-10 flex justify-center items-center bg-gray-700/50">
        <div className="model flex w-3/4 max-w-">
          <div className="left w-64 h-64 bg-white rounded-tl-2xl rounded-bl-2xl hidden lg:block z-10"></div>
          <div className="right flex-1 h-[80vh] bg-white rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-2xl lg:rounded-tl-none"></div>
        </div>
      </div>
    </div>
  );
}
