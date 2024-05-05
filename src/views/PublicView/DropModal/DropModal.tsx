import React, { useRef, useState } from "react";
import { Button, Modal } from "antd";
import type { DraggableData, DraggableEvent } from "react-draggable";
import Draggable from "react-draggable";

interface ComponentDropModalProps {
  buttonText?: string;
  okText?: string;
  cancelText?: string;
  footer?: any;
  title?: string;
  isShowOkButton?: boolean;
  isShowCancelButton?: boolean;
  content?: React.ReactNode;
  children?: React.ReactNode;
}

interface FooterButtonProps {
  label: string;
  type: "primary" | "default";
  isCloseModal: boolean;
  onClick: () => void;
}

const ComponentDropModal = ({
  buttonText,
  okText,
  cancelText,
  title,
  footer,
  isShowOkButton,
  isShowCancelButton,
  content,
  children,
}: ComponentDropModalProps) => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef<HTMLDivElement>(null);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    setOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    setOpen(false);
  };

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };
  // 公共组件
  const DropComponents = ({ children, title }: any) => {
    return (
      <div
        style={{
          width: "100%",
          cursor: "move",
        }}
        onMouseOver={() => {
          if (disabled) {
            setDisabled(false);
          }
        }}
        onMouseOut={() => {
          setDisabled(true);
        }}
      >
        {children || title || content}
      </div>
    );
  };

  return (
    <>
      <Button onClick={showModal}>{buttonText || "Open Modal"}</Button>
      <Modal
        title={<DropComponents title={title || "Draggable Modal"} />}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={okText}
        cancelText={cancelText}
        footer={(_: any, { OkBtn, CancelBtn }: any) => {
          const handleCustomButtonClick = (
            onClick: () => void,
            isCloseModal: boolean
          ) => {
            if (isCloseModal) {
              onClick();
              setOpen(false);
            } else {
              onClick();
            }
          };
          return (
            <>
              {footer?.map((button: FooterButtonProps) => (
                <Button
                  key={button.label}
                  type={button.type}
                  onClick={() =>
                    handleCustomButtonClick(button.onClick, button.isCloseModal)
                  }
                >
                  {button.label}
                </Button>
              )) || (
                <>
                  <CancelBtn />
                  <OkBtn />
                </>
              )}
              {isShowCancelButton && <CancelBtn />}
              {isShowOkButton && <OkBtn />}
            </>
          );
        }}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <DropComponents content={content}>
          {children || "Modal content"}
        </DropComponents>
      </Modal>
    </>
  );
};

export default ComponentDropModal;
