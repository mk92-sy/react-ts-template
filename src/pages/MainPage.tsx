import { useState, useRef, useEffect } from "react";

import { Accordion } from "../context/Accordion";

import { Mobile } from "../styles/mediaQuery";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Input,
  Title,
  Checkbox,
  Switch,
  Icon,
  Label,
  Toast,
  Radio,
  RadioGroup,
} from "../components/atoms";
import { Dialog } from "../components/organisms";
import Button2 from "../components/atoms/Button2";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState<string>("apple");
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    //html(JSX)는 이곳에
    <>
      <div className="d-flex col gap-3" aria-hidden={isOpenDialog}>
        <Title headingLevel={3}>Sub Title</Title>
        <p>▼ 3초후에 로딩 완료되는 UI (스켈레톤 UI)</p>
        {/* type: single / multiple */}
        <Accordion type="multiple">
          {isLoading ? (
            <>
              <div className="skeleton" style={{ height: 50 }}>
                <div className="box">
                  <div className="square title"></div>
                  <div className="square icon"></div>
                </div>
              </div>
              <div className="skeleton" style={{ height: 39.59 }}>
                <div></div>
              </div>
              <div className="skeleton" style={{ height: 39.59 }}>
                <div></div>
              </div>
            </>
          ) : (
            <>
              <AccordionItem index={0}>
                <AccordionButton
                  id="accordion1"
                  aria-controls="accordion1-panel"
                  openIcon="plus"
                  closeIcon="dash"
                >
                  <Title headingLevel={4}>Accordion Title</Title>
                </AccordionButton>
                <AccordionPanel
                  id="accordion1-panel"
                  aria-labelledby="accordion1"
                >
                  <p style={{ padding: "0 16px 16px" }}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary,
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem index={1}>
                <AccordionButton>Accordion Title2</AccordionButton>
                <AccordionPanel>
                  <p style={{ padding: "0 16px 16px" }}>
                    {" "}
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary,
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem index={2}>
                <AccordionButton>Accordion Title3</AccordionButton>
                <AccordionPanel>
                  <p style={{ padding: "0 16px 16px" }}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary,
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </>
          )}
        </Accordion>
        <Mobile>
          <div className="d-flex align-center gap-2">
            <Checkbox
              id="mobileCheckbox"
              checked={isChecked1}
              onChange={(e) => {
                setIsChecked1(e.target.checked);
              }}
            />
            <Label htmlFor="mobileCheckbox">
              모바일에서만 나타나는 체크박스
            </Label>
          </div>
        </Mobile>
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

        <RadioGroup
          name="fruits"
          selectedValue={selectedFruit}
          onChange={setSelectedFruit}
          legend="choice your fruit"
        >
          <Radio id="apple-option" value="apple" label="Apple" />
          <Radio id="banana-option" value="banana" label="Banana" />
        </RadioGroup>

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
          {isOpenToast ? <Icon type="spinner" /> : "Show Toast (3s)"}
        </Button>
        <Button2 />
        <Label
          htmlFor="telNum"
          className="d-flex col gap-1 px-20 py-13"
          style={{
            border: isFocus ? "2px solid #000" : "2px solid #eee",
          }}
        >
          <span>Birth</span>
          <div className="d-flex align-center">
            <Input
              id="telNum"
              placeholder="241235"
              type="number"
              inputMode="decimal"
              onKeyDown={(evt) =>
                ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
              }
              onFocus={() => {
                setIsFocus(true);
              }}
              onBlur={() => {
                setIsFocus(false);
              }}
              maxLength={6}
              value={inputValue1}
              style={{ minWidth: "calc(50% - 14px)" }}
              onChange={(e) => {
                setInputValue1(e.target.value.slice(0, 6));
              }}
              ref={inputRef1}
            />
            <Icon type="dash" />
            <div
              className="d-flex w-full align-center justify-evenly"
              style={{ minWidth: "calc(50% - 14px)" }}
            >
              <Input
                id="telNum2"
                placeholder="1"
                type="number"
                onKeyDown={(evt) =>
                  ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
                }
                onFocus={() => {
                  setIsFocus(true);
                }}
                onBlur={() => {
                  setIsFocus(false);
                }}
                maxLength={1}
                value={inputValue2}
                onChange={(e) => {
                  setInputValue2(e.target.value.slice(0, 1));
                }}
                style={{ width: "10px" }}
                ref={inputRef2}
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
