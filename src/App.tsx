import { ContextProvider } from "context";
import { Header } from "components/ui/Header";
import { Theme } from "components/ui/Theme";

export default function App() {
  return (
    <ContextProvider>
      <div className="h-[20000px]">
        <Header />
        <Theme />
      </div>
    </ContextProvider>
  );
}
