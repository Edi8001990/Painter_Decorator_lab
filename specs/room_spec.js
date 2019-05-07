const assert = require('assert');
const Room = require('../room.js');



describe('Room', function(){

let room;

  beforeEach(function(){
    room = new Room(40, false);
  });

  it('should have area', function(){
    const actual = room.area;
    assert.strictEqual(actual, 40);
  });

  it('should have a paint status', function(){
    const actual = room.paint_status;
    assert.strictEqual(actual, false);
  });

});
