import chalk from "chalk";

const log = {
    error(message: string) {
        console.log(chalk.red(`[ERROR]: ${message}`));
    },
    info(message: string, ...args: any[]) {
        console.log(chalk.green(`[INFO]: ${message}`));
        if (args.length) {
            console.log(...args);
        }
    }
};

export default log;
