import {catchAssyncErrors} from "../middlewares/catchAssyncErrors.js";
import {Message} from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const sendMessage = catchAssyncErrors(async(req,res,next)=>{
    const {firstName, lastName, email, phone, message} = req.body;
    if(!firstName || !lastName || !email || !phone || !message) {
        return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
    await Message.create({firstName, lastName, email, phone, message});
    res.status(200).json({
        success: true,
        message: "Message Send Successfully",
    });
});

export const getAllMessages = catchAssyncErrors(async(req, res, next)=>{
    const message = await Message.find();
    res.status(200).json({
        success: true,
        message
    });
});