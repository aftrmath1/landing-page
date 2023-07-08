/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is available today?",
    answer:
      "Our current product offers a comprehensive solution for generating truly personalized messaging across your entire lead list. From crafting individualized cold emails and tailored subject lines to generating effective sales discovery questions, our services empower you to boost open rates, engage prospects, and optimize your sales process.",
  },
  {
    question: "Who is pipeline for?",
    answer: "Pipeline is the ideal solution for businesses seeking to avoid the high costs associated with hiring expensive sales representatives and investing in multiple software tools. With our service, you can effortlessly book sales meetings and create brand awareness without the hefty price tag of over $100,000 per year."
  },
  {
    question: "How simple is it to use and to train my team to use?",
    answer: "Finding the right sales tool is crucial for maximizing productivity and efficiency. While many software tools may appear feature-rich, it's essential to choose a powerful yet intuitive solution that enables your team to accomplish more in less time. Avoiding overly complex tools that require months of training ensures that you can save valuable time and maintain high levels of productivity."
  },
  {
    question: "Can Pipeline grow my business?",
    answer: "One often overlooked aspect when evaluating sales tools is their scalability to accommodate business growth. While you may be a startup currently, selecting a sales tool that can adapt and support your expanding needs is vital. A reliable sales tool can propel your business to reach targets faster than anticipated, regardless of your current stage."
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-black py-24">
      <div className="mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-x-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
          <div className="w-1/2">
            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-100 to-purple-400 bg-clip-text text-transparent">
              General FAQs
            </h2>

            <div className="h-5" />
            <p className="text-gray-100">
              Whether its mass introduction emails, linkedin connection message,
              or personalized first liners. We can help.
            </p>
          </div>
          <div className="w-1/2">
            <dl className="space-y-6 divide-y divide-gray-200">
              {faqs.map(faq => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-white">
                          <span className="font-medium text-white">
                            {faq.question}
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-5 pr-12">
                        <p className="text-base text-gray-300">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
