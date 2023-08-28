import PageLink from "./PageLinks";

var PageHeader = () => {
  return (
    <div className="bg-slate-900 p-2">
      <header className="flex justify-between">
        <PageLink to="/">
          <p className="m-2 text-white italic text-2xl">CartFairy</p>
        </PageLink>

        <nav className="flex  gap-4 m-2 text-white italic hover:pointer ">
          <div className="hover:text-slate-400">
            <PageLink to="/products">Products</PageLink>
          </div>

          <div className="hover:text-slate-400">
            <PageLink to="/login">Login</PageLink>
          </div>
          <div className="hover:text-slate-400">
            <PageLink to="/signUp">Sign Up</PageLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default PageHeader;
