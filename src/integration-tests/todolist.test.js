describe('TodoList App', ()=>{

  const appLink = 'http://localhost:3000';

  it('Should load with the correct title', () => {
    cy.visit(appLink);
    cy.get('title')
      .should('contain', 'Todo List App');
  });

  it('Should allow me to create a todo', () => {
    const todoText = 'Get better at testing';
    cy.visit(appLink);
    cy.get('.todo-input').type(todoText);
    cy.get('.todo-submit').click();
    
    cy.get('.todo-text')
      .should('contain', todoText);
  })

  it('Should allow me to delete a todo', () => {
    const todoText = 'Buy some sugar';
    cy.visit(appLink);
    cy.get('.todo-input').type(todoText);
    cy.get('.todo-submit').click();
    cy.get('.todo-delete').click();

    cy.get('.todo-text')
      .should('not.contain', todoText);
  })

  it('Should allow me to undo the last delete todo', () => {
    const todoText = 'Buy some milk';
    cy.visit(appLink);
    cy.get('.todo-input').type(todoText);
    cy.get('.todo-submit').click();
    cy.get('.todo-delete').click();
    cy.get('.undo-delete').click();

    cy.get('.todo-text')
      .should('contain', todoText);
  })
})
