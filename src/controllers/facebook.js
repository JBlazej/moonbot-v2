
export async function  facebookVerificationHook(req, res) {
    if (req.query['hub.verify_token'] === process.env.VERIFICATION_TOKEN) {
      console.log('Webhook is working...');
      res.status(200).send(req.query['hub.challenge']);
    } else {
      console.log('Webhook died :-(');
      res.sendStatus(403);
    }
  }