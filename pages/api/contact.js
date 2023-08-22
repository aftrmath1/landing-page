import emailjs from '@emailjs/browser';

export default async (req, res) => {
	const { form } = req.body;
	console.log('a');
	emailjs.send(process.env.EMAIL_SERVICE, process.env.EMAIL_TEMPLATE, form, process.env.EMAIL_ID)
      .then((result) => {
		  return res.json({'success': result.text});
      }, (error) => {
			console.log(error);
          return res.json({'error': error.text});
      });
}