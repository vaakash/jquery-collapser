# jQuery Collapser

Collapser is a small and useful jQuery plugin for collapsing/truncating an element text by words, characters and lines with a flexible API. It is an all in one plugin with multiple functionalities to truncate a paragraph or any element as desired.

[👁️ Live demo](https://www.aakashweb.com/demos/jquery-collapser/) - [🏠 Home page](https://www.aakashweb.com/jquery-plugins/collapser) - [☕ Buy me a Coffee !](https://www.paypal.me/vaakash/6)

## Why it is needed ?

Collapser is really useful to truncate long text in terms of characters, words or lines. It can also toggle the visibility elements. Hence 4 modes of operation in one plugin. Some [practical examples](https://www.aakashweb.com/demos/jquery-collapser/) are also demonstrated.

## Features

* Four modes of operation
    * Truncate text by **characters**
    * Truncate text by **words**
    * Truncate text by **lines**
    * Show/hide block level elements
* HTML content present in the elements are preserved during the operation.
* Simple and flexible API for using in varied applications.
* Display remaining string count in the show/hide button.
* No complicated syntax or alterations required, can be used readily.
* Light weight only ~4KB after minification.
* Works in all browsers. Tested till IE 7 and it works !

## Examples

HTML:

```HTML
<p class="collapseCharacters">#1 Lorem <i>ipsum dolor</i> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

<p class="collapseWords">#2 Lorem <strong>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</strong> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

<p class="collapseLines">#3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

<h3 class="heading">My heading</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```

jQuery:

```JavaScript
// Collapse by number of characters
$('.collapseCharacters').collapser({
    mode: 'chars',
    truncate: 11 // Shows only 11 characters
});

// Collapse by number of words
$('.collapseWords').collapser({
    mode: 'words',
    truncate: 20 // Shows only 20 words
});

// Collapse by number of lines
$('.collapseLines').collapser({
    mode: 'lines',
    truncate: 2 // Shows only 2 lines
});

// Collapse the block element
$('.heading').collapser({
    mode: 'block',
    blockTarget: 'next'
});

// Default options
$('myElement').collapser({
    mode: 'words',
    speed: 'slow',
    truncate: 10,
    ellipsis: ' ... ',
    controlBtn: '',
    
    showText: 'Show more',
    hideText: 'Hide text',
    showClass: 'show-class',
    hideClass: 'hide-class',

    atStart: 'hide',
    blockTarget: 'next',
    blockEffect: 'fade',

    lockHide: false,
    changeText: false,

    beforeShow: null,
    afterShow: null,
    beforeHide: null,
    afterHide: null
});

```

Output:
```
#1 Lorem <i>ipsum</i> ... [Show more]

#2 Lorem <strong>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</strong> ... [Show more]

#3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
```

[More demos](https://www.aakashweb.com/demos/jquery-collapser/)

## Buy me a coffee !

Like this plugin ? If you find it useful and if it helped solved your problem, feel free to [Buy me a Coffee !](https://www.paypal.me/vaakash/6) 😀

## Documentation

Plugin's documentation is available in the plugin homepage. Please refer [this page](https://www.aakashweb.com/docs/jquery-collapser-docs/) for more details on usage, options and customization features.

## Requirements

* jQuery 1.7+

## License

Copyright (c) 2020 [Aakash Chakravarthy](https://www.aakashweb.com/), released under the MIT License.