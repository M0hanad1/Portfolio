import { ContextProvider } from "context";
import { Header } from "components/ui/Header";
import ThemeChanger from "components/ui/ThemeChanger";

export default function App() {
  return (
    <ContextProvider>
      <div className="h-[20000px]">
        <Header />
        <ThemeChanger />
      </div>
    </ContextProvider>
  );
}
