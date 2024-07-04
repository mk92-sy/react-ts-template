import { useState } from "react";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import Dialog from "../components/organisms/Dialog";
import Title from "../components/atoms/Title";

export default function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  return (
    //html(JSX)는 이곳에
    <>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
      <br/>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
      {/* ▼ 모든 JSX 문법 사용가능(ex: onClick, disabled...) */}
      <Button
        onClick={() => {
          setIsOpenDialog(!isOpenDialog);
        }}
      >
        asd
      </Button>
      <Input
        type="text"
        value={inputValue}
        disabled
        readOnly
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Dialog
        isOpen={isOpenDialog}
        type="alert"
        title="타이틀"
        content="content"
        onClose={() => {
          setIsOpenDialog(false);
        }}
      />
    </>
  );
}
