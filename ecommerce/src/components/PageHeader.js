import { useAppContext } from "../context/AppProvider";
import { useUserContext } from "../context/UserProvider";
import PageLink from "./PageLinks";

var PageHeader = () => {
  var { user } = useUserContext();
  var { cartCount } = useAppContext();
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
          {user ? (
            <div>
              {user.email} <PageLink to="/logout">Logout</PageLink>
            </div>
          ) : (
            <>
              <div className="hover:text-slate-400">
                <PageLink to="/login">Login</PageLink>
              </div>
              <div className="hover:text-slate-400">
                <PageLink to="/signUp">Sign Up</PageLink>
              </div>
            </>
          )}
          <div>
            <PageLink to="/cart">My Cart ({cartCount})</PageLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default PageHeader;
