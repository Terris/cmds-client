import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Input,
  Text,
} from "@/lib/ui";
import logo from "@/assets/images/CMDS_LeafOnly_Logo-128x128px.png";

export function LoginPage() {
  return (
    <div className="flex flex-col h-full w-full min-h-screen items-center justify-center">
      <Card className="w-[360px]">
        <CardHeader className="border-b flex flex-row items-center">
          <img
            src={logo}
            alt=""
            style={{
              boxShadow:
                "0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)",
              borderRadius: "100%",
              width: "51px",
              height: "51px",
              marginRight: "1rem",
            }}
          />
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
