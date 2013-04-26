describe('Testing Login', function() {
    beforeEach(function(){
        browser().navigateTo('/');

        input('login.login').enter('user');
        input('login.password').enter('secure_password');
    });

    it('should login', function() {
        element('#login').click();
        expect(browser().location().url()).toBe("/");
        expect(element('#welcome_user:visible').count()).toBe(1);
        expect(element('#welcome_user').text()).toEqual('Welcome, Julien!');
    });

    it('should disconnect', function() {
        element('#login').click();
        element('#disconnect').click();
        expect(element('#welcome_user:visible').count()).toBe(0);
    });
});
