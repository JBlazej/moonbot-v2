
export async function  facebookVerificationHook(req, res) {
    if (req.query['hub.verify_token'] === 'TriPrsaNaHrudi89') {
      res.status(200).send(req.query['hub.challenge']);
    } else {
      res.sendStatus(403);
    }
  }
//TriPrsaNaHrudi89
