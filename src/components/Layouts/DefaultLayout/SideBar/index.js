import React from "react";
import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function SideBar(props) {
    return (
        <aside className={cx("wrapper")}>
            <h4>Sidebar</h4>
        </aside>
    );
}

export default SideBar;
