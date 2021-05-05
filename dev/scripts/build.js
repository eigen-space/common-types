const { copy } = require('@eigenspace/helper-scripts');
const { FileWorker } = require('@eigenspace/helper-scripts/scripts/project/remove-files-by-pattern/file-worker');

const target = 'dist';

const worker = new FileWorker();
worker.removeFilesByPattern(target, '.js$');

copy(['package.json', 'yarn.lock', 'README.md', 'src/@types'], target);