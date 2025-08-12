export const ProjectList = (props) => {
    let {projectsList, state} = props;
    const isHidden = category => {
        if (state.selected === "All") {
            return false;
        } 
        if (category === state.selected) {
            return false;
        }
        return true;
    }
    return (
        <div className="cards">
            {projectsList.map((child) => (
                <div className="card" hidden={isHidden(child.category)}>
                    <img src={child.img}/>
                </div>
            ))}
        </div>
    )
}