export const testController = () => {
  (req, res) => {
    res.status(400).json({
      message: "Test",
    });
  };
};
