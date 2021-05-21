import { Button } from "@chakra-ui/button";

import { signInWithGoogle } from "firebase-service/client-app";
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";

const AuthPage = () => {
  const login = async () => {
    signInWithGoogle();
  };

  return (
    <div>
      <Button onClick={login}>Login with Google</Button>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})();

export default withAuthUser({ whenAuthed: AuthAction.REDIRECT_TO_APP })(
  AuthPage
);
