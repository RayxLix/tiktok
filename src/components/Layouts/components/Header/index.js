import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Header(props) {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                {/* logo */}
                <div className={cx("logo")}>
                    <img src={images.logo.default} alt="TikTok " />
                </div>
                {/* input search */}
                <div className={cx("search")}>
                    <input
                        spellCheck={false}
                        placeholder="Tìm kiếm tài khoản và video"
                    ></input>
                    <button className={cx("clear-btn")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* <FontAwesomeIcon className={cx("loading-icon")} icon={faSpinner} /> */}
                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                {/* action */}
                <div className={cx("action")}>login</div>
            </div>
        </header>
    );
}

export default Header;
