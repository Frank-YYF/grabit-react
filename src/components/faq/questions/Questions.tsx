import { useState } from "react";
import Spinner from "@/components/button/Spinner";
import { useSliceData } from "@/hooks/useSliceData";
import { motion, AnimatePresence } from "framer-motion";

const Questions = ({ keyslice }: any) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const { data, error } = useSliceData(keyslice);

  if (error) return <div>Failed to load data</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const getData = () => {
   return data;
  };

  return (
    <>
      <div className="gi-accordion style-1">
        {getData().map((item: any, index: number) => (
          <div
            key={index}
            className="gi-accordion-item"
            onClick={() => toggleAccordion(index)}
          >
            <h4 className="gi-accordion-header">{item.questions}</h4>
            <AnimatePresence initial={false}>
              {openIndex === index && 
              <motion.div
                key={`content-${index}`}
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { height: 'auto', opacity: 1 },
                  collapsed: { height: 0, opacity: 0 },
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div className={`gi-accordion-body d-block`}>{item.ans}</div>
              </motion.div>}
            </AnimatePresence>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default Questions;
