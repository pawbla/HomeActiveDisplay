import React, {useState} from 'react';
import './styles.scss';

export function DropDown(props) {

    
    const [selectedItem, setSelectedItem] = useState("select");

    const selectItem = (event) => {
        setSelectedItem(event.target.value);
        props.onSelectItem(event.target.value)
    }

    return(
        <select className="dropdownList" onChange={selectItem} value={selectedItem}>
            <Option item="select" />
            {
                props.values.map((item, index) => <Option key={index} item={item} />)
            }
        </select>
    );
}

function Option(props) {
    return (
        <option value={props.item}>{props.item}</option>
    )
}