const core = require('@actions/core');
const hostiCli = require('hosti-cli/lib/dependencyResultionFactory');
const prepopulateEnv = require('hosti-cli/lib/utils/cli-utils').prepopulateEnv;

try {
    const tokenKey = core.getInput('key');
    const projectId = core.getInput('projectId');
    const location = core.getInput('location');

    prepopulateEnv({
        apiKey: tokenKey,
    });
    hostiCli.cliCommandsExecuter({
        command: 1,
        deployLocation: location,
        deployProjectId: projectId
    });

} catch (error) {
    core.setFailed(error.message);
}
