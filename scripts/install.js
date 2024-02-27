const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const pkgRoot = path.dirname(path.dirname(__filename));
const binding = path.join(pkgRoot, 'build', 'src', 'frida_binding.node');
if (fs.existsSync(binding)) {
  process.exit(0);
}

try {
  execSync('prebuild-install', { stdio: 'inherit' });
  process.exit(0);
} catch (e) {
}

try {
  execSync('node-gyp rebuild', { stdio: 'inherit' });
  process.exit(0);
} catch (e) {
}

process.exit(1);