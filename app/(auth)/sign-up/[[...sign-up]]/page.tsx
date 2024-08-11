import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { LucideLoaderCircle } from "lucide-react";

export default function SignUpPage() {
  return (
    <>
      <ClerkLoaded>
        <SignUp path="/sign-up" />
      </ClerkLoaded>

      <ClerkLoading>
        <LucideLoaderCircle className="w-5 h-5 animate-spin text-muted-foreground" />
      </ClerkLoading>
    </>
  );
}
