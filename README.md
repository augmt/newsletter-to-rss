## how it (tentatively) works

* newsletter e-mails get forwarded to a [Mailgun][1] sandbox domain
* Mailgun POSTs each e-mail's contents to newsletter-to-rss via [Mailgun Routes][2]
* [MailParser][3] parses the mail's stripped HTML
* MailParser then adds the stripped HTML's text body to the [RSS][4] feed

[1]: https://www.mailgun.com/
[2]: https://documentation.mailgun.com/user_manual.html#routes
[3]: https://www.npmjs.com/package/mailparser
[4]: https://www.npmjs.com/package/rss

## similar services

* http://emails2rss.appspot.com/
