
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import ShimmerButton from "./magicui/shimmer-button";


export default function TextCard() {
    return (
        <Card className="max-w-prose bg-black">
            <CardBody className="text-4xl  lg:text-6xl font-extralight">
                <p>Pave your way to Alpha Gains and make the most of your{" "}
                    <span className="font-playfair italic">investments.</span></p>
            </CardBody>
            <CardFooter>
                <ShimmerButton className="shadow-2xl rounded-none">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Create an Account
                    </span>
                </ShimmerButton>
            </CardFooter>
        </Card>
    )
}
