import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 border-blue-900 border-2 rounded-2xl",
        className
      )}
      {...props}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl ">Login</CardTitle>
          <CardDescription>
            Inserisci le tue credenziali per accedere al tuo account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6 ">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/recupero-password"
                    className="inline-block ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Dimenticato la tua password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button
                type="submit"
                className="w-full border-solid border-1 rounded-xl"
              >
                Login
              </Button>
            </div>
            <div className="mt-4 text-sm text-center">
              <a href="/" className="underline underline-offset-4">
                Back
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
