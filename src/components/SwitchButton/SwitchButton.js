import './SwitchButton.css';

function SwitchButton(props) {
    const { text, mobileMode } = props;
    return (
        <div className={"switch-container " + (mobileMode ? "switch-container_mobile" : "switch-container_desktop")}>
            <label className="switch-container__switch-item">
                <input className="switch-container__checkbox" type="checkbox" id="switch-checkbox" />
                <span className="switch-container__slider"></span>
            </label>
            {text ? <span className="switch-container__caption">{text}</span> : ""}
        </div>
    )
}

export default SwitchButton;
