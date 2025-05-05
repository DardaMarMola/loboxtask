import React, {useState} from "react";
import styles from "./Dropdown.module.scss";

interface Option {
    label: string;
    value: string;
    emoji: string;
}

const options: Option[] = [{label: "Education", value: "education", emoji: "🎓"}, {
    label: "Yeeeah, science!", value: "science", emoji: "🧪"
}, {label: "Art", value: "art", emoji: "🎨"}, {label: "Sport", value: "sport", emoji: "⚽"}, {
    label: "Games", value: "games", emoji: "🎮"
}, {label: "Health", value: "health", emoji: "🏥"},];

const Dropdown: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<Option | null>(options[1]);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (option: Option) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (<div className={styles.dropdownContainer}>
        <div className={styles.dropdownHeader} onClick={toggleDropdown}>
            <span>{selected ? `${selected.label}` : "Select an option"}</span>
            <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
        </div>
        {isOpen && (<ul className={styles.dropdownList}>
            {options.map((option) => (<li
                key={option.value}
                className={`${styles.dropdownItem} ${selected?.value === option.value ? styles.selected : ""}`}
                onClick={() => handleSelect(option)}>
                <span>{`${option.label} ${option.emoji}`}</span>
                {selected?.value === option.value && <span className={styles.check}>✔</span>}
            </li>))}
        </ul>)}
    </div>);
};

export default Dropdown;