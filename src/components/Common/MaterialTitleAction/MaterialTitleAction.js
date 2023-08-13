import { Link } from "react-router-dom";
import Button from "../Button/Primary/Button";

import './styles.scss'

export default function MaterialTitleAction({ title, action = { label: '', path: null, onClick: () => { } } }) {
    return (
        <div className=" material-title-action">
            <div className="container">
                <div>
                    <h2 className="heading-h2">{title} </h2>
                    {action.path ?
                        (
                            <Link to={action.path}>
                                <Button label={action.label} />
                            </Link>
                        ) :
                        (
                            <Button label={action.label} onClick={action.onClick} />
                        )
                    }
                </div>
            </div>
        </div>
    )

}