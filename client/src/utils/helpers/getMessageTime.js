import format from "date-fns/format";
import isToday from "date-fns/is_today";

export default (createdAt) => {
    if (isToday(createdAt)) {
        return format(createdAt, "HH:mm");
    } else {
        return format(createdAt, "DD.MM.YYYY");
    }
};
