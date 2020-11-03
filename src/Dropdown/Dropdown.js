import "./Dropdown.css";

function Dropdown(props) {
    return (
        <select className="dropdown-select-container" name="Select option" role="Dropdown">
            <option value="" selected hidden>Select option</option>
            {
                props.dropdownItems.map((item, index) =>
                    <option key={item + index}>{item}</option>
                )
            }
        </select>
    );
}

export default Dropdown;