jQuery Collapser
================

Collapser is a small and useful jQuery plugin for collapsing/truncating an element text by words, characters and lines with a flexible API. It is an all in one plugin with multiple functionalities to truncate a paragraph or any element as desired.

[Check out the working demo](http://www.aakashweb.com/demos/jquery-collapser/) - [Homepage](http://www.aakashweb.com/jquery-plugins/collapser)

Why it is needed ?
----------------

Collapser is really useful to truncate long text in terms of characters, words or lines. It can also toggle the visibility elements. Hence 4 modes of operation in one plugin. Some [practical examples](http://www.aakashweb.com/demos/jquery-collapser/) are also demostrated.

Features
--------

* Four modes of operation
	* Truncate text by **characters**
	* Truncate text by **words**
	* Truncate text by **lines**
	* Show/hide element
* HTML content present in the elements are preserved during the operation.
* Simple and flexible API for using in varied applications.
* Display remaining string count in the show/hide button.
* No complicated syntax or alterations required, can be used readily.
* Light weight only 4KB after minification.
* Works in all browsers. Tested till IE 7 and it works !

Syntax
------

HTML:

```HTML
<p class="myElement">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
```

JavaScript:

```JavaScript
$('.myElement').collapser({
	mode: 'words',
	truncate: 20
});
```

Output:
```
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ... [Show text]
```

[More demos](http://www.aakashweb.com/demos/jquery-collapser/)

Documentation
------------

[Click here](http://www.aakashweb.com/docs/jquery-collapser-docs/) to see the docs of this plugin.

Requirements
-------------
* jQuery 1.7+ thats it ..

License
-------
Copyright (c) 2014 [Aakash Chakravarthy](http://www.aakashweb.com/), released under the MIT License.