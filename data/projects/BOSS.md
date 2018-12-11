# Bethel Online Special Education System
![BOSS Screenshot](/img/projects/boss.jpg)
In the summer of 2006, I once again worked under contract for the Bethel School District.  This time, I was tasked with the development of Bethel's Online Special Education System (BOSS).  The goal of BOSS is to transform the district's current hand-written Special education evaluation system into a web-based platform.  Using the latest AJAX technologies (Prototype, Scriptaculous, etc.), BOSS allows professionals to make student evaluations in a "Turbo Tax"-like fashion.

Determined to build upon the knowledge learned at CWU and to not make previous mistakes made in the IMS, I had high ambitions for the BOSS system.  Probably the most interesting thing about the program (at the time) is that there were absolutely no page refreshes.  To accomplish this feat, I created what I called the "Page Loader" that fetches dynamic pages through various AJAX calls.  Additionally, by using an early revision of the Zend Framework, I was able to successfully separate my DB and presentation logic in a 2.5-layer system (some business logic is missing, hence the 2.5 layers).

## Technology
* Linux
* Apache 2.0
* MySQL 5.0
* PHP 5.2
* Zend Framework v1
* JavaScript (vanilla, PrototypeJS, Scriptaculous)