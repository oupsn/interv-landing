import { Button } from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {coerce, z} from "zod";
import {Card, CardContent} from "@/components/ui/card.tsx";
import {toast} from "sonner";


const formSchema = z.object({
    firstname: z.string().min(2, {
        message: "Firstname must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
        message: "Lastname must be at least 2 characters.",
    }),
    email: z.string().email(),
    company: z.string().min(2, {
        message: "Company name must be at least 2 characters.",
    }),
    phone: coerce.string(),
    note: z.string()
})

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
      defaultValues: {
          firstname: "",
          lastname: "",
          email: "",
          company: "",
          phone: "",
          note: ""
      },

  })
    function onSubmit() {
        toast.success('Form submitted successfully', {description: "We'll get back to you soon!"})
        form.reset()
    }

    return (
        <section
            id="contact"
            className="container py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Ready{" "}
        </span>
                To Talk?
            </h2>
            <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
                Let's get started!
            </h3>
            <div className={"flex w-full justify-center"}>
                <Form {...form}>
                    <Card
                        className={"w-[600px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 pt-4"}
                    >
                        <CardContent>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className={"flex w-full gap-6"}>
                                    <FormField
                                        control={form.control}
                                        name="firstname"
                                        render={({field}) => (
                                            <FormItem className={"w-full"}>
                                                <FormLabel className={"text-lg"}>Firstname</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastname"
                                        render={({field}) => (
                                            <FormItem className={"w-full"}>
                                                <FormLabel className={"text-lg"}>Lastname</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={"text-lg"}>Email</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="company"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={"text-lg"}>Company Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={"text-lg"}>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="note"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={"text-lg"}>Note</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className={"w-full"}>Submit</Button>
                            </form>
                        </CardContent>
                    </Card>
                </Form>
            </div>
        </section>
    );
};
