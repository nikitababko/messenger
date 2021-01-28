import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import classNames from "classnames";
import { Messages, ChatInput, Status, Sidebar } from "containers";

import { dialogsActions } from "redux/actions";

import "./Home.scss";

const Home = (props) => {
    const { setCurrentDialogId, user } = props;
    useEffect(() => {
        const { pathname } = props.location;
        const dialogId = pathname.split("/").pop();
        setCurrentDialogId(dialogId);
    }, [props.location.pathname]);

    // Change theme
    const [themeApp, setThemeApp] = useState(false);
    const onChangeTheme = () => {
        setThemeApp(!themeApp);
    };

    // Change lang
    const [selectedLang, setSelectedLang] = useState("US");

    return (
        <section className={classNames("home", { "home--dark": themeApp })}>
            <div className="chat">
                <Sidebar
                    onChangeTheme={onChangeTheme}
                    selectedLang={selectedLang}
                    setSelectedLang={setSelectedLang}
                />
                {user && (
                    <div className="chat__dialog">
                        <Status selectedLang={selectedLang} />
                        <Messages selectedLang={selectedLang} />
                        <div className="chat__dialog-input">
                            <ChatInput selectedLang={selectedLang} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default withRouter(
    connect(({ user }) => ({ user: user.data }), dialogsActions)(Home)
);
