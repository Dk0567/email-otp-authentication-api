function generateOtp(){
    return  Math.floor(100000 + Math.random() * 900000).toString();
}

function getOtpHtml(otp) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Email Verification Otp</title>
</head>

<body style="margin:0;padding:0;background:#f5f7fb;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fb;padding:40px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 20px rgba(0,0,0,0.08);">

<tr>
<td align="center" style="background:#2563eb;padding:25px;">
<h1 style="margin:0;color:#ffffff;font-size:28px;">
Email Verification
</h1>
</td>
</tr>

<tr>
<td style="padding:40px;">

<h2 style="margin-top:0;color:#222;">
Hello 👋
</h2>

<p style="font-size:16px;color:#555;line-height:1.7;">
Thank you for creating your account.
To complete your registration, please verify your email address using the One-Time Password (OTP) below.
</p>

<div style="margin:35px 0;text-align:center;">

<div style="
display:inline-block;
padding:18px 40px;
background:#eef4ff;
border:2px dashed #2563eb;
border-radius:10px;
font-size:34px;
font-weight:bold;
letter-spacing:8px;
color:#2563eb;">
${otp}
</div>

</div>

<p style="font-size:15px;color:#666;text-align:center;">
This OTP is valid for <strong>5 minutes</strong>.
</p>

<p style="font-size:15px;color:#666;line-height:1.7;">
If you didn't request this verification, you can safely ignore this email.
No one can access your account without this OTP.
</p>

<hr style="border:none;border-top:1px solid #eeeeee;margin:35px 0;">

<p style="font-size:14px;color:#888;text-align:center;">
Need help? Reply to this email or contact our support team.
</p>

</td>
</tr>

<tr>
<td align="center"
style="background:#f8f9fc;padding:20px;color:#888;font-size:13px;">

<strong>AuthFlow Team</strong><br>
Secure Email Verification System

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`
}

module.exports ={
    generateOtp,
    getOtpHtml,
}