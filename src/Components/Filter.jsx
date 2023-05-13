import FilterStyles from "../Styles/FilterStyles";

export default function Filter(props) {
  //change state
  const changeState = (e) => {
    props.change(e.target.value);
  };

  const classes = FilterStyles();

  return (
    <div className={classes.Filter}>
      <form>
        <select name="select" onChange={changeState} className="desk ">
          <option value="All" className={classes.filterByDesk} defaultValue>
            Filter by status
          </option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Draft">Draft</option>
        </select>

        {/* //Mobile */}
        <select onChange={changeState} className="mob">
          <option value="All" className={classes.filterByMob} defaultValue>
            Filter
          </option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Draft">Draft</option>
        </select>
      </form>
    </div>
  );
}
