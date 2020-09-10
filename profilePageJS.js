app.post("/api/user-data", (req, res) => {
    connection.query("INSERT INTO allChallenges (challenge) VALUES (?)", [req.body.challenge], (err, result) => {
      if (err) {
        return res.status(500).end();
      }
      // Send back the ID of the new challenge
      res.json({ id: result.insertId });
      console.log({ id: result.insertId });
    });
  });