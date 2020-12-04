const prepopulateEnv = require('hosti-cli/lib/utils/cli-utils').prepopulateEnv;
const cliCommandsExecuter = require('hosti-cli/lib/dependencyResultionFactory').cliCommandsExecuter;

test('Check API token population', () => {
    prepopulateEnv({
        apiKey: "TEST-TOKEN",
    });
    expect(process.env.HOSTI_KEY).toEqual("TEST-TOKEN");
});

test('Call command exec', () => {
    prepopulateEnv({
        apiKey: "TEST-TOKEN",
    });
    cliCommandsExecuter.executeCommand({ command: 0 });
});
