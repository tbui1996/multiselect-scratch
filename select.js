
// Your task is to implement multiselect from scratch (styling is not required)
// While closed it should show selected items separated by coma,
// on click it should open a list where you can check/uncheck items

const data = [
{ label: 'd', value: 'd' }, 
{ label: 'a', value: 'a' }, 
{ label: 'b', value: 'b' },
{ label: 'c', value: 'c' }
]

const MultiSelectDropdown = ({ options, selected, toggleOption }) => {
	
	return (
        <div >
            <ul >
                {options.map(option => {
                    const isSelected = selected.includes(option.label);

                    return (
                        <li  onClick={() => toggleOption({ label: option.label })}>
                            <input type="checkbox" checked={isSelected}></input>
                            <span>{option.value}</span>
                        </li>
                    )
                })}
            </ul>
            <div>Selected values: {selected.join(',')}</div>
        </div>
    )
}

const Component = () => {
const [selected, setSelected] = React.useState([])

    const toggleOption = ({ label }) => {
        setSelected(prevSelected => {
            const newArray = [...prevSelected]
            if (newArray.includes(label)) {
                return newArray.filter(item => item != label)
            } else {
                newArray.push(label)
                return newArray;
            }
        })
    }

	return (
  	<MultiSelectDropdown options={data} selected={selected} toggleOption={toggleOption} />
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Component />);
