import { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { observeElementById } from "../helper";
import pageConfig, { homeConfig, servicesConfig } from "./config/pageConfig";
import './styles.scss';
export default function Themer({ changePageStateFunction }) {
    const location = useLocation();
    useEffect(() => {
        switch (location.pathname) {
            case '/': startThemer(homeConfig)
            case '/services': startThemer(servicesConfig)
            case '/services/product-editing': startThemer(servicesConfig);
        }
    }, [location.pathname])

    function startThemer(currentConfig) {
        function changeColor(id) {
            console.log(id)
            changePageStateFunction(currentConfig[id])
            document.documentElement.style.setProperty('--themer-background', currentConfig[id].backgroundColor);
            document.documentElement.style.setProperty('--themer-heading', currentConfig[id].headingColor);
            document.documentElement.style.setProperty('--themer-content', currentConfig[id].contentColor);
            document.documentElement.style.setProperty('--themer-button-border', currentConfig[id].borderColor);
            document.documentElement.style.setProperty('--themer-button', currentConfig[id].buttonColor);
            document.documentElement.style.setProperty('--themer-accent', currentConfig[id].accentColor);
            document.documentElement.style.setProperty('--themer-foreground', currentConfig[id].foregroundColor);
        }
        Object.keys(currentConfig).map((id) => {
            try {
                observeElementById(id, changeColor);
            } catch (error) {
                console.log("unable to watch id :", id);
            }
            return id;
        })
    }
}