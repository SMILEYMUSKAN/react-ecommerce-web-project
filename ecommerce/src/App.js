import "./App.css";
import AppRouter from "./AppRouter";
import PageHeader from "./components/PageHeader";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <PageHeader />
      <AppRouter />
    </AppProvider>
  );
}

export default App;
