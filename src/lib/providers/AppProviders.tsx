import { Theme } from "@radix-ui/themes";

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return <Theme>{children}</Theme>;
}
