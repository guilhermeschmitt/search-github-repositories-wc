Cypress.Commands.add('resetFavorites', () => localStorage.removeItem('favorites'));
Cypress.Commands.add('resetTheme', () => localStorage.removeItem('theme'));
