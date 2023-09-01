var UIButton = (props) => {
    return (
      <button
        className="bg-white  text-center  text-slate-900 rounded italic w-32 p-3 mt-10 ml-20 mb-4"
        {...props}
      >
        {props.children}
      </button>
    );
  };
  
  export default UIButton;
  