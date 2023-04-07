import { StyleOption, StyleSelect } from "./StyleSelect";

const SelectOption = (props) => {
    return (
        <StyleSelect onChange={props.onChange}>
            {props.options.map((e, index) => (
                <StyleOption key={index} value={e.value}>
                    {e}
                </StyleOption>
            ))}
        </StyleSelect>
    );
};

export default SelectOption;
