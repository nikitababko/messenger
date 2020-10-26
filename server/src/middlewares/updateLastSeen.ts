import express from "express";
import { UserModel } from "../models";

export default (
    req: express.Request | any,
    __: express.Response,
    next: express.NextFunction
) => {
    UserModel.findOneAndUpdate(
        { _id: req.user._id },
        {
            last_seen: new Date(),
        },
        { new: true },
        () => {}
    );
    next();
};
