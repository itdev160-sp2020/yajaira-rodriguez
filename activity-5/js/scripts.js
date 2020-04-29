(function() {

var data = [
    {
        name: '1. IntelliSense for CSS class names',
        description: 'The IntelliSense for CSS class names extension helps to autocomplete class names for the HTML class attribute by looking at the CSS class definitions in your workspace, and external files referenced through the link element.',
        author: 'Zignd',
        url: 'https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion',
        downloads: 2172413,
        stars: 132,
        price: 'Free',
        selector: 'p1'
    },
    {
        name: '2. CSS Peek',
        description: 'CSS Peak extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup.',
        author: 'Pranay Prakash',
        url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
        downloads: 850065,
        stars: 55,
        price: 'Free',
        selector: 'p2'        
    },
    {
        name: '3. Instant Markdown',
        description: 'The Instant Markdown extension lets you edit Markdown documents in VS Code and instantly previews them in browser. It’s super helpful for editing readme files and other documents written in Markdown.',
        author: 'David Bankier',
        url: 'https://marketplace.visualstudio.com/items?itemName=dbankier.vscode-instant-markdown',
        downloads: 112815,
        stars: 38,
        price: 'Free',
        selector: 'p3'        
    }
];
function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this. stars.toLocaleString();
    };
}

var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
};

var getEl = function (id) {
    return document.getElementById(id);
};

var writePackageInfo = function(package) {
    var selector = package.selector,
      nameEl = getEl(selector + '-name'),
      descEl = getEl(selector + '-description'),
      urlEl = getEl(selector + '-url'),
      authEl = getEl(selector + '-author'),
      downloadEl = getEl(selector + '-downloads'),
      starsEl = getEl(selector + '-stars');

      nameEl.textContent = package.name;
      descEl.textContent = package.description;
      urlEl.textContent = package.url;
      authEl.textContent = package.author;
      downloadEl.textContent = package.getFormattedDownloads();
      starsEl.textContent = package.getFormattedStars();
};

      dateEl = getEl('date');
      dateEl.textContent = getTodaysDate();

      var IntelliSense = new Package(data[0]);
      writePackageInfo(IntelliSense);

      var peek = new Package(data[1]);
      writePackageInfo(peek);

      var markdown = new Package(data[2]);
      writePackageInfo(markdown);
}());