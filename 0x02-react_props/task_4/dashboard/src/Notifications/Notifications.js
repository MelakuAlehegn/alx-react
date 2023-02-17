import React from "react";
import closeIcon from "../assets/close-icon.png";
import "./Notifications.css"
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'
import propTypes from "prop-types"

export default function Notifications() {
    function hundleClick() {
        console.log("Close button has been clicked")
    }
    return (
        <>
            <div className="menuItem">
                <p>Your notifications</p>
            </div>
            {displayDrawer && <div className="Notifications">

                <div>
                    <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationItem type="default" value="New course available" />
                        <NotificationItem type="urgent" value="New resume available" />
                        <NotificationItem type="urgent" html={getLatestNotification()} />
                    </ul>
                </div>
                <button onClick={hundleClick} style={{ background: "none", border: "none", fontSize: "18px", cursor: "pointer" }}>
                    <img src={closeIcon} width="16px"></img>
                </button>
            </div>}
        </>
    )

}
Notifications.propTypes = {
    displayDrawer: propTypes.bool
}
Notifications.defaultProps = {
    displayDrawer: false
}
