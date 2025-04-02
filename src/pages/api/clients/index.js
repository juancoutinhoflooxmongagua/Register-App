
export default function clients(req, res) {
    res.status(200).json({ 
      name: "Hello world",
      method: req.method
     });
  }
  