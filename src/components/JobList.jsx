import { useDispatch, useSelector } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectVisiblePosition } from "store/positions/position-selectors";
import { addFilter } from "../store/filter/filter-actions";
import { selectFilters } from "../store/filter/filter-selectors";
const JobList = () => {
  const currentFitlers = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePosition(state, currentFitlers)
  );
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
