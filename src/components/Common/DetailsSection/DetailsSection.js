import AnimatedItems from "../Motion/AnimatedItems";
import './styles.scss'

export default function DetailsSection({ paragraph, items }) {
    const Item = (item) => {
        return (
            <span className='small-capital-heading'>{item}</span>
        )
    }
    return (
        <div className="details-section">
            <p className='paragraph'>{paragraph}</p>
            <AnimatedItems className="items" animate={true} data={items} child={Item} />
        </div>
    )
}