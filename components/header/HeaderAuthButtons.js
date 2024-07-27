import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FaUser } from "react-icons/fa";

const HeaderAuthButtons = () => (
  <>
    <SignedIn>
      <UserButton>
        {({ user }) => <FaUser className="text-xl cursor-pointer" />}
      </UserButton>
    </SignedIn>
    <SignedOut>
      <SignInButton redirectUrl="/sign-in">
        <FaUser className="text-xl cursor-pointer" />
      </SignInButton>
    </SignedOut>
  </>
);

export default HeaderAuthButtons;

