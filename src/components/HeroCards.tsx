import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import c1 from "@/assets/c1.png"
import c2 from "@/assets/c2.png"

export const HeroCards = () => {
  return (
    <div className="hidden 2xl:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[30px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt="neil"
              src={c1}
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg -mt-2">Clamon Neil</CardTitle>
            <CardDescription className={"-mt-1"}>@clamon.neil</CardDescription>
          </div>
        </CardHeader>

        <CardContent>" Meow Meow Meow Meow Meow! " <br/> <span className={"opacity-50"}>(This interview platform is awesome!)</span></CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src={c2}
            alt="Leo"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Leo Miranda</CardTitle>
          <CardDescription className="font-normal text-primary">
            Talent Acquisition
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            " Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow " <br/> <span className={"opacity-50"}>(I really enjoy finding the right talent through a seamless interview experience.)</span>
          </p>
        </CardContent>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Premium
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$29</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>
            Best for small companies
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Contact us</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Unlimited workspaces", "Unlimited questions", "Priority support"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[30px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Efficient Hiring</CardTitle>
            <CardDescription className="text-md mt-2">
              Streamline your interview process and reduce time-to-hire with our intuitive tools designed for fast and effective.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
