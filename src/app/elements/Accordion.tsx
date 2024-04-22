'use client' // Assuming this indicates that the code runs on the client-side

import { useState, useEffect } from 'react';

// Define props interface for Accordion component
type AccordionProps = {
  children: React.ReactNode // Content to be displayed inside the accordion
  question: string // question of the accordion
  id: string, // Unique identifier for the accordion
  active?: boolean // Optional property to control the initial state of the accordion
}

// Accordion component function
export default function Accordion({
  children,
  question,
  id,
  active = false // Default value for active state
}: AccordionProps) {

  // State to manage whether the accordion is open or closed
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  // Effect to set initial state of accordion based on active prop
  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  // Render the Accordion component
  return (
    <div className="p-1 font-sans rounded-md hover:shadow-lg text-indigo-800">
      {/* Accordion question and toggle button */}
      <h2 className='hover:bg-indigo-100 p-2 rounded-md'>
        <button
          className="flex items-center justify-between w-full text-left font-semibold"
          onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }} // Toggle accordion state on button click
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span>{question}</span> {/* Display the accordion question */}
          {/* SVG icon for indicating accordion state */}
          <svg className="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            {/* Two rectangles to form an arrow, one rotated to point downwards */}
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
          </svg>
        </button>
      </h2>
      {/* Content of the accordion */}
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-question-${id}`}
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="p-2">
            {children} {/* Display the content inside the accordion */}
          </div>
        </div>
      </div>
    </div>
  )
}
