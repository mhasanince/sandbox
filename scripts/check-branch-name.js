import chalk from 'chalk';
import { execSync } from 'child_process';

if (process.env.CI) {
  // eslint-disable-next-line no-console
  console.log(
    chalk.green('✅ CI environment detected, skipping branch name check.'),
  );
  process.exit(0);
}

const branchName = execSync('git rev-parse --abbrev-ref HEAD')
  .toString()
  .trim();

const regex = /^(JIRA-\d+|main)$/;

if (!regex.test(branchName)) {
  console.error(
    chalk.red.bold('❌ Invalid Branch Name!') +
      '\n' +
      chalk.yellow("Please create the branch name in 'JIRA-XXX' format.") +
      '\n' +
      chalk.cyan('Example: JIRA-123') +
      '\n',
  );
  process.exit(1);
}

// eslint-disable-next-line no-console
console.log(chalk.green('✅ Branch name is valid.'));
process.exit(0);
