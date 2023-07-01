import { useEffect } from "react";
import { observeElementById } from "../helper";
import pageConfig from "./config/pageConfig";
export default function Themer({ changePageStateFunction }) {
    useEffect(() => {
        setTimeout(() => {
            startThemer()
        }, 500);
    }, [])

    function startThemer() {
        function changeColor(id) {
            console.log(id)
            changePageStateFunction(pageConfig[id])
            document.documentElement.style.setProperty('--color-background', pageConfig[id].backgroundColor);
            document.documentElement.style.setProperty('--font-color-heading', pageConfig[id].headingColor);
            document.documentElement.style.setProperty('--font-color-content', pageConfig[id].contentColor);
            document.documentElement.style.setProperty('--button-border', pageConfig[id].borderColor);
            document.documentElement.style.setProperty('--button-color', pageConfig[id].buttonColor);
        }
        Object.keys(pageConfig).map((id) => {
            try {
                observeElementById(id, changeColor);
            } catch (error) {
                console.log("unable to watch id :", id);
            }
            return id;
        })
    }
}