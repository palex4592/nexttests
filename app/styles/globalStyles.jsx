"use client";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import React, { useRef, useEffect } from "react";

const StyledSearch = styled.input`
  color: black;
`;

const StyledTopNav = styled.div`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;
const StyledSideNav = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  position: fixed;
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  backdrop-blur: lg;
`;

const StyledTodos = styled.li`
  padding: 1rem;
  margin: 1rem;
  border-width: 4px;
  border-color: ${({ theme }) => theme.borderColor};
  max-width: 42rem;
`;

const ThemedInput = styled.input`
  border: 2px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.textArea};
  background-color: ${({ theme }) => theme.bodyArea};
`;

const StyledTextarea = styled.textarea`
  border: 2px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.textArea};
  background-color: ${({ theme }) => theme.bodyArea};
  padding: 0.5rem;
  width: 100%;
  resize: none; /* Prevent manual resizing */
  overflow: hidden; /* Hide scroll bars */
`;

const ThemedTextarea = ({ ...props }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const adjustHeight = () => {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
      };

      adjustHeight();
      textarea.addEventListener("input", adjustHeight);

      return () => {
        textarea.removeEventListener("input", adjustHeight);
      };
    }
  }, []);

  return <StyledTextarea ref={textareaRef} {...props} />;
};

export {
  ThemedInput,
  ThemedTextarea,
  StyledTopNav,
  StyledSideNav,
  StyledTodos,
  StyledSearch,
};

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    }
    `;
// transition: all 0.20s linear;

export default GlobalStyles;
