import { Theme } from "@radix-ui/themes";
import { Text } from "./lib/ui/Text";

function App() {
  return (
    <Theme>
      <div className="App">
        <header>
          <Text as="h1">CMDS Client</Text>
        </header>
      </div>
    </Theme>
  );
}

export default App;
