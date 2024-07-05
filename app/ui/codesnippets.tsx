"use client";
import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // You can choose a different style

const CodeSnippet = ({ code }: { code: string }) => {
  const textareaRef = useRef(null);
  const preRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    if (preRef.current) {
      hljs.highlightBlock(preRef.current);
    }
  }, [code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="code-snippet-container">
      <pre ref={preRef}>
        <code className="language-javascript">{code}</code>
      </pre>
      <textarea
        ref={textareaRef}
        value={code}
        readOnly
        style={{
          position: "absolute",
          left: "-9999px",
        }}
      />
      <button
        onClick={handleCopy}
        className={`copy-button w-24 h-8 ${isCopied ? "copied" : ""}`}
      >
        {isCopied ? (
          <>
            <span>&#10003;</span> Copied
          </>
        ) : (
          "Copy"
        )}
      </button>
      <style jsx>{`
        .code-snippet-container {
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 100%;
          max-width: 700px;
          margin: 5px auto;
          padding: 0px;
          border: 3px solid #e1e4e8;
          border-radius: 6px;
          background-color: #f6f8fa;
        }

        pre {
          width: 100%;
          overflow-x: auto;
          margin: 0px;
          padding: 0px 0px 0px 20px;
          background: #f6f8fa;
          border-radius: 6px;
        }

        .copy-button {
          margin-top: 10px;
          padding: 5px 5px;
          font-size: 16px;
          cursor: pointer;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
        }
        .copy-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default CodeSnippet;
