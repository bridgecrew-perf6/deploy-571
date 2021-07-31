const core = require('@actions/core');
const cliCommandsExecuter = require('hosti-cli/lib/dependencyResultionFactory').cliCommandsExecuter;
const prepopulateEnv = require('hosti-cli/lib/utils/cli-utils').prepopulateEnv;

try {
    const tokenKey = core.getInput('key');
    const projectId = core.getInput('projectId');
    const location = core.getInput('location');
    const isSpaApplication = core.getBooleanInput('isSpaApplication');

    prepopulateEnv({
        apiKey: tokenKey,
    });
    cliCommandsExecuter.executeCommand({
        command: 1,
        deployLocation: location,
        deployProjectId: projectId,
        isSpaApplication: isSpaApplication == null ? false : isSpaApplication
    });

} catch (error) {
    core.setFailed(error.message);
}
