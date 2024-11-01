import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid 2xl:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center 2xl:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className={"text-7xl"}>
            <span className="inline bg-gradient-to-r from-[#84c2bd]  to-[#329B92] text-transparent bg-clip-text">
              Interv
            </span>
          </h1>
          <h2 className="inline">
            The ultimate platform for video and coding interviews
          </h2>
        </main>

        <p className="text-xl text-muted-foreground 2xl:w-10/12 mx-auto lg:mx-0">
          Take your interview process to the next level.
          <br/>
          Elevate candidate experience and streamline decision-making.
        </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
              <a
                  rel="noreferrer noopener"
                  href={"#pricing"}
              >
                  <Button className="w-full md:w-1/3">Pricing</Button>
              </a>
          </div>
      </div>

        {/* Hero cards sections */}
        <div className="z-10">
            <HeroCards/>
        </div>

        {/* Shadow effect */}
        <div className="shadow"></div>
    </section>
);
};
