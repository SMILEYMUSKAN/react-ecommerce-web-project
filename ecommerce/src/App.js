import "./App.css";
import AppRouter from "./AppRouter";
import PageHeader from "./components/PageHeader";
import AppProvider from "./context/AppProvider";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <AppProvider>
      <UserProvider>
        <PageHeader />
        <AppRouter />
      </UserProvider>
    </AppProvider>
  );
}

export default App;
