import React from "react";
import orderBy from "lodash/orderBy";
import { Input, Empty } from "antd";

import { DialogItem } from "../";

import "./Dialogs.scss";

const Dialogs = ({
    items,
    userId,
    onSearch,
    inputValue,
    currentDialogId,
    selectedLang,
}) => (
    <div className="dialogs">
        <div className="dialogs__search">
            <Input.Search
                placeholder={
                    selectedLang === "US"
                        ? "Search among contacts"
                        : "Поиск среди контактов"
                }
                onChange={(e) => onSearch(e.target.value)}
                value={inputValue}
            />
        </div>
        {items.length ? (
            orderBy(items, ["created_at"], ["desc"]).map((item) => (
                <DialogItem
                    key={item._id}
                    isMe={item.author._id === userId}
                    userId={userId}
                    currentDialogId={currentDialogId}
                    {...item}
                    selectedLang={selectedLang}
                />
            ))
        ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено" />
        )}
    </div>
);

export default Dialogs;
