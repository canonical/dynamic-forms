# Canonical dynamic forms

This project contains the scripts and styles to display an interactive form.

It is a "contact us" which contains a brief survey before submission.


## Usage

To make it work, you need the following:
1. Install the script
2. Create an HTML file or template with your content
3. A link or button to trigger it

### Install the script

This project can be installed via an [NPM package](https://www.npmjs.com/package/dynamic-forms).

```bash
yarn add @canonical/dynamic-forms
```

...or...

```bash
npm install @canonical/dynamic-forms
```

You can then install the library either by directly linking to it or via an ES6 import.

1. Via direct link

To consume the library directly, add a link to the JS file containing an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) and call the lib:

```javascript
<script src="[ INSERT YOUR LOCAL PATH ]/js/dynamic-forms.js"></script>
<script>
  dynamicForms.setupForm();
</script>
```

2. Via ES6 import

```javascript
import { setupForm } from '@canonical/dynamic-forms';
```

### Create an HTML file or template

The HTML template must follow the structure of `index.html`, paying attention to the following:

- It must contain an element with id `container-form-container`, which has a number of data parameters:
  - `data-form-location` refers to the location of the form. In this example, it is located in `./interactive-form.html`
  - `data-form-id` is the required marketo ID.
  - `data-return-url` is usually the "thank you" page to what the form returns to once it has succesfully submitted.
- A modal element with id `contact-modal`. This is the model that is triggered once the user clicks on a trigger i.e. a "contact us" button
- At least one page in the modal, with class `js-pagination js-pagination--1`

All CSS classes must conform to Vanilla Framework v3 or upwards.

### Trigger

Once the module is included in your project and the template is created, you will need to add a link or button to trigger it.

```
<a href="#get-in-touch">
  Contact us
</a>
```

The `#get-in-touch` hash will track changes in the page location, so that it correctly maps to the corresponding form. This will also keep the modal opened if the user did not close the modal or refreshes the page.

It is common to add some additional styling if you wish to do so

```
<a href="#get-in-touch" class="p-button--positive">
  Contact us
</a>
```
## Contributing

If you would like to help improve this project, here is a list of commands to
help you get started.

### Building the cookie policy

Install the required dependencies;

```
npm install
```

To build the JS and CSS into the build folder, run:

```
npm run build
```

You can view the build files in action by running:

```
npm run serve
```

And, visiting http://0.0.0.0:8302/


### Hacking

When developing this project you can run the following command to listen to
changes in the `src/js/*js` and `src/sass/*scss` folders and build them into the
`/build` folder.

```
npm run watch
```

Before submitting your pull request, run the linters, which checks both the JS
and Sass for errors.

```
npm run test
```

Code licensed LGPLv3 by Canonical Ltd.

With ♥ from Canonical
