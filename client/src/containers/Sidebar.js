import React, { useState } from "react";
import { connect } from "react-redux";
import { userApi, dialogsApi } from "utils/api";

import { Sidebar } from "components";

const SidebarContainer = ({ user, onChangeTheme, selectedLang, setSelectedLang }) => {
    const [visible, setVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messageText, setMessagaText] = useState("");
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(false);

    const onClose = () => {
        setVisible(false);
    };

    const onShow = () => {
        setVisible(true);
    };

    const onSearch = (value) => {
        setIsLoading(true);
        userApi
            .findUsers(value)
            .then(({ data }) => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    };

    const logOut = () => {
        delete window.localStorage.token;
        window.location.reload();
    };

    const onAddDialog = () => {
        dialogsApi
            .create({
                partner: selectedUserId,
                text: messageText,
            })
            .then(onClose)
            .catch(() => {
                setIsLoading(false);
            });
    };

    const handleChangeInput = (value) => {
        setInputValue(value);
    };

    const onChangeTextArea = (e) => {
        setMessagaText(e.target.value);
    };

    const onSelectUser = (userId) => {
        setSelectedUserId(userId);
    };

    return (
        <Sidebar
            user={user}
            inputValue={inputValue}
            visible={visible}
            isLoading={isLoading}
            onClose={onClose}
            onShow={onShow}
            onSearch={onSearch}
            onChangeInput={handleChangeInput}
            onSelectUser={onSelectUser}
            logOut={logOut}
            onModalOk={onAddDialog}
            onChangeTextArea={onChangeTextArea}
            messageText={messageText}
            selectedUserId={selectedUserId}
            users={users}
            onChangeTheme={onChangeTheme}
            selectedLang={selectedLang}
            setSelectedLang={setSelectedLang}
        />
    );
};

export default connect(({ user }) => ({ user: user.data }))(SidebarContainer);
