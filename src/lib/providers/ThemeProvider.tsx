import { Theme } from "@radix-ui/themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <Theme accentColor="lime" panelBackground="solid">
      {children}
    </Theme>
  );
}
