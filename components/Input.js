import React, { useContext, useState } from "react";
import tw, { styled } from "twin.macro";
import AppContext from "./AppContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
const Container = styled.section`
  ${tw`flex flex-col items-center w-full gap-3 pt-24`}
`;
const Form = styled.form`
  ${tw`flex flex-col`}
`;
const Submit = styled.input`
  ${tw`p-4 mt-12 text-3xl rounded-full bg-primary border-2 border-primary cursor-pointer ease-in-out duration-500 hover:(bg-transparent)`}
`;
const handleSubmit = () => {};
const Input = () => {
  const { userData } = useContext(AppContext);
  const [textInput, setTextInput] = useState();
  return (
    <Container>
      <p tw="text-3xl font-bold">
        Hello {userData && <span>{userData.displayName}</span>}!
      </p>
      <Form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <textarea
          placeholder="Enter Today's Score"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          tw="border-2 w-[20rem] h-[15rem] flex"
        ></textarea>
        <Submit type="submit" value="Submit" />
      </Form>
    </Container>
  );
};

export default Input;
