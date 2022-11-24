describe('Visits the Bookstore and checks if title is Libri', () => {
  it('Visits the Bookstore', () => {
    cy.visit('http://localhost:8888/Test/?p=home')
  })
  it('Checks if the title is Libri',()=>{
    cy.title().should('contain','Libri')
  })
})
describe('Clicks on About button and check if redirected correctly', () => {
  it('Checks if About button exists',()=>{
    cy.contains('About').click()
  })
  it('Check is redirected url was correct',()=>{
    cy.url().should('be.equal', 'http://localhost:8888/Test/?p=about')
  })
})

describe('Finds and clicks Register button', () => {
  it('Finds and clicks Register button', () => {
    cy.contains('Register').click()
  })
})
function login(){
  it('Finds and gives value to Name input', () => {
    cy.get('input[name="user_name"]').type('Islam')
  })
  it('Finds gives value to Email input', () => {
    cy.get('input[name="email"]').type('islamguly@gmail.com')
  })
  it('Finds and gives value to Password input', () => {
    cy.get('input[name="password"]').type('123')
  })
  it('Finds and gives value to Confirm password input', () => {
    cy.get('input[name="confirm_password"]').type('12s3')
  })
}
describe('Finds and inputs value to all fields ', login)
describe('Finds and clicks Sign up button', () => {
  it('Finds sign up button and click on it',()=>{
    cy.get('button').click()
    cy.get('.validation-error').should('be.visible')
  })
})
describe('Finds and gives correct value to password and Confirm password input', () => {
  it('Finds and gives value to Password input', () => {
    cy.get('input[name="password"]').type('123')
  })
  it('Finds and gives value to Confirm password input', () => {
    cy.get('input[name="confirm_password"]').type('123')
  })
})
describe('Clicks sign up button and redirects to correct url', () => {
  it('Finds sign up button and click on it',()=>{
    cy.get('button').click()
  })
  it('Check is redirected url was correct',()=>{
    cy.url().should('be.equal', 'http://localhost:8888/Test/?p=home')
  })
})
describe('Checks if navbar buttons and footer exist', () => {
  it('Checks if Home button exists',()=>{
    cy.contains('Home')
  })
  it('Checks if About button exists',()=>{
    cy.contains('About')
  })
  it('Checks if Upload button exists',()=>{
    cy.contains('Upload')
  })
  it('Checks if MyBooks button exists',()=>{
    cy.contains('My books')
  })
  it('Checks whether footer exists',()=>{
    cy.get('footer').should('be.visible')
  })
})
describe('Clicks on Sign out button and check if redirected correctly', () => {
  it('Checks if Sign out button exists',()=>{
    cy.contains('Sign out').click()
  })
  it('Check is redirected url was correct',()=>{
    cy.url().should('be.equal', 'http://localhost:8888/Test/?p=login')
  })
})




