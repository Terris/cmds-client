import { Text } from "./lib/ui/Text/Text";
import { AppProviders } from "./lib/providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <header>
          <Text as="h1">CMDS Client</Text>
        </header>
      </div>
    </AppProviders>
  );
}

export default App;
