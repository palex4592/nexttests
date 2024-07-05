"use client";
import { useState } from "react";
import Link from "next/link";
import { TheList } from "../lib/definitions";

export const AccordionItem = ({ list }: { list: TheList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button
        className="accordion-title flex items-center justify-between"
        onClick={toggleOpen}
      >
        <Link href={list.link} className="hover:underline font-medium text-lg">
          {list.name}
        </Link>
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
          style={{ fontSize: "2em", fontWeight: "200" }}
        >
          {/* &gt; */}›
        </span>
      </button>
      {isOpen && (
        <div className="accordion">
          {list.accordion?.map((item, index) => (
            <div key={index} className="accordion-content">
              <Link href={item.link} className="hover:underline">
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      )}
      <style jsx>{`
        .accordion {
          width: 100%;
        }
        .accordion-item {
          border-radius: 5px;
        }
        .accordion-title {
          width: 100%;
          text-align: left;
          border: none;
          outline: none;
        }
        .accordion-title:hover {
          underline;
        }
        .accordion-content {
          padding: 10px;
          border-left: 1px solid #ccc;
        }
      `}</style>
    </div>
  );
};
