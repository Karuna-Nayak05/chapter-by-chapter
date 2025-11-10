import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";

dotenv.config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function verifyGoogleAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    // ✅ Extract Bearer token
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized: No token" });
    }

    const token = authHeader.split(" ")[1];

    // ✅ Verify token with Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    // ✅ Attach user info to request
    req.userId = payload.sub;       // ✅ IMPORTANT — used in bookRoutes
    req.userEmail = payload.email;  // optional
    req.userName = payload.name;    // optional

    next();
  } catch (error) {
    console.error("Google Auth Error:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
}
