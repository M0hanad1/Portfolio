import ContextProvider from "context/ContextProvider";
import Header from "components/ui/Header";
import Theme from "components/ui/Theme";

export default function App() {
  return (
    <ContextProvider>
      <Theme />
      <Header />
    </ContextProvider>
  );
}
