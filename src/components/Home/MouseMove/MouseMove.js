import {
    MouseParallaxChild,
    MouseParallaxContainer
} from "react-parallax-mouse";
export default function MouseMove({ child }) {
    return (
        <MouseParallaxContainer
            className="parallax"
            containerStyles={{
                width: "100%",
                height: "100%",
                display: "grid"
            }}
            resetOnLeave
        >
            <MouseParallaxChild
                factorX={0.02}
                factorY={0.02}
                updateStyles={{
                    display: "flex",
                    marginBottom: "50px",
                    justifyContent: "center",
                    width: "auto"
                }}
            >
                <h2>sdagsdg</h2>
            </MouseParallaxChild>
        </MouseParallaxContainer>
    )
}