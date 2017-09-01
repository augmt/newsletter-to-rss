## how it (tentatively) works

* newsletters get forwarded to a [Mailgun][1] sandbox domain
* Mailgun parses and POSTs each newsletter to newsletter-to-rss via [Mailgun Routes][2]
* newsletter-to-rss adds the parsed contents to the [RSS][3] feed

[1]: https://www.mailgun.com/
[2]: https://documentation.mailgun.com/user_manual.html#routes
[3]: https://github.com/dylang/node-rss

## similar services

* http://emails2rss.appspot.com/
* https://www.kill-the-newsletter.com/
* http://blog.newsblur.com/post/146752875548/newsletters-in-your-newsblur
* http://blog.inoreader.com/2015/06/introducing-way-to-tag-any-piece-of.html
