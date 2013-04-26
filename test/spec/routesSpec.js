describe("Testing Routes", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should jump to the / path when / is accessed', function() {
    browser().navigateTo('#/');
    expect(browser().location().path()).toBe("/");
  });

  it('should have a working /users route', function() {
    browser().navigateTo('#/users');
    expect(browser().location().path()).toBe("/users");
  });

  it('should redirect to / when trying to access an inexistent route', function() {
    browser().navigateTo('#/bad-route');
    expect(browser().location().path()).toBe("/");
  });

});
