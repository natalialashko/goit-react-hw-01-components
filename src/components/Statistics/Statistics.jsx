import PropTypes from 'prop-types';
import css from './Statistics.module.css'
const Statistics = ({ title = '', statArray }) => {
    
    return (
        <section className={css.statistics}>
            {title &&
                <h2 className={css.title}>{title}</h2>}
            <ul className={css.stat_list}>
                {statArray.map((stat) => (
                    <li className={css.item} key={stat.id}>
                        <span className={css.label}>{stat.label} </span>
                        <span className={css.percentage}>{stat.percentage} %</span>
                    </li>
                ))
                }
    
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,

};
Statistics.propTypes = {
    stat: PropTypes.arrayOf(
        PropTypes.exact({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }))
}
export default Statistics;