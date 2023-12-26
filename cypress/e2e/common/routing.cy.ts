import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('User unauthorized', () => {
        it('Main Page redirect', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Redirect to Profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Redirect to unknown page ', () => {
            cy.visit('/fasfasfasf');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('User authorized', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Redirect to Profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Redirect to Articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
