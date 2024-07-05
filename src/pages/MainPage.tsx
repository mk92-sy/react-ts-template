import { useState } from "react";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import Dialog from "../components/organisms/Dialog";
import Title from "../components/atoms/Title";
import Checkbox from "../components/atoms/Checkbox";
import Switch from "../components/atoms/Switch";
import Icon from "../components/atoms/Icon";
import Label from "../components/atoms/Label";

export default function MainPage() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  return (
    //html(JSX)는 이곳에
    <>
      <Title headingLevel={3}>Sub Title</Title>
      <Checkbox
        checked={isChecked1}
        onChange={(e) => {
          setIsChecked1(e.target.checked);
        }}
      />
      <Switch
        checked={isChecked2}
        onChange={(e) => {
          setIsChecked2(e.target.checked);
        }}
      />
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
      <br />
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
      <Label htmlFor="telNum" className="d-flex col gap-1 px-20 py-13">
        <span>Birth</span>
        <div className="d-flex align-center">
          <Input
            id="telNum"
            placeholder="241235"
            type="text"
            maxLength={6}
            value={inputValue1}
            style={{ minWidth: "calc(50% - 14px)" }}
            onChange={(e) => {
              setInputValue1(e.target.value);
            }}
          />
          <Icon type="dash" />
          <div
            className="d-flex w-full align-center justify-evenly"
            style={{ minWidth: "calc(50% - 14px)" }}
          >
            <Input
              id="telNum2"
              type="text"
              maxLength={1}
              value={inputValue2}
              onChange={(e) => {
                setInputValue2(e.target.value);
              }}
              style={{ width: "10px" }}
            />
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </Label>
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
