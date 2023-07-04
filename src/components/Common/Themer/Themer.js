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
            document.documentElement.style.setProperty('--themer-background', pageConfig[id].backgroundColor);
            document.documentElement.style.setProperty('--themer-heading', pageConfig[id].headingColor);
            document.documentElement.style.setProperty('--themer-content', pageConfig[id].contentColor);
            document.documentElement.style.setProperty('--themer-button-border', pageConfig[id].borderColor);
            document.documentElement.style.setProperty('--themer-button', pageConfig[id].buttonColor);
            document.documentElement.style.setProperty('--themer-floating-nav', pageConfig[id].floatingNavColor);
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