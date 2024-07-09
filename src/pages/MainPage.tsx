import { useState } from "react";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import Dialog from "../components/organisms/Dialog";
import Title from "../components/atoms/Title";
import Checkbox from "../components/atoms/Checkbox";
import Switch from "../components/atoms/Switch";
import Icon from "../components/atoms/Icon";
import Label from "../components/atoms/Label";
import Toast from "../components/atoms/Toast";

import { AccordionItem } from "../components/atoms/AccordionItem";
import { AccordionButton } from "../components/atoms/AccordionButton";
import { AccordionPanel } from "../components/atoms/AccordionPanel";
import { Accordion } from "../context/Accordion";

export default function MainPage() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    //html(JSX)는 이곳에
    <>
      <div aria-hidden={isOpenDialog}>
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
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
        <br />
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
        {/* type: single / multiple */}
        <Accordion type="multiple">
          <AccordionItem index={0}>
            <AccordionButton openIcon="plus" closeIcon="dash">
              <Title headingLevel={4}>Accordion Title</Title>
            </AccordionButton>
            <AccordionPanel>
              <div>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem index={1}>
            <AccordionButton>Accordion Title2</AccordionButton>
            <AccordionPanel>
              <div>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem index={2}>
            <AccordionButton>Accordion Title3\</AccordionButton>
            <AccordionPanel>
              <div>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* ▼ 모든 JSX 문법 사용가능(ex: onClick, disabled...) */}
        <Button
          onClick={() => {
            setIsOpenDialog(!isOpenDialog);
          }}
        >
          {isOpenDialog ? "Close" : "Open"} Dialog
        </Button>
        <Button
          onClick={() => {
            setIsOpenToast(!isOpenToast);
          }}
          disabled={isOpenToast}
        >
          {isOpenToast ? "Showing Toast" : "Show Toast (3s)"}
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
      </div>
      <Dialog
        isOpen={isOpenDialog}
        type="alert"
        title="타이틀"
        content="content"
        onClose={(e) => {
          e.stopPropagation();
          setIsOpenDialog(false);
        }}
      />
      <Toast isOpen={isOpenToast} setIsOpen={setIsOpenToast} timer={3000}>
        toast text
      </Toast>
    </>
  );
}
