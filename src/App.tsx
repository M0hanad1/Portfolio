import ContextProvider from "context/ContextProvider";
import Header from "components/ui/Header";

export default function App() {
  return (
    <ContextProvider>
      <div className="h-[20000px]">
        <Header />
      </div>
    </ContextProvider>
  );
}
