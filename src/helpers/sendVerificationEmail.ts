import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { resend } from "@/lib/resend";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'you@gmail.com',
            to: email,
            subject: 'Verification code',
            react: VerificationEmail({ username, otp: verifyCode })
        });
        return { success: true, message: "Verification email send successfully" }
    } catch (emailError) {
        console.error("Error while send verification email", emailError)
        return { success: false, message: "Failed to send verification email" }
    }
}