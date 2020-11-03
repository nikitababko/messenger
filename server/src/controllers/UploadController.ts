import express from "express";
import { UploadedFileModel } from "../models";

class UserController {
    create = (req: express.Request | any, res: express.Response) => {
        console.log(req.file);
        const userId = req.user._id;

        const file: any = req.file;
        const fileData = {
            filename: file.originalname,
            size: file.bytes,
            ext: file.format,
            url: file.path,
            user: userId,
        };
        const uploadedFile = new UploadedFileModel(fileData);

        uploadedFile
            .save()
            .then((fileObg: any) => {
                res.json({
                    status: "success",
                    file: fileObg,
                });
            })
            .catch((err: any) => {
                res.json({
                    status: "error",
                    message: err,
                });
            });
    };

    delete = () => {};
}

export default UserController;
