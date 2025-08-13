const { loginUser } = require("../services/authService");

async function login(req, res) {

    try {
        const loginPayload = req.body;

        const response = await loginUser(loginPayload);

        return res.status(200).json({
            message: "User logged in successfully",
            success: true,
            data: response,
            error: {}
        })
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message || "Internal Server Error",
            success: false,
            data: {},
            error: error
        });
    }
}

module.exports = {
    login
}