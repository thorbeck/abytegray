module.exports = function (plop) {
  // Helpers
  plop.addHelper('toPascalCase', function (name) {
    return name
      .split('-')
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      })
      .join('');
  });
  // Component generator
  plop.setGenerator('webcomponent', {
    description: 'Create a new web component.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (E.g. "item-list"):',
        validate: function (value) {
          if (/^[A-Za-z]+(-[A-Za-z]+)*$/.test(value)) {
            return true;
          }
          return 'Only letters and hyphens allowed.';
        },
      },
      {
        type: 'confirm',
        name: 'useArray',
        message: 'Will the component display a list of content?',
      },
    ],
    actions: function (data) {
      var actions = [];
      // Component
      actions.push({
        type: 'add',
        path: 'src/components/{{lowerCase name}}/{{lowerCase name}}.tsx',
        templateFile: 'templates/web-component/web-component.tsx.hbs',
      });
      // SCSS
      actions.push({
        type: 'add',
        path: 'src/components/{{lowerCase name}}/{{lowerCase name}}.scss',
        templateFile: 'templates/web-component/web-component.scss.hbs',
      });
      // Interface
      if (data.useArray) {
        actions.push({
          type: 'add',
          path: 'src/components/{{lowerCase name}}/{{lowerCase name}}.interface.tsx',
          templateFile:
            'templates/web-component/web-component.interface.ts.hbs',
        });
      }
      return actions;
    },
  });

  // Element generator
  plop.setGenerator('customelement', {
    description: 'Create a new custom element.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Element name (E.g. "item-list"):',
        validate: function (value) {
          if (/^[A-Za-z]+(-[A-Za-z]+)*$/.test(value)) {
            return true;
          }
          return 'Only letters and hyphens allowed.';
        },
      },
      {
        type: 'confirm',
        name: 'useShadowDOM',
        message: 'Use Shadow DOM?',
      },
    ],
    actions: function (data) {
      var actions = [];
      // Component
      actions.push({
        type: 'add',
        path: 'src/elements/{{lowerCase name}}/{{lowerCase name}}.js',
        templateFile: 'templates/custom-element/custom-element.js.hbs',
      });
      // SCSS & HTML
      if (data.useShadowDOM) {
        actions.push({
          type: 'add',
          path: 'src/elements/{{lowerCase name}}/{{lowerCase name}}.shadow.scss',
          templateFile: 'templates/custom-element/custom-element.scss.hbs',
        });
        actions.push({
          type: 'add',
          path: 'src/elements/{{lowerCase name}}/{{lowerCase name}}.html',
          templateFile: 'templates/custom-element/custom-element.html.hbs',
        });
      } else {
        actions.push({
          type: 'add',
          path: 'src/elements/{{lowerCase name}}/{{lowerCase name}}.module.scss',
          templateFile: 'templates/custom-element/custom-element.scss.hbs',
        });
      }
      return actions;
    },
  });
};
