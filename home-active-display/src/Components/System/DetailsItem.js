export default function DetailsItem(props) {
    return props.data !== "" ? <div className="m_data">{props.label}: {props.data} {props.unit}</div> : null;
}