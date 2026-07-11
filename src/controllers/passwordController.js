const crypto = require("crypto");
const usermodel = require("../model/user.model.js");
const { sendEmail } = require("../services/email.service.js");

async function forgotPassword(req, res) {
  const { email, newPassword, confirmPassword } = req.body;

  // Validation
  if (!email || !newPassword || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // User dhundo
  const user = await usermodel.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Verified hai?
  if (!user.verified) {
    return res.status(400).json({ message: "Please verify your email first" });
  }

  //Password match karo
  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  // Password length check
  if (newPassword.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  //Hash karna same variable naam
  const hashpassword = crypto
    .createHash("sha256")
    .update(newPassword)
    .digest("hex");

  //Save karna
  user.password = hashpassword;
  await user.save();

  //  Email bhejna
  await sendEmail(
    email,
    "Password Reset Successful",
    "Your password has been reset successfully.",
    `
      <div style="font-family: Arial, sans-serif; max-width: 400px; margin: auto;">
        <h2>Password Reset Successful ✅</h2>
        <p>Hello <b>${user.username}</b>,</p>
        <p>Your password has been reset successfully.</p>
        <p>If you didn't do this, contact support immediately.</p>
      </div>
    `
  );

  return res.status(200).json({
    message: "Password reset successfully!"
  });
}

module.exports = { forgotPassword };