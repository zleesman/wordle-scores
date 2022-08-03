import React, { useContext, useState } from "react";
import tw, { styled } from "twin.macro";
import AppContext from "./AppContext";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";
const Container = styled.section`
  ${tw`flex flex-col items-center w-full gap-3 pt-24`}
`;
const Form = styled.form`
  ${tw`flex flex-col items-center justify-center`}
`;
const Submit = styled.input`
  ${tw`p-4 mt-12 text-3xl rounded-full bg-primary border-2 border-primary cursor-pointer ease-in-out duration-500 hover:(bg-transparent) w-72`}
`;

const Input = () => {
  const { userData } = useContext(AppContext);
  const [textInput, setTextInput] = useState();
  const [error, setError] = useState(false);
  const handleSubmit = async () => {
    const score = textInput.charAt(11);
    const docRef = await addDoc(collection(db, "submissions"), {
      submission: textInput,
      score: score,
      user: userData.uid,
      timestamp: serverTimestamp(),
    });
    if (textInput) {
      // console.log(textInput.split(""));
      setError(false);
    } else {
      setError(true);
    }
  };
  // console.log("\ud83d\udfe9");
  return (
    <Container>
      <p tw="text-3xl font-bold">
        Hello {userData && <span>{userData.displayName}</span>}!
      </p>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {error && (
          <p tw=" text-red-500 pb-4 font-bold text-center">
            There was an error with your score submission
          </p>
        )}
        <textarea
          placeholder="Enter Today's Score "
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          tw="border-2 w-[15rem] h-[15rem] flex"
        ></textarea>
        <Submit type="submit" value="Submit" />
      </Form>
    </Container>
  );
};

export default Input;
