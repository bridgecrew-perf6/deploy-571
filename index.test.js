const prepopulateEnv = require('hosti-cli/lib/utils/cli-utils').prepopulateEnv;

test('Check API token population', () => {
    prepopulateEnv({
        apiKey: "TEST-TOKEN",
    });
    expect(process.env.HOSTI_KEY).toEqual("TEST-TOKEN");
});
