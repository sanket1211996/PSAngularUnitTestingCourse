import { MessageService } from "./message.service";

describe('MessageService', ()=>{

  let service: MessageService

  beforeEach(()=>{
    service = new MessageService();
  })

  it('should have no message at start', ()=>{

    expect(service.messages.length).toBe(0);
  })

  it('should have message length 1 when message is added', ()=>{

    service.add('message1');

    expect(service.messages.length).toBe(1);
  })

  it('should have remove all message when cleared is called', ()=>{

    //Arrange
    service.add('message1');

    //Act
    service.clear();

    //Assert
    expect(service.messages.length).toBe(0);
  })

})
