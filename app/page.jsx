import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import TypingRoles from "@/components/TypingRoles";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Put your CV in /public and set the path (e.g. "/resume.pdf") to make the button download it.
const CV_URL = "";

const cvButtonStyles =
  "uppercase flex items-center gap-2 bg-[#FFC900] text-black hover:bg-[#FF90E8]";

const cvContent = (
  <>
    <span>Download CV</span>
    <FiDownload className="text-xl" />
  </>
);

const Home = () => {
  return ( 
    <section className="h-full">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="inline-block -rotate-2 bg-black text-[#FFC900] border-2 border-ink px-3 py-1 text-lg font-bold mb-5">
              Developer
            </span>

            <h1 className="h1 mb-8 [text-shadow:4px_4px_0_#FF90E8]">
              Hello I&apos;m <br />
              <TypingRoles />
            </h1>

            <p className="max-w-[500px] mb-9 mx-auto xl:mx-0 py-3 border-y-2 xl:border-y-0 xl:border-l-4 border-ink xl:py-0 xl:pl-4 text-lg font-medium text-foreground">
              I’m a developer who loves turning ideas into reliable, user-friendly web products.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              {CV_URL ? (
                <Button asChild size="lg" className={cvButtonStyles}>
                  <a href={CV_URL} download>
                    {cvContent}
                  </a>
                </Button>
              ) : (
                <Button size="lg" className={cvButtonStyles}>
                  {cvContent}
                </Button>
              )}

              <div className="mb-8 xl:mb-0">
                <Socials 
                containerStyles="flex gap-4"
                iconStyles="w-11 h-11 border-2 border-ink bg-white text-black flex justify-center items-center text-lg shadow-[3px_3px_0_0_var(--sh)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--sh)]"
                />
              </div>
            </div>
          </div>

          {/* photo */}
              <div className="order-1 xl:order-none mb-8 xl:mb-0">
                <Photo />
              </div>
        </div>
        <Stats />
      </div>
      
    </section>
  );
};

export default Home;