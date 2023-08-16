import AnimatedItems from "../Motion/AnimatedItems";
import './styles.scss'

export default function DetailsSection({ uid, heading, paragraph, items }) {
    const Item = (item) => {
        return (
            <div className="item-inner">
                <div className="bullet"/>
                <span className='small-capital-heading'>{item}</span>
            </div>
        )
    }
    return (
        <div className="details-section" id={uid}>
            <h2 className="heading">{heading}</h2>
            <p className='paragraph'>{paragraph}</p>
            <AnimatedItems className="items" animate={true} data={items} child={Item} />
        </div>
    )
}