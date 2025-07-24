import user from "../Modules/user.modules.js"; // Import user modules
import bcrypt from "bcryptjs";
export const signup =async (req, res) => {
    console.log(req.body);
    const { username, email,password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = new user({ username,email, password: hashedPassword }); // Create a new user instance
    try {
        const savedUser = await newUser.save(); // Save the user to the database
        res.status(201).json( "User created successfully");

    }
    catch (error) {
        res.status(500).json(error.message); // Handle errors
    }
}