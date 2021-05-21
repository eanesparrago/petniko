import { Button } from "@chakra-ui/button";
import firebase from "firebase";
import type { NextPage } from "next";
import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import { useEffect } from "react";
import { signOut } from "firebase-service/client-app";

const collectIdsAndDocs = (doc: any) => ({ id: doc.id, ...doc.data() });

const IndexPage: NextPage = () => {
  const AuthUser = useAuthUser();

  console.log("AuthUser", AuthUser);

  const logOut = () => {
    signOut();
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("test")
      .get()
      .then((snapshot) => {
        console.log("test", snapshot.docs.map(collectIdsAndDocs));
      });
  }, []);

  return (
    <div>
      <Button onClick={logOut}>Log Out</Button>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})();

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(IndexPage);
