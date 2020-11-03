import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Messages, ChatInput, Status, Sidebar } from "containers";
import { connect } from "react-redux";

import "./Home.scss";

import { dialogsActions } from "redux/actions";

const Home = (props) => {
    const { setCurrentDialogId } = props;
    useEffect(() => {
        const {
            location: { pathname },
        } = props;
        const dialogId = pathname.split("/").pop();
        setCurrentDialogId(dialogId);
    }, [props.location.pathname]);

    return (
        <section className="home">
            <div className="chat">
                <Sidebar />
                <div className="chat__dialog">
                    <Status />
                    <div className="chat__dialog-messages">
                        <Messages />
                    </div>
                    <div className="chat__dialog-input">
                        <ChatInput />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withRouter(connect(({ dialogs }) => dialogs, dialogsActions)(Home));
