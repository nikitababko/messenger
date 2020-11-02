import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";
import { UploadField } from "@navjobs/upload";
import { Picker } from "emoji-mart";

import { useOutside } from "utils/helpers";

import "./ChatInput.scss";

const { TextArea } = Input;

const ChatInput = (props) => {
    const [value, setValue] = useState("");
    const [emojiPickerVisible, setShowEmojiPicker] = useState(false);
    const { onSendMessage, currentDialogId } = props;

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    };

    const handleSendMessage = (e) => {
        if (e.keyCode === 13) {
            onSendMessage(value, currentDialogId);
            setValue("");
        }
    };

    const addEmoji = ({ colons }) => {
        setValue((value + " " + colons).trim());
    };

    const handleOutsideClick = (el, e) => {
        if (el && !el.contains(e.target)) {
            setShowEmojiPicker(false);
        }
    };

    useEffect(() => {
        const el = document.querySelector(".chat-input__smile-btn");
        document.addEventListener("click", handleOutsideClick.bind(this, el));
        return () => {
            document.removeEventListener("click", handleOutsideClick.bind(this, el));
        };
    }, []);

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <div className="chat-input__emoji-picker">
                    {emojiPickerVisible && (
                        <Picker
                            onSelect={(emojiTag) => addEmoji(emojiTag)}
                            set="apple"
                        />
                    )}
                </div>
                <Button
                    onClick={toggleEmojiPicker}
                    type="link"
                    shape="circle"
                    icon="smile"
                />
            </div>
            <TextArea
                onChange={(e) => setValue(e.target.value)}
                onKeyUp={handleSendMessage}
                size="large"
                placeholder="Введите текст сообщения…"
                value={value}
                autosize={{ minRows: 1, maxRows: 6 }}
            />
            <div className="chat-input__actions">
                <UploadField
                    onFiles={(files) => console.log(files)}
                    containerProps={{
                        className: "chat-input__actions-upload-btn",
                    }}
                    uploadProps={{
                        accept: ".rar,.tar,.doc,.docx,.jpg,.jpeg,.png,.gif,.bmp",
                        multiple: "multiple",
                    }}
                >
                    <Button type="link" shape="circle" icon="upload" />
                </UploadField>
                {value ? (
                    <Button type="link" shape="circle" icon="check-circle" />
                ) : (
                    <Button type="link" shape="circle" icon="audio" />
                )}
            </div>
        </div>
    );
};

ChatInput.propTypes = {
    className: PropTypes.string,
};

export default ChatInput;
