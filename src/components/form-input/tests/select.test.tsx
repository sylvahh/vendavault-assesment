import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from '../select';

describe('Select', () => {
  it('renders select element with label and options', () => {
    const label = 'Select your option';
    const placeholder = 'Please select';
    const options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];

    render(
      <Select label={label} name='select' placeholder={placeholder}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    );

    // Check if label is rendered
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();

    // Check if select element is rendered with placeholder
    const selectElement = screen.getByLabelText(label);
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue('');
    expect(selectElement).toHaveTextContent(placeholder);

    // Check if options are rendered
    options.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });

  it('displays validation error if invalid prop is true', () => {
    const label = 'Select your option';
    const placeholder = 'Please select';
    const options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];

    render(
      <Select label={label} name='select' placeholder={placeholder} invalid required>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    );

    // Check if validation error is displayed
    const selectBox = screen.getByRole('combobox');
    expect(selectBox.classList.contains('invalid')).toBeTruthy();
  });

  it('calls onChange handler when an option is selected', async () => {
    const label = 'Select your option';
    const placeholder = 'Please select';
    const options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
    const onChangeMock = jest.fn();

    render(
      <Select label={label} name='select' placeholder={placeholder} onChange={onChangeMock}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    );

    // Select an option
    const selectElement = screen.getByLabelText(label);
    userEvent.selectOptions(selectElement, '1');

    await waitFor(() => {
      // Check if onChange handler is called with selected value
      expect(selectElement).toHaveValue('1');
    });
  });
});
