import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Interv, and how does it work?",
    answer: "Interv is a platform designed for conducting video and coding interviews. It combines video conferencing with an integrated coding environment, enabling interviewers to assess both technical and communication skills in real time.",
    value: "item-1",
  },
  {
    question: "Is Interv suitable for both technical and non-technical roles?",
    answer:
      "Absolutely. While Interv is optimized for technical interviews, its video and question-based formats make it ideal for evaluating candidates for a wide range of positions.",
    value: "item-2",
  },
  {
    question:
      "How secure is the data on Interv?",
    answer:
      "Security is a top priority. All interviews, code submissions, and recordings are encrypted, ensuring that candidate data is kept private and secure.",
    value: "item-3",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?",
    answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    value: "item-4",
  },
  {
    question:
      "How do I schedule an interview on Interv?",
    answer:
      "You can schedule an interview directly through the Interv platform by selecting the desired date and time, inviting participants, and setting the interview type (video or coding). Both interviewers and candidates will receive the invitation via email.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions? Contact us via email {" "}
        <a
          rel="noreferrer noopener"
          href="mailto:help@interv.cc"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          help@interv.cc
        </a>
      </h3>
    </section>
  );
};
