const LoadingSpinner = () => {
  return (
    <div
      className="animate-spin inline-block w-8 h-8 border-4 border-current mt-52 border-t-transparent text-slate-900 rounded-full dark:text-slate-900"
      role="status"
      aria-label="loading">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
