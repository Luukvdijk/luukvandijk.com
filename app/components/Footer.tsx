import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-fit flex flex-col-reverse gap-8 sm:gap-0 sm:flex-row justify-around px-8 py-10 text-white">
      <div className="relative h-[15vh] w-auto">
        <Image
          src="/images/logo.svg"
          alt="logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="opacity-50 text-[3vw] sm:text-[2.5vw]">Contact</p>
        <p className="text-[5vw] sm:text-[3vw]">
          <a href="mailto:info@luukvandijk.com">info@luukvandijk.com</a>
        </p>
        <p className="opacity-50 text-[2.5vw] sm:text-[1vw]">KVK: 95680756</p>
      </div>
    </div>
  );
};

export default Footer;
