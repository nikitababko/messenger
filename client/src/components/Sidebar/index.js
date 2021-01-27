import React from "react";
import ReactFlagsSelect from "react-flags-select";
import { Icon, Button, Modal, Select, Input, Form, Popover } from "antd";
import { Dialogs } from "containers";

import { ThemeToggler } from "../";

import "./Sidebar.scss";

const { Option } = Select;
const { TextArea } = Input;

const Sidebar = ({
    user,
    visible,
    inputValue,
    messageText,
    selectedUserId,
    isLoading,
    users,
    onShow,
    onClose,
    onSearch,
    onChangeInput,
    onSelectUser,
    onChangeTextArea,
    logOut,
    onModalOk,
    onChangeTheme,
    selectedLang,
    setSelectedLang,
}) => {
    const options = users.map((user) => <Option key={user._id}>{user.fullname}</Option>);

    return (
        <div className="chat__sidebar">
            <div className="chat__sidebar-header">
                <Popover
                    content={
                        <div>
                            <Button onClick={logOut}>
                                {selectedLang === "US" ? "Log out" : "Выйти"}
                            </Button>
                        </div>
                    }
                    trigger="click"
                >
                    <div>
                        <Button type="link" shape="circle" icon="logout" />
                    </div>
                </Popover>
                <div>
                    <Icon type="team" />
                    <span>
                        {selectedLang === "US" ? "Dialogs's list" : "Список диалогов"}
                    </span>
                </div>
                <Button onClick={onShow} type="link" shape="circle" icon="form" />
            </div>

            <div className="chat__sidebar-dialogs">
                <Dialogs
                    selectedLang={selectedLang}
                    setSelectedLang={setSelectedLang}
                    userId={user && user._id}
                />
            </div>

            <Modal
                title={selectedLang === "US" ? "Create dialog" : "Создать диалог"}
                visible={visible}
                onCancel={onClose}
                footer={[
                    <Button key="back" onClick={onClose}>
                        {selectedLang === "US" ? "Close" : "Закрыть"}
                    </Button>,
                    <Button
                        disabled={!messageText}
                        key="submit"
                        type="primary"
                        loading={isLoading}
                        onClick={onModalOk}
                    >
                        {selectedLang === "US" ? "Create" : "Создать"}
                    </Button>,
                ]}
            >
                <Form className="add-dialog-form">
                    <Form.Item
                        label={
                            selectedLang === "US"
                                ? "Enter username or email"
                                : "Введите имя пользователя или почту"
                        }
                    >
                        <Select
                            value={inputValue}
                            onSearch={onSearch}
                            onChange={onChangeInput}
                            onSelect={onSelectUser}
                            notFoundContent={null}
                            style={{ width: "100%" }}
                            defaultActiveFirstOption={false}
                            showArrow={false}
                            filterOption={false}
                            placeholder={
                                selectedLang === "US"
                                    ? "Enter username or email"
                                    : "Введите имя пользователя или почту"
                            }
                            showSearch
                        >
                            {options}
                        </Select>
                    </Form.Item>
                    {selectedUserId && (
                        <Form.Item
                            label={
                                selectedLang === "US"
                                    ? "Enter your message"
                                    : "Введите ваше сообщение"
                            }
                        >
                            <TextArea
                                autosize={{ minRows: 3, maxRows: 10 }}
                                onChange={onChangeTextArea}
                                value={messageText}
                            />
                        </Form.Item>
                    )}
                </Form>
            </Modal>
            <div className="chat__sidebar-footer">
                <ReactFlagsSelect
                    selected={selectedLang}
                    onSelect={(code) => setSelectedLang(code)}
                    placeholder="Select Language"
                    fullWidth={false}
                    countries={["US", "RU"]}
                />
                <ThemeToggler onChangeTheme={onChangeTheme} />
            </div>
        </div>
    );
};

Sidebar.defaultProps = {
    users: [],
};

export default Sidebar;
