var UIButton = (props) => {
    return (
      <button
      disabled
      className="w-60 bg-white italic rounded p-2 mt-5 disabled:bg-slate-800"
        {...props}
      >
        {props.children}
      </button>
    );
  };
  
  export default UIButton;
  