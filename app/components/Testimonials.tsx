import React from "react";

const Testimonials: React.FC = () => {
  return (
    <div className="bg-hero-nav ">
      <div className="w-10/12 text-center mx-auto text-white py-20 ">
        <div>
          <div className="pb-10 text-center text-orange-600  font-medium uppercase">
            What people are saying.
            <div className="text-center">
              <span className="inline-block w-1 h-1 rounded-full bg-orange-600 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-orange-600 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-orange-600 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-orange-600 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-orange-600 ml-1"></span>
            </div>
          </div>
          <div className="pt-7 flex gap-7">
            <div className="flex-1 pt-9 flex flex-col gap-7 justify-center">
              <TestimonialCard
                review={
                  "Hevomax engine oil keeps my car running smoothly, ensuring peak performance on every journey. A reliable companion for any automobile enthusiast!"
                }
                name={"Priya Sharma"}
              />
              <TestimonialCard
                review={
                  "Hevomax engine oil ensures top-notch vehicle protection, extending its lifespan— a must-have for optimal engine care."
                }
                name={"Arjun Kumar"}
              />
            </div>
            <div className="flex-1 flex flex-col gap-7 justify-center">
              <TestimonialCard
                review={
                  "Hevomax brake oil is my choice for safety on the road. Its precision and reliability give me confidence in every drive"
                }
                name={"Raj Kapoor"}
              />
              <TestimonialCard
                review={
                  "As a car enthusiast, I rely on Hevomax engine oil to provide the optimum care my vehicle deserves. Unmatched quality for peak performance!"
                }
                name={"Nidhi Verma"}
              />
              <TestimonialCard
                review={
                  "Hevomax engine oil – the lifeblood of my car's engine. It ensures a smooth ride and longevity for my trusted vehicle."
                }
                name={"Rahul Joshi"}
              />
            </div>
            <div className="flex-1 pt-9 flex flex-col gap-7 justify-center">
              <TestimonialCard
                review={
                  "Hevomax brake oil delivers on safety and performance. It's the go-to choice for anyone who values quality in their automotive maintenance."
                }
                name={"Aisha Khan"}
              />
              <TestimonialCard
                review={
                  "Choosing Hevomax for my engine and brake oil needs was the best decision. It's the perfect blend of reliability and efficiency for my car."
                }
                name={"Ananya Patel"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TestimonialCardProps {
  review: string;
  name: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ review, name }) => {
  return (
    <div className="rounded-lg  border border-[#ffffff1d] p-5  text-center text-sm">
      <p className="font-medium">
        <span className="text-orange-600">&lt;&lt;</span> {review}
        <span className="text-orange-600"> &gt;&gt;</span>
      </p>
      <h5 className="font-medium mt-5">
        {" "}
        <span className="text-orange-600">-</span> {name}
      </h5>
    </div>
  );
};

export default Testimonials;
