import { useState, useRef, useEffect } from "react";

import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "components/atoms/accordion";

import Title from "components/atoms/title";
import Label from "components/atoms/label";
import Switch from "components/atoms/switch";
import Button from "components/atoms/button";
import Icon from "components/atoms/icon";
import Input from "components/atoms/input";
import Toast from "components/atoms/toast";
import { Checkbox, CheckboxGroup } from "components/atoms/checkbox";
import { Radio, RadioGroup } from "components/atoms/radio";
import { Dialog } from "components/organisms";

import { useDarkMode } from "context/DarakModeContext";
import { Accordion } from "context/AccordionContext";

export default function SamplePage1() {
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

  const { darkMode, toggleDarkMode } = useDarkMode();

  const checkboxData = [
    {
      id: "mobileCheckbox1",
      checked: isChecked1,
      onChange: setIsChecked1,
      label: "labelText1",
    },
    {
      id: "mobileCheckbox2",
      checked: isChecked2,
      onChange: setIsChecked2,
      label: "labelText2",
    },
  ];

  const radioData = [
    {
      id: "apple-option",
      value: "apple",
      label: "Apple",
    },
    {
      id: "banana-option",
      value: "banana",
      label: "Banana",
    },
  ];

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
        {/* S: 체크박스 그룹 */}
        <CheckboxGroup direction="column">
          {checkboxData.map((item) => (
            <div key={item.id}>
              <Checkbox
                id={item.id}
                checked={item.checked}
                onChange={(e) => {
                  item.onChange(e.target.checked);
                }}
              />
              <Label htmlFor={item.id}>{item.label}</Label>
            </div>
          ))}
        </CheckboxGroup>
        {/* E: 체크박스 그룹 */}

        {/* S: 라디오 그룹 */}
        <RadioGroup
          direction="column"
          name="fruits"
          selectedValue={selectedFruit}
          onChange={setSelectedFruit}
          legend="choice your fruit"
        >
          {radioData.map(({ id, value, label }) => (
            <div key={id}>
              <Radio id={id} value={value} />
              <Label htmlFor={id}>{label}</Label>
            </div>
          ))}
        </RadioGroup>
        {/* E: 라디오 그룹 */}

        <div className="d-flex align-center gap-2">
          <Switch
            id="darkModeToggle"
            checked={darkMode}
            onChange={() => {
              toggleDarkMode();
            }}
          />
          <Label htmlFor="darkModeToggle">
            다크모드 {darkMode ? "ON" : "OFF"}{" "}
          </Label>
        </div>

        <p>
          대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를 존중함을
          기본으로 한다. 헌법개정은 국회재적의원 과반수 또는 대통령의 발의로
          제안된다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여
          연임할 수 있다. 외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가
          보장된다. 국회의 회의는 공개한다. 다만, 출석의원 과반수의 찬성이
          있거나 의장이 국가의 안전보장을 위하여 필요하다고 인정할 때에는
          공개하지 아니할 수 있다. 국무회의는 정부의 권한에 속하는 중요한 정책을
          심의한다. 대법원장의 임기는 6년으로 하며, 중임할 수 없다. 국회에서
          의결된 법률안은 정부에 이송되어 15일 이내에 대통령이 공포한다.
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
              onKeyDown={(evt: any) =>
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
              onChange={(e: any) => {
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
                onKeyDown={(evt: any) =>
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
                onChange={(e: any) => {
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
        onClose={(e: { stopPropagation: () => void }) => {
          e.stopPropagation();
          setIsOpenDialog(false);
        }}
      />
      <Toast
        isOpen={isOpenToast}
        setIsOpen={setIsOpenToast}
        timer={3000}
        pos={60}
      >
        toast text
      </Toast>
    </>
  );
}
