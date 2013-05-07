describe("Person", function () {
	beforeEach(function () {

	});

	afterEach(function () {

	});
	 
  describe("object factory", function(){
    it('creates an object', function(){

    });
  });


  describe("event emmitter", function(){
    var pubSub, listener;
    beforeEach(function(){
      pubSub = createObject(new EvilPubSub());
      listener = jasmine.createSpy('myFakeListener');
      pubSub.subscribe(listener, 'didLogIn');

      expect( pubSub.getSubscribers('didLogIn').length ).toEqual( 1 );
    });

    it("emits events", function(){
      pubSub.notify('didLogIn');
      expect( listener ).toHaveBeenCalled();
    });

    it("unsubscribes", function(){
      pubSub.unsubscribe('didLogIn');
      expect( pubSub.getSubscribers('didLogIn').length ).toEqual( 0 );
    });
  });
});
