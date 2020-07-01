'use strict'

const ejs        = require('ejs')
const nodemailer = require('nodemailer')
var transporter  = null

export default {
    data() {
        return {
            send : function () {
                async function (req, res) {
                    if (!req.body.email || !req.body.name || !req.body.message || !req.body.cart) {
                        return res.status(401).send({
                            message: "missing_body"
                        })
                    }

                    if (!transporter) {
                        transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth   : {
                                user: process.env.EMAIL,
                                pass: process.env.EMAIL_PASS
                            }
                        });
                    }

                    let html = ''

                    try {
                        html = await ejs.renderFile('./ejs/mailClient.ejs', req.body)
                    } catch (error) {
                        return res.status(500).send('SEND_ERROR')
                    }

                    // setup email data with unicode symbols
                    let mailOptions = {
                        from   : '"Charlie\'s Créa 👻" <contact@charliescrea.fr>', // sender address
                        //to   : 'fabre.tomas@hotmail.fr, ' + req.body.email, // list of receivers
                        to     : 'fabre.tomas.ft@gmail.com', // list of receivers
                        subject: 'Commande sur charliescrea', // Subject line
                        //text : 'merci pour votre commande de ' + req.body.commande, // plain text body
                        html   : html
                        // html body
                    }
                }
            }
        }
    }
}