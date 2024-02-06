import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Input,
  Text,
} from "@/lib/ui";

export function LoginPage() {
  return (
    <div className="bg-rootBackground flex flex-col h-full w-full min-h-screen items-center justify-center">
      <Card className="w-[360px]">
        <CardHeader className="border-b">
          <Text>Collections Management Database System (C.M.D.S.)</Text>
        </CardHeader>
        <CardContent>
          <Text className="text-center py-4">
            Sign in to start your session
          </Text>

          <Input name="email" placeholder="Email" className="mb-3" />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            className="mb-3"
          />
          <div className="flex flex-row items-center justify-between mb-3">
            <div className="flex flex-row items-center">
              <Checkbox name="remember" className="mr-1" /> Remember me
            </div>
            <Button>Sign in</Button>
          </div>
          <Text className="text-primary cursor-pointer">
            I forgot my password
          </Text>
        </CardContent>
      </Card>
    </div>
  );
}
