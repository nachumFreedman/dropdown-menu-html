import Dropdown from "./Dropdown";
import dropdownItems from "./dropdownItems";

function DropdownController() {
    return (
        <Dropdown dropdownItems={dropdownItems} />
    );
}

export default DropdownController;
