import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-center">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                About{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Interv
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Interv is a next-gen platform for video and coding interviews, designed to simplify the recruitment process. With tools for coding, video recording, and applicants managing, Interv helps hiring teams quickly assess both technical and soft skills, ensuring better hiring decisions. Our intuitive platform saves time, reduces bias, and enhances candidate experience, making it the ideal choice for companies of all sizes.
              </p>
            </div>

            {/*<Statistics />*/}
          </div>
        </div>
      </div>
    </section>
  );
};
