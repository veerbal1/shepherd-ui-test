function StyledDialogContent() {
  return (
    <div className="model flex w-full">
      <div className="left w-64 h-64 bg-white rounded-tl-2xl rounded-bl-2xl hidden md:block"></div>
      <div className="right flex-1 h-[90vh] max-h-[900px] bg-white rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-2xl md:rounded-tl-none shadow-2xl"></div>
    </div>
  );
}

export default StyledDialogContent;
