import AnimatedItems from "../Motion/AnimatedItems";
import './styles.scss'

export default function DetailsSection({ heading, paragraph, items }) {
    const Item = (item) => {
        return (
            <span className='small-capital-heading'>{item}</span>
        )
    }
    return (
        <div className="details-section">
            <h2 className="heading">{heading}</h2>
            <p className='paragraph'>{paragraph}</p>
            <AnimatedItems className="items" animate={true} data={items} child={Item} />
        </div>
    )
}