import PropTypes from 'prop-types';
import css from './TransactionsHistjry.module.css';
const TransactionsHistory = ({ transactions }) => {
  return (
    <table className={css.transaction_history}>
      <thead className="tableColumnTitle">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="tableTransactionHistory">
        {transactions.map((event) => (
          <tr key={event.id}>
            <td>{event.type}</td>
            <td>{event.amount}</td>
            <td>{event.currency}</td>
          </tr>
        ))}
    
      </tbody>
    </table>
  )
};

TransactionsHistory.propTypes = {
  event: PropTypes.arrayOf(
    PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,

    }
  ))
    
};
export default TransactionsHistory;