import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";
import { UploadField } from "@navjobs/upload";
import { Picker } from "emoji-mart";

import { UploadFiles } from "components";

import "./ChatInput.scss";

const { TextArea } = Input;

const ChatInput = (props) => {
    const {
        emojiPickerVisible,
        value,
        addEmoji,
        setValue,
        handleSendMessage,
        toggleEmojiPicker,
        sendMessage,
        attachments,
        onSelectFiles,
    } = props;

    return (
        <Fragment>
            <div className="chat-input">
                <div>
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
                            onFiles={onSelectFiles}
                            containerProps={{
                                className: "chat-input__actions-upload-btn",
                            }}
                            uploadProps={{
                                accept:
                                    ".rar,.tar,.doc,.docx,.jpg,.jpeg,.png,.gif,.bmp",
                                multiple: "multiple",
                            }}
                        >
                            <Button type="link" shape="circle" icon="upload" />
                        </UploadField>
                        {value ? (
                            <Button
                                onClick={sendMessage}
                                type="link"
                                shape="circle"
                                icon="check-circle"
                            />
                        ) : (
                            <Button type="link" shape="circle" icon="audio" />
                        )}
                    </div>
                </div>
                <div className="chat-input__attachments">
                    <UploadFiles attachments={attachments} />
                </div>
            </div>
        </Fragment>
    );
};

ChatInput.propTypes = {
    className: PropTypes.string,
};

export default ChatInput;
