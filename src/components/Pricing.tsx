import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import {cn} from "@/lib/utils.ts";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Standard",
    popular: 0,
    price: 9.99,
    description:
      "Best for small teams",
    buttonText: "Contact Us",
    benefitList: [
      "3 workspaces",
      "30 stock questions",
      "100 applicants",
      "30 minutes recording time limit",
      "Community support",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 29.99,
    description:
      "Best for small companies",
    buttonText: "Contact Us",
    benefitList: [
      "10 workspaces",
      "100 stock questions",
      "300 applicants",
      "1 hour recording time limit",
      "Priority support",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 0,
    description:
      "Best for large companies",
    buttonText: "Contact Us",
    benefitList: [
      "Unlimited workspaces",
      "Unlimited questions",
      "Unlimited applicants",
      "Unlimited recording time",
      "Priority support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Choose plan that works for you.
      </h3>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={cn("w-full md:w-[300px] lg:w-[500px]",
                pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            )}
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                {pricing.title === "Enterprise" ?
                    <span className="text-3xl font-bold">Please Contact Us</span>
                    :
                    <>
                      <span className="text-3xl font-bold">${pricing.price}</span>
                      <span className="text-muted-foreground"> /month</span>
                    </>
                }
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
