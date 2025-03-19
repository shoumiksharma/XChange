export const userAuthentication = (req, res) => {
    return res
            .status(200)
            .json({message : "User authenticated"});
}