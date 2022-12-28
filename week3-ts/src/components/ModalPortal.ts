import React, { ReactNode } from "react";
import reactDom from "react-dom";

interface ChildrenProps {
  children: ReactNode;
}

const ModalPortal = ({ children }: ChildrenProps) => {
  const el = document.getElementById("root") as HTMLElement;

  return reactDom.createPortal(children, el);
};

export default ModalPortal;
