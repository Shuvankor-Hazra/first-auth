import React from "react";
import Button from "react-bootstrap/Button";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const GithubSignUp = () => {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p className="text-center">User Registered</p>
      </div>
    );
  }
  return (
    <div>
      {" "}
      <Button
        className="btn btn-default w-100 mb-3"
        onClick={() => signInWithGithub()}
        type="submit"
      >
        Continue With Github
      </Button>
    </div>
  );
};

export default GithubSignUp;
