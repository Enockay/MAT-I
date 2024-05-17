import AdmitStudent from './AdmitStudent';
import PayFees from './PayFess';
import ViewBalances from './ViewBalances';
import ShowStream from './ShowStream';
import AddStudent from './AddStudent';
import FilterStudent from './FilterStudent';
import SchoolAggregate from './SchoolAggregate';
import DeleteStudent from './DeleteStudents ';

const Body = ({selectedItem}) => {
    switch (selectedItem) {
        case 'admit-student':
            return <AdmitStudent />;
        case 'pay-fees':
            return <PayFees />;
        case 'view-balances':
            return <ViewBalances />;
        case 'show-stream':
            return <ShowStream />;
        case 'add-student':
            return <AddStudent />;
        case 'filter-student':
            return <FilterStudent />;
        case 'school-aggregate':
            return <SchoolAggregate />;
        case 'delete-students':
            return <DeleteStudent />;
        default:
            return <SchoolAggregate/>;
    }
}

export default Body