import React from "react";
import styled from "styled-components";
import Editor from "./Editor";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {}

const Modal: React.FC<ModalProps> = () => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();

  return (
    <DialogContainer>
      <Dialog open ref={dialogRef}>
        <form>
          <FormHeader>
            <h2>Add new entry in Timeline-12345</h2>
            <FormCloseBtn
              type='button'
              onClick={() => {
                dialogRef?.current?.close();
                navigate(-1);
              }}
            >
              <CloseIcon>&times;</CloseIcon>
            </FormCloseBtn>
          </FormHeader>
          <FormMain>
            <Editor />
            <Button type='primary'>Submit</Button>
            <Button
              type='secondary'
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Cancel
            </Button>
          </FormMain>
        </form>
      </Dialog>
    </DialogContainer>
  );
};

const DialogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  opacity: 1;
  pointer-events: "auto";
  transition: opacity 0.3s ease-in-out;
`;

const Dialog = styled.dialog`
  padding: 2rem;
  min-height: 80vh;
  min-width: 50vw;
  border-style: none;
  border-radius: 1rem;
`;

const FormHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const FormMain = styled.main`
  margin-top: 5rem;
`;

const FormCloseBtn = styled.button`
  border-style: none;
  background-color: #fff;
`;

const CloseIcon = styled.span`
  font-size: 2rem;
`;

export default Modal;
