import { render, screen } from '@testing-library/react';
import Dropdown from '../../Dropdown';
import dropdownItems from "../../Dropdown/dropdownItems";

test('renders dropdown element', () => {
    render(<Dropdown />);
    const linkElement = screen.getByRole("Dropdown");
    expect(linkElement).toBeInTheDocument();
});

test('shows correct amount of items', () => {
    render(<Dropdown />);
    const linkElement = screen.getByRole("Dropdown");
    expect(linkElement.length).toEqual(dropdownItems.length)
});

test('dropdown items should render the right value', () => {
    render(<Dropdown />);
    const linkElement = screen.getByRole("Dropdown");
    [linkElement.textContent].map((item, index) => {
        expect(item.innerHTML).toEqual(dropdownItems[index - 1]);
    })
});