"use client";
import { Button } from "@/app/components/ui/button";
import Input from "@/app/components/ui/input";
import { useRef, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteGoal: "",
    keyFeatures: "",
    timeline: "",
    extraInfo: "",
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const websiteGoalRef = useRef<HTMLInputElement>(null);
  const keyFeaturesRef = useRef<HTMLInputElement>(null);
  const timelineRef = useRef<HTMLInputElement>(null);
  const extraInfoRef = useRef<HTMLInputElement>(null);

  const inputRefs = {
    name: nameRef,
    email: emailRef,
    websiteGoal: websiteGoalRef,
    keyFeatures: keyFeaturesRef,
    timeline: timelineRef,
    extraInfo: extraInfoRef,
  } as const;

  const validateForm = () => {
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (
        key !== "extraInfo" &&
        !formData[key as keyof typeof formData].trim()
      ) {
        isValid = false;
        inputRefs[key as keyof typeof inputRefs].current?.focus();
        return false;
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      inputRefs.email.current?.focus();
      return false;
    }

    return isValid;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Email sent successfully!");
        } else {
          console.error("Failed to send email");
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  return (
    <div className="w-full h-fit px-8">
      <h2 className="text-[8vw] sm:text-[3vw] w-fit sm:mb-8">
        Vertel mij over jouw project
      </h2>
      <div className="w-full h-[80vh] flex justify-center items-center">
        <form
          className="flex flex-col w-full max-w-[80vw] h-fit gap-6"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="flex flex-col sm:flex-row w-full h-fit gap-4">
            <div className="flex-1">
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Naam"
                ref={nameRef}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Mail"
                ref={emailRef}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <Input
              id="websiteGoal"
              type="text"
              name="websiteGoal"
              placeholder="Wat is het doel van de website"
              ref={websiteGoalRef}
              value={formData.websiteGoal}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              id="keyFeatures"
              type="text"
              name="keyFeatures"
              placeholder="Belangrijkste functies (Zoals inloggen, blogs of beheeromgeving)"
              ref={keyFeaturesRef}
              value={formData.keyFeatures}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              id="timeline"
              type="text"
              name="timeline"
              placeholder="Wat is de verwachte tijdslijn van het project"
              ref={timelineRef}
              value={formData.timeline}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              id="extraInfo"
              type="text"
              name="extraInfo"
              placeholder="Extra informatie (optioneel)"
              ref={extraInfoRef}
              value={formData.extraInfo}
              onChange={handleChange}
            />
          </div>
          <div className="w-full h-fit flex flex-col justify-center items-center mt-4">
            <Button type="submit" className="text-[6vw] sm:text-[2vw]">
              Bespreek project
            </Button>
            <p className="opacity-50 text-[2vw] sm:text-[1.2vw]">
              Het eerste gesprek is kosteloos en vrijblijvend om jouw ideeën te
              bespreken.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
