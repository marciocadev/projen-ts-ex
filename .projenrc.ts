import { javascript, typescript } from 'projen';
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'projen-ts-ex',
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,

  publishTasks: true
});
project.synth();