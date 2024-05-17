import "./Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({onItemClick, collapsed }) => {
    return(
        <>
           <div className="sidebar">
                <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <ul>
                <li><a href="#admit-student" onClick={() => onItemClick('admit-student')}>Admit Student</a></li>
                <li><a href="#pay-fees" onClick={() => onItemClick('pay-fees')}>Pay Fees</a></li>
                <li><a href="#view-balances" onClick={() => onItemClick('view-balances')}>View Balances</a></li>
                <li><a href="#show-stream" onClick={() => onItemClick('show-stream')}>Show Stream</a></li>
                <li><a href="#add-student" onClick={() => onItemClick('add-student')}>Add Student</a></li>
                <li><a href="#filter-student" onClick={() => onItemClick('filter-student')}>Filter Student</a></li>
                <li><a href="#school-aggregate" onClick={() => onItemClick('school-aggregate')}>School Aggregate</a></li>
                <li><a href="#delete-students" onClick={() => onItemClick('delete-students')}>Delete Students</a></li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default Sidebar