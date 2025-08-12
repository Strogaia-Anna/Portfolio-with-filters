import { Children } from "react";

export const Toolbar = (props) => {
    let {filters, state, onSelectFilter} = props;
    const handleClick = evt => {
        onSelectFilter(evt.currentTarget.value);
    }
    return (
        <div className="buttonDiv">
            {Children.map(filters, (child) => (
                <input type="button" className={`btn ${state.selected === child ? 'selected' : ''}`} value={child} onClick={handleClick}/>
            ))}
        </div>
    )
}
