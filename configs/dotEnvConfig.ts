import { DotenvConfigOptions } from "dotenv";

const dotEnvConfig: DotenvConfigOptions = {
	path: `.${process.env.NODE_ENV}.env`,
};

export default dotEnvConfig;
