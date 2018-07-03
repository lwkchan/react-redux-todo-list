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
})
