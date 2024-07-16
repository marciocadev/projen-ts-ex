import { javascript, typescript } from 'projen';
import { Publisher } from 'projen/lib/release';
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'projen-ts-ex',
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,

  publishTasks: true,


});

const publisher = new Publisher(project, {
  buildJobId: "my-build-job",
  artifactName: 'dist',
});
publisher.publishToNpm({
  // registry: 'npm.pkg.github.com'
})
project.synth();