import React from "react";
import closeIcon from "./close-icon.png";
import "./Notifications.css"
import { getLatestNotification } from './utils'

export default function Notifications() {
    function hundleClick() {
        console.log("Close button has been clicked")
    }
    return (
        <div className="Notifications">
            <div>
                <p>Here is the list of notifications</p>
                <ul>
                    <li data-priority="default">New course available</li>
                    <li data-priority="urgent">New resume available</li>
                    <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
                </ul>
            </div>
            <button onClick={hundleClick} style={{ background: "none", border: "none", fontSize: "18px", cursor: "pointer" }}>
                <img src={closeIcon} width="16px"></img>
            </button>
        </div>
    )

}