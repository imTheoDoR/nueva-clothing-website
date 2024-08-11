import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { LucideLoaderCircle } from "lucide-react";

export default function SignInPage() {
  return (
    <>
      <ClerkLoaded>
        <SignIn path="/sign-in" fallbackRedirectUrl="/dashboard" />
      </ClerkLoaded>

      <ClerkLoading>
        <LucideLoaderCircle className="w-5 h-5 animate-spin text-muted-foreground" />
      </ClerkLoading>
    </>
  );
}
