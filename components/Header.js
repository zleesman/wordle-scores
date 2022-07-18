import App from "next/app";
import React, { useContext } from "react";
import tw, { styled } from "twin.macro";
import { signInWithGoogle, userSignOut } from "../firebase/config";
import AppContext from "./AppContext";
const Container = styled.div`
  ${tw`fixed top-0 flex flex-row items-center justify-between w-full h-24 px-6 text-2xl font-bold text-white bg-black`}
`;

const Header = () => {
  const { currUser, setCurrUser } = useContext(AppContext);

  return (
    <Container>
      <p tw="font-italianno text-6xl text-primary">Wordle Scores</p>

      <button
        onClick={currUser ? userSignOut : signInWithGoogle}
        tw="bg-primary text-black rounded-full px-12 py-4"
      >
        {currUser ? "Log Out" : "Log In"}
      </button>
    </Container>
  );
};

export default Header;
