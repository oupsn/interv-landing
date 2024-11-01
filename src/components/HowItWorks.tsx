import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {Eye, Mail, Settings2, Speech} from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Settings2 size={"60px"} color={"#329B92"} />,
    title: "Setup",
    description:
      "Create a dedicated workspace for your batch of applicants. This is where you’ll organize your interviews and manage all related activities.",
  },
  {
    icon: <Mail size={"60px"} color={"#329B92"} />,
    title: "Invite",
    description:
      "Invite your applicants via email. This allows them to access the platform and working on their interviews.",
  },
  {
    icon: <Speech size={"60px"} color={"#329B92"} />,
    title: "Interview",
    description:
      "Conduct video and coding interviews with your applicants. Utilize the platform’s tools to evaluate their skills and performance.",
  },
  {
    icon: <Eye size={"60px"} color={"#329B92"} />,
    title: "Review",
    description:
      "After the interviews, review the results and feedback. Analyze performance metrics to make informed decisions about your candidates.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Streamline your interview process with Interv, from beginning to end.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
