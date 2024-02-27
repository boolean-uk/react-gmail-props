

function HideRead(props) {
    return (
        <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={props.hideRead}
              onChange={e => props.setHideRead(e.target.checked)}
            />
          </li>
    )
}

export default HideRead