describe('My first Test', ()=>{
  let sut;


  beforeEach(()=> {
    sut = {}
  })

  /*   AAA Test Principle */
  it('should be true if true', ()=>{
    //Arrange
    sut.a = false;

    //Act
    sut.a = true;

    //Assert
    expect(sut.a).toBe(true);
  })

  /*
    IT()  should tell a story.
    DRY - Dont repeat Yourself
    DAMP - Repeat Yourself if neccessary*/


})
