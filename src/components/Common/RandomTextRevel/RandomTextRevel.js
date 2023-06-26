import { RandomReveal } from "react-random-reveal";
export default function RandomTextRevel({text}) {
    return (
        <RandomReveal
            isPlaying
            duration={4}
            revealDuration={1.6}
            characters={text}
            onComplete={() => ({ shouldRepeat: true, delay: 3 })}
        />
    );
}