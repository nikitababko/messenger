import React from "react";
import { Icon, Button, Modal, Select, Input, Form, Popover } from "antd";
import { Dialogs } from "containers";

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
}) => {
    const options = users.map((user) => <Option key={user._id}>{user.fullname}</Option>);

    return (
        <div className="chat__sidebar">
            <div className="chat__sidebar-header">
                <Popover
                    content={
                        <div>
                            <Button onClick={logOut}>Выйти</Button>
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
                    <span>Dialogs's list</span>
                </div>
                <Button onClick={onShow} type="link" shape="circle" icon="form" />
            </div>

            <div className="chat__sidebar-dialogs">
                <Dialogs userId={user && user._id} />
            </div>

            <Modal
                title="Create dialog"
                visible={visible}
                onCancel={onClose}
                footer={[
                    <Button key="back" onClick={onClose}>
                        Close
                    </Button>,
                    <Button
                        disabled={!messageText}
                        key="submit"
                        type="primary"
                        loading={isLoading}
                        onClick={onModalOk}
                    >
                        Create
                    </Button>,
                ]}
            >
                <Form className="add-dialog-form">
                    <Form.Item label="Enter username or email">
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
                            placeholder="Введите имя пользователя или почту"
                            showSearch
                        >
                            {options}
                        </Select>
                    </Form.Item>
                    {selectedUserId && (
                        <Form.Item label="Enter your message">
                            <TextArea
                                autosize={{ minRows: 3, maxRows: 10 }}
                                onChange={onChangeTextArea}
                                value={messageText}
                            />
                        </Form.Item>
                    )}
                </Form>
            </Modal>
        </div>
    );
};

Sidebar.defaultProps = {
    users: [],
};

export default Sidebar;
