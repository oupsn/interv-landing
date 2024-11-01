import {Button, buttonVariants} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Facebook, Github, Instagram, Linkedin} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";

interface TeamProps {
  imageUrl: string;
  name: string;
  shortName: string;
  position: string;
  caption: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "",
    name: "Phawit Monchaising",
    shortName: "PM",
    position: "Fullstack Developer",
    caption: "Loves writing code so concise, it’s practically poetry. Believes in clean code, clean desks, and clean coffee cups… but only after the fifth refill.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/phawit-monchaising/",
      },
      {
        name: "Github",
        url: "https://github.com/phawitpp",
      },
    ],
  },
  {
    imageUrl: "",
    name: "Phatdanai Shinpanjapol",
    shortName: "PS",
    position: "Fullstack Developer",
    caption: "With a sixth sense for finding bugs, this developer can stare at a screen until bugs confess themselves. Side effects may include an intense relationship with a coffee mug.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/ps-shin/",
      },
      {
        name: "Github",
        url: "https://github.com/PS-safe",
      },
    ],
  },
  {
    imageUrl: "",
    name: "Pasinun Wittayawinit",
    shortName: "PW",
    position: "Fullstack Developer",
    caption: "Always planning five projects ahead – and possibly the next snack. When not building rock-solid apps, this one’s probably reorganizing the desk… again.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/oupsn/",
      },

      {
        name: "Github",
        url: "https://github.com/oupsn",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;

      case "Github":
        return <Github size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">

      </p>

      <div className="flex gap-10 gap-y-10 justify-center flex-wrap">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks, shortName, caption }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center w-[400px]"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <Avatar className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover">
                  <AvatarImage src={imageUrl} alt="Avatar" />
                  <AvatarFallback className="bg-transparent">
                    <Button
                        variant="outline"
                        className="relative w-24 h-24 rounded-full text-xl"
                    >
                      {shortName}
                    </Button>

                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                {caption}
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
