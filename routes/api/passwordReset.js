const User = require('../../models/User');
const Token = require("../../models/token");
const sendEmail = require("../../utils/sendEmail");
const crypto = require("crypto");
const Joi = require("joi");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post("/", async (req, res) => {
    try {
        const schema = Joi.object({ email: Joi.string().email().required() });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findOne({email:req.body.email});
        if (!user)
            return res.status(400).send("user with given email doesn't exist");

        let token = await Token.findOne({ userId: user._id });
        if (!token) {
            token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }
        const link = `http://localhost:3000/password-reset/?id=${user._id}&token=${token.token}`;
      
        const html = '<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2"><div style="margin:50px auto;width:70%;padding:20px 0"><div style="border-bottom:1px solid #eee"><a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">U-FEST</a></div><p style="font-size:1.1em">Reset password</p><p>Click on link below to rest your password.<br/> ' +link +'</p><p style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;"></p><p style="font-size:0.9em;">From,<br />U-Fest Team</p><hr style="border:none;border-top:1px solid #eee" /><div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300"><p></p><p>Grp 2 - 201806100110058 | 201806100110129 </p><p>Full Stack Project,Msc IT, BMIIT</p></div></div></div>';
        await sendEmail(user.email, "Password reset", html);

        res.send("password reset link sent to your email account");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});

router.post("/:userId/:token", async (req, res) => {
    try {
        const schema = Joi.object({ password: Joi.string().required() });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send("invalid link or expired");

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send("Invalid link or expired");
        
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password,salt),
        await user.save();
        await token.delete();

        res.send("password reset sucessfully.");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});

module.exports = router;