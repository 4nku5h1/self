import { ParallaxLayer } from "@react-spring/parallax";
import About from "./About";

export default function Footer({pageOffset}) {
    return (
        <>
            <ParallaxLayer offset={pageOffset} speed={1}>
                <About />
            </ParallaxLayer>
        </>
    )
}