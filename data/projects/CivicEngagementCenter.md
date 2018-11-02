# Civic Engagement Center
[Civic Engagement Center Website](/img/projects/cec.jpg)
Late in my junior year at CWU, I was approached by my advisor Dr. Ed Gellenbeck who informed me that the university's Civic Engagement Center was in need of an experienced web developer to transition their aging classic ASP-based site to a new one running PHP.  At first, I was apprehensive as I didn't know if I would have enough time as I was keeping plenty busy doing contract work for Bethel.  

My work for the CEC built upon a lot of what I had learned on Bethel's BOSS project.  Most notably, this included use of the Zend Framework and my custom-built form generation software.  Like BOSS, the CEC has many forms.  The CEC had 5 different user types, each with their own registration form.  In addition, the site in general is form driven: users enter data through various forms, which is then displayed in various formats throughout the site.  Because the CEC shares so much code and structure with BOSS, I often call the site BOSS version 1.5.  Unlike BOSS, the CEC website had 3 distinct application tiers.  All page logic follows a similar path, allowing for easy learning and modification.

The initial version of the website launched in late December, 2006.  Since then, I slowly added various features including: wiki-like page editing, printable timesheets that conform to CWU standards, an activity search, and photo upload and resizing.

Working for the CEC also taught me to work within design standard template.  All pages had to include the top and left banners, fonts had to be of a certain size and from a certain family.  Fortunately, I was able to work with several talented graphic design interns and we were able to design a site that both had a distinct look and conformed to CWU's web standards.

Overall, I was pretty proud of what I accomplished at the Civic Engagement Center.  For the most part, the code is well written, and is separated into logical chunks. While the PHP code is nice and easy, the database logic and design is a little more cumbersome.  The form generation logic present in both my BOSS and CEC projects is a double-edged sword.  On one side, the technique significantly reduced the time it takes to create new forms and modify old ones.  It also almost completely eliminates the need for validation and saving to the database (the form generator takes care of that). However, with this power comes an increase in database complexity: gains in ease of creation resulted in uneasy data access and retrieval.  This wasn't a problem for me, but I did worry about handing it over to the next generation of student employees. 

## Technology
* Linux
* Apache 2.2.3
* MySQL 5.0
* PHP 5.2
* Zend Framework v1
* JavaScript (Vanilla, PrototypeJS, Scriptaculous)