"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/product-truth";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section" id="faq" aria-labelledby="faq-heading">
      <div className="landing-container">
        <h2 id="faq-heading">Clear answers before you sign up.</h2>
        <div style={{ marginTop: 28 }}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = open === index;
            return (
              <article
                key={item.q}
                className="faq-item"
                data-open={isOpen ? "true" : "false"}
              >
                <button
                  className="faq-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <h3>{item.q}</h3>
                  <span className="faq-chev" aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 5l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className="faq-answer" id={`faq-${index}`} role="region">
                  <p>{item.a}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
