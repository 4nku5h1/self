import {
    MouseParallaxChild,
    MouseParallaxContainer
} from "react-parallax-mouse";
export default function MouseMove() {
    return (
        <div>
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    background: "#01011A",
                    color: "#fff",
                    overflow: "hidden"
                }}
            >
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
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
                            factorX={0.04}
                            factorY={0.1}
                            factorZ={1.1}
                            updateStyles={{
                                background: "url(bcg1.png)",
                                backgroundPosition: "center",
                                backgroundSize: "contain",
                                transform: "scale(1)",
                                position: "absolute",
                                filter: "blur(2px) brightness(100%)",
                                backgroundRepeat: "no-repeat",
                                width: "100%",
                                height: "100%",
                                backfaceVisibility: "hidden"
                            }}
                        />
                        <MouseParallaxChild
                            factorX={0.02}
                            factorY={0.02}
                            updateStyles={{
                                display: "flex",
                                paddingTop: "20px",
                                justifyContent: "center",
                                width: "auto"
                            }}
                        >
                            <img height="35%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" alt="" />
                        </MouseParallaxChild>
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
                            <img height="40%" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Pencil_drawing_of_a_girl_in_ecstasy.jpg" alt="" />
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
                </div>
            </div>
        </div>
    )
}